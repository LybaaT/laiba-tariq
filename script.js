function setTheme(new_theme) {
    if (!['dark', 'light'].includes(new_theme)) {
        console.error('Not a valid theme');
    };
    document.documentElement.setAttribute('theme', new_theme);
    localStorage.setItem('preferredTheme', new_theme)
};

function toggleTheme() {
    const old_theme = document.documentElement.getAttribute('theme');
    const new_theme = (old_theme == 'dark' ? 'light' : 'dark')
    setTheme(new_theme)
};

const saved_theme = localStorage.getItem('preferredTheme');
if (['dark', 'light'].includes(saved_theme)) {
    setTheme(saved_theme)
};

document.body.onscroll = function() {
    const reveals = document.querySelectorAll(".reveal");
  
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
            if (!element.classList.contains('active')) {
                let delay = element.getAttribute('delay');
                delay = (delay == null ? 0 : delay);
                setTimeout(function() {
                    element.classList.add("active");
                }, parseInt(delay))
            }
        } else if (elementTop > windowHeight) {
            if (element.classList.contains('active')) {
                element.classList.remove("active");
            }
        }
    })
};
