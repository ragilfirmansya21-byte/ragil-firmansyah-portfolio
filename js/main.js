document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const closeMenu = () => {
    if (!menu || !nav) return;
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  };

  if (menu && nav) {
    menu.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a[href]').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        closeMenu();
        menu.focus();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 840) closeMenu();
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }

  const progressBar = document.querySelector('.progress span');
  if (progressBar) {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = `${maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0}%`;
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
  }

  const sectionLinks = [...document.querySelectorAll('#site-nav a[href^="#"]')]
    .map((link) => [link, document.querySelector(link.getAttribute('href'))])
    .filter(([, section]) => section);
  if ('IntersectionObserver' in window && sectionLinks.length) {
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionLinks.forEach(([link, section]) => link.toggleAttribute('aria-current', section === entry.target));
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });
    sectionLinks.forEach(([, section]) => activeObserver.observe(section));
  }

  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const fields = new FormData(contactForm);
      const firstName = String(fields.get('firstName')).trim();
      const lastName = String(fields.get('lastName')).trim();
      const email = String(fields.get('email')).trim();
      const message = String(fields.get('message')).trim();
      const composeUrl = new URL('https://mail.google.com/mail/');

      composeUrl.searchParams.set('view', 'cm');
      composeUrl.searchParams.set('fs', '1');
      composeUrl.searchParams.set('to', 'ragilfirmansya21@gmail.com');
      composeUrl.searchParams.set('su', `Portfolio enquiry from ${firstName} ${lastName}`);
      composeUrl.searchParams.set('body', `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.open(composeUrl.toString(), '_blank', 'noopener');
    });
  }
});
