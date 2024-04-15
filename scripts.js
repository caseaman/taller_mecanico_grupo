// JavaScript para la funcionalidad de la caja de búsqueda
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search-box input[type="text"]');
  const searchButton = document.querySelector('.search-box button');

  searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
      // Aquí podrías implementar la lógica para realizar la búsqueda
      alert('Buscando: ' + searchTerm);
    } else {
      alert('Por favor, ingresa un término de búsqueda válido.');
    }
  });
});

// JavaScript para la funcionalidad del calendario
document.getElementById('openCalendar').addEventListener('click', function() {
    var calendarContainer = document.getElementById('calendarContainer');
    calendarContainer.classList.toggle('hidden');
});
