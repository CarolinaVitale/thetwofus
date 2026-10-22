import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function usePageEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = 'The Two of Us — ' + ({ '/': 'A little more joy.', '/catalog': 'The collection', '/about': 'Our story', '/contact': 'Say hello' }[pathname] || 'Page not found');
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.section-top, .product, .pack-copy, .about-copy, .about-art').forEach(element => {
      element.classList.add('reveal'); observer.observe(element);
    });
    return () => observer.disconnect();
  }, [pathname, hash]);
}
