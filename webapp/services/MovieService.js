export async function fetchData() {
    try {
        const response = await fetch('http://localhost:8080/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}