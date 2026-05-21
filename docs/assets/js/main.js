// Reading Progress
window.addEventListener('scroll', () => {
    const body = document.body;
    const html = document.documentElement;
    const total = Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
    ) - window.innerHeight;
    const pct = (window.scrollY / total) * 100;
    document.getElementById('progress').style.width = Math.min(100, pct) + '%';
});

// TOC Active Highlighting
const tocLinks = document.querySelectorAll('.toc-link');
const sections = document.querySelectorAll('.article-body section[id]');

const tocObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            tocLinks.forEach(l => l.classList.remove('active'));
            const a = document.querySelector(`.toc-link[href="#${entry.target.id}"]`);
            if (a) a.classList.add('active');
        }
    });
}, { rootMargin: '-15% 0px -75% 0px' });

sections.forEach(s => tocObserver.observe(s));
