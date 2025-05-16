// Automatically update copyright year in footer
document.addEventListener('DOMContentLoaded', function() {
  const copyrightElement = document.querySelector('.footer-copyright');
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.innerHTML = `&copy; ${currentYear} Carnivore's Delight. All rights reserved.`;
  }
});