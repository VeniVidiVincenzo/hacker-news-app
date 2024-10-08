import { fetchNewsIDs, fetchNewsDetails } from './service.js';
import { displayNews, showError } from './view.js';

const loadMoreButton = document.getElementById('load-more');
let newsIDs = [];
let currentIndex = 0;
const NEWS_BATCH_SIZE = 10; // Numero di notizie da caricare ad ogni click

// Funzione per caricare le notizie
async function loadNews() {
    const newsBatch = newsIDs.slice(currentIndex, currentIndex + NEWS_BATCH_SIZE);
    for (const id of newsBatch) {
        try {
            const newsData = await fetchNewsDetails(id); // Fetch dei dettagli della news
            if (newsData) {
                displayNews(newsData); // Visualizza la notizia
            }
        } catch (error) {
            showError(error.message); // Mostra un errore in caso di problemi
        }
    }
    currentIndex += NEWS_BATCH_SIZE; // Aggiorna l'indice
}

// Funzione per gestire il caricamento delle notizie all'avvio
async function init() {
    try {
        newsIDs = await fetchNewsIDs();
        loadNews(); // Carica le prime notizie
        loadMoreButton.addEventListener('click', loadNews); // Carica altre notizie al click
    } catch (error) {
        showError(error.message); // Mostra un errore in caso di problemi
    }
}

// Avvio dell'applicazione
init();
