// ===========================================
// CONTROL DE TEMA DÍA/NOCHE - SIGLO ZERO
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;
  
  // Verificar tema guardado
  const savedTheme = localStorage.getItem('siglozero-theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon-o');
    themeIcon.classList.add('fa-sun-o');
  }
  
  // Cambiar tema al hacer clic
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      themeIcon.classList.remove('fa-moon-o');
      themeIcon.classList.add('fa-sun-o');
      localStorage.setItem('siglozero-theme', 'dark');
    } else {
      themeIcon.classList.remove('fa-sun-o');
      themeIcon.classList.add('fa-moon-o');
      localStorage.setItem('siglozero-theme', 'light');
    }
  });
});