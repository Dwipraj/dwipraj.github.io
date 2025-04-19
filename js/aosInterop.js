window.initializeAOS = () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
};

window.refreshAOS = () => {
    AOS.refresh();
};