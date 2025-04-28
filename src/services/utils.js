const scrollTo = (sectionId, offset = 40) => {
    const section = document.getElementById(sectionId);
    if (section) {
        // Get the current scroll position
        const currentScroll = window.scrollY || window.pageYOffset;

        // Get the top position of the section relative to the viewport
        const sectionTop = section.getBoundingClientRect().top;

        // Calculate the target scroll position with the offset
        const targetScroll = currentScroll + sectionTop - offset;

        // Use window.scrollTo for smooth scrolling with the calculated position
        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    }
};

export {
    scrollTo
};