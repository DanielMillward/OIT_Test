export async function fetchData(query_string) {
    try {
        const htmlSafeString = encodeURIComponent(query_string);
        const response = await fetch('http://localhost:8080/movies?title=' + htmlSafeString);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}