window.initLottieOnceOnView = (elementId, startFrame, endFrame) => {
    const player = document.getElementById(elementId);
    if (!player) return;

    // Hide player until it's ready and properly positioned
    player.style.visibility = "hidden";

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Unobserve to trigger only once
                obs.unobserve(player);

                // Wait for player to be ready
                const waitUntilReady = () => {
                    const lottieInstance = player.getLottie();

                    if (lottieInstance && lottieInstance.totalFrames > 0) {
                        // Seek to the start frame before showing the player
                        lottieInstance.goToAndStop(startFrame, true);
                        player.style.visibility = "visible";

                        // Then start the animation
                        player.play();

                        const stopAt = endFrame;
                        const frameHandler = () => {
                            if (lottieInstance.currentFrame >= stopAt) {
                                player.pause();
                                player.removeEventListener("frame", frameHandler);
                            }
                        };

                        player.addEventListener("frame", frameHandler);
                    } else {
                        requestAnimationFrame(waitUntilReady);
                    }
                };

                waitUntilReady();
            }
        });
    }, {
        threshold: 0.7
    });

    observer.observe(player);
};