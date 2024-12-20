ServerEvents.recipes(event => {
    // Remove all recipes that output items with "signalum" in their ID
    event.remove({ output: /.*signalum.*/ });
    event.remove({ output: /.*blutonium.*/ });
    event.remove({ output: /.*enderium.*/ });
    event.remove({ output: /.*lumium.*/ });
    event.remove({ output: /.*mithril.*/ });
    event.remove({ output: /.*pink_slime.*/ });
    event.remove({ output: /.*refined_glowstone.*/ });
    event.remove({ output: /.*refined_obsidian.*/ });
});
