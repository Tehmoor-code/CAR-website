const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const query = searchInput.value.trim();
    if (query) {
      alert(`Searching for: ${query}`);
      searchInput.value = ''; // Clear the search input after "search"
    }
  }
});

// Click outside to collapse the search bar
document.addEventListener('click', (event) => {
  if (!event.target.closest('.search-container')) {
    searchInput.blur();
    searchInput.value = '';
  }
});