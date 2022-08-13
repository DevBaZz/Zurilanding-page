"use strict";
LottieInteractivity.create({
    mode: 'scroll',
    player: '#firstLottie',
    container: "#MyContainerId",
    actions: [
        {
            visibility: [0.2, 1],
            type: 'seek',
            frames: [0, 38],
        },
    ],
});
