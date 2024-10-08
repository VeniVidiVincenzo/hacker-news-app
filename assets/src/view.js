const newsList = document.getElementById('news-list');

// Funzione per visualizzare una notizia
export function displayNews(newsData) {
    const newsItem = document.createElement('li');
    newsItem.innerHTML = `<a href="${newsData.url}" target="_blank">${newsData.title}</a> - ${new Date(newsData.time * 1000).toLocaleString()}`;
    newsList.appendChild(newsItem); // Aggiungi la notizia alla lista
}

// Funzione per mostrare un messaggio di errore
export function showError(message) {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = message;
    errorMessage.style.color = 'red'; // Colore rosso per l'errore
    newsList.appendChild(errorMessage); // Aggiungi il messaggio di errore alla lista
}
