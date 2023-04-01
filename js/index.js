const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const searchInput = document.querySelector('#search-input').value;

  fetch(`https://api.github.com/search/users?q=${searchInput}`, {
    headers: {
      Accept: "application/vnd.github.v3+json" 
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    displaySearchResults(data.items);
  })
  .catch(error => console.error(error));
});
