// Ore vein calibration, part 1: empirically sample TFC's actual rock-layer generation instead
// of reverse-engineering RockLayerSettings' noise/tree logic by hand. Run in-game as an op:
//   /scanrocks <samples> <radius>
// e.g. /scanrocks 300 5000  -- samples 300 random columns within +/-5000 blocks of the command
// origin (a 10x10km world), forcing generation of any chunk that isn't already generated.
// For each column, every Y level is read and, if it's a natural TFC rock block
// (tfc:rock/raw|gravel|sand|sandstone/<rock>), tallied into an 8-block-tall Y band per rock.
// Results are written as CSV to kubejs/exported_rock_layers.csv: rock,y_band,count -- raw counts,
// not normalized, so P(y|rock) or P(rock|y) can be computed afterwards however's most useful
// (spreadsheet, notebook, etc.) without re-running the (slow) scan.
//
// Method names below (getBlock, getMinBuildHeight, Arguments.INTEGER_ARGUMENT, ...) are the
// standard KubeJS/vanilla Level API, but this hasn't been run yet in this pack -- if a call
// doesn't exist under this exact name, the console error will name the real one, same as every
// other version-mismatch we've hit this session.
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(
        Commands.literal('scanrocks')
            .requires(source => source.hasPermission(2))
            .then(
                Commands.argument('samples', Arguments.INTEGER.create(event)).then(
                    Commands.argument('radius', Arguments.INTEGER.create(event)).executes(ctx => {
                        const samples = Arguments.INTEGER.getResult(ctx, 'samples')
                        const radius = Arguments.INTEGER.getResult(ctx, 'radius')
                        scanRockLayers(ctx.source, samples, radius)
                        return 1
                    })
                )
            )
    )
})

function scanRockLayers(source, samples, radius) {
    try {
        scanRockLayersUnsafe(source, samples, radius)
    } catch (e) {
        // The command dispatcher swallows exceptions from .executes() into a generic chat
        // message with no stack trace logged anywhere, so surface it ourselves. Kept to just
        // String(e) -- touching e.stack/other properties on a wrapped Java exception can itself
        // throw and mask the original error.
        source.sendFailure(Text.of('scanrocks failed: ' + String(e)))
    }
}

function scanRockLayersUnsafe(source, samples, radius) {
    const level = source.getLevel()
    const minY = level.getMinBuildHeight()
    const maxY = level.getMaxBuildHeight()
    const binSize = 8
    // Matches any natural (un-mined, un-crafted) rock block: tfc:rock/raw/granite,
    // tfc:rock/gravel/diorite, tfc:rock/sand/chalk, tfc:rock/sandstone/shale, etc.
    const rockPattern = /^tfc:rock\/(raw|gravel|sand|sandstone)\/(.+)$/

    const counts = {} // rock -> yBand -> count

    source.sendSuccess(Text.of(`Scanning ${samples} columns within +/-${radius} blocks, y ${minY}..${maxY}. This will take a while for ungenerated chunks.`), true)

    for (let i = 0; i < samples; i++) {
        let x = Math.floor((Math.random() * 2 - 1) * radius)
        let z = Math.floor((Math.random() * 2 - 1) * radius)

        for (let y = minY; y < maxY; y++) {
            let block = level.getBlock(x, y, z)
            if (!block) continue

            let match = rockPattern.exec(block.id)
            if (!match) continue

            let rock = match[2]
            let yBand = Math.floor(y / binSize) * binSize
            if (!counts[rock]) counts[rock] = {}
            counts[rock][yBand] = (counts[rock][yBand] || 0) + 1
        }

        if ((i + 1) % 25 === 0) {
            console.info(`scanrocks: ${i + 1}/${samples} columns done`)
        }
    }

    const lines = ['rock,y_band,count']
    Object.keys(counts).sort().forEach(rock => {
        Object.keys(counts[rock]).map(Number).sort((a, b) => a - b).forEach(yBand => {
            lines.push(`${rock},${yBand},${counts[rock][yBand]}`)
        })
    })

    const filePath = 'kubejs/exported_rock_layers.csv'
    JsonIO.write(filePath, lines.join('\n'))

    source.sendSuccess(Text.of(`Done. Wrote ${lines.length - 1} rows to ${filePath}`), true)
}
