// Copyright year updater with dynamic range support
document.addEventListener('DOMContentLoaded', function() {
  const copyrightElements = document.querySelectorAll('[data-copyright]');
  
  copyrightElements.forEach(element => {
    const baseYear = element.dataset.copyright || '2025';
    const currentYear = new Date().getFullYear();
    
    // Handle year ranges (2023-2025) or single years
    const yearText = baseYear === currentYear ? 
      currentYear : 
      `${baseYear}-${currentYear}`;
    
    element.innerHTML = `&copy; ${yearText} Carnivore's Delight. All rights reserved.`;
  });
});