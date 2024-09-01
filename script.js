document.addEventListener('DOMContentLoaded', function() {
  const submenuItems = document.querySelectorAll('.has-submenu > a');

  submenuItems.forEach(item => {
      item.addEventListener('click', function(e) {
          const parent = this.parentElement;

          // Si el clic es en el enlace del submenú principal, entonces no redirige
          if (parent.querySelector('.submenu')) {
              e.preventDefault();
              parent.classList.toggle('active');
          }
      });
  });
});
