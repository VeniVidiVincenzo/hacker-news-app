const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const NEW_STORIES_URL = `${BASE_URL}/newstories.json`;

// Funzione per ottenere gli ID delle ultime notizie
export async function fetchNewsIDs() {
    try {
        const response = await fetch(NEW_STORIES_URL);
        if (!response.ok) {
            throw new Error('Non è stato possibile recuperare gli ID delle news');
        }
        return await response.json(); // Restituisce gli ID delle news
    } catch (error) {
        throw new Error(`Errore nel recupero degli ID delle notizie: ${error.message}`);
    }
}

// Funzione per ottenere i dettagli di una singola notizia
export async function fetchNewsDetails(id) {
    try {
        const newsDetailUrl = `${BASE_URL}/item/${id}.json`;
        const response = await fetch(newsDetailUrl);
        if (!response.ok) {
            throw new Error(`Errore nel recupero dei dettagli della notizia con ID: ${id}`);
        }
        return await response.json(); // Restituisce i dettagli della notizia
    } catch (error) {
        throw new Error(`Errore nel recupero dei dettagli delle notizie: ${error.message}`);
    }
}
