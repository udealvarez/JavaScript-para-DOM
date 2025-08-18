

async function fetchData() {
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

        if (!response.ok) {
            throw new Error("hubo un problema llamando a la API");
        }

        const data = await response.json();

        document.getElementById('async-text').innerHTML = data.title

    } catch (error) {
        document.getElementById('async-text').innerHTML = error
    }
}

fetchData()