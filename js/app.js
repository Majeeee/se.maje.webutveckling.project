const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

// Lägg till en klickhändelse på knappen
menuButton.addEventListener('click', () => {
  // Toggla "active"-klassen på menyn
  navLinks.classList.toggle('active');
});

// Hämta sökboxen och knappen
const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('searchButton');

// Lägg till en eventlistener för att söka när användaren klickar på knappen
searchButton.addEventListener('click', () => {
  const query = searchBox.value.trim().toLowerCase();
  if (query) {
    alert(`Du sökte efter: "${query}"`);
    // Här kan du implementera din egen söklogik, t.ex. söka i en databas eller visa resultat.
  } else {
    alert('Skriv något i sökfältet för att söka.');
  }
});
