export const hoverRow = () => {
  const contacts = document.getElementsByClassName('contact');
  const logo = document.querySelector('.logo');
  const text = logo.textContent;
  for (const contact of contacts) {
    contact.addEventListener('mouseenter', () => {
      logo.textContent = contact.phoneLink.textContent;
    });
    contact.addEventListener('mouseleave', () => {
      logo.textContent = text;
    });
  }
};
