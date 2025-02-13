// Function to fetch data from the API 1
function PromiseA1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/posts')
                .then(response => response.json())
                .then(data => {
                    displayData(data.posts);
                    resolve(true); 
                });
        }, 1000);
    });
}

// Function to fetch data from the API 2
function PromiseA2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/products')
                .then(response => response.json())
                .then(data => {
                    displayData(data.products);
                    resolve(true); 
                });
        }, 5000);
    });
}

// Function to fetch data from the API 3
function PromiseA3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/todos')
                .then(response => response.json())
                .then(data => {
                    displayData(data.todos);
                    resolve(true); 
                });
        }, 8000); 
    });
}

// Function to display data in the table
function displayData(items) {
    const tableBody = document.querySelector('#dataTable tbody');
    items.forEach(item => {
        const row = document.createElement('tr');
        const titleCell = document.createElement('td');
        const bodyCell = document.createElement('td');

        titleCell.textContent = item.title || item.name || item.task; 
        bodyCell.textContent = item.body || item.description || item.completed; 

        row.appendChild(titleCell);
        row.appendChild(bodyCell);
        tableBody.appendChild(row);
    });
}

// Event listener for the button
document.getElementById('fetchDataBtn').addEventListener('click', () => {
    PromiseA1()
        .then((result) => {
            if (result) return PromiseA2();
        })
        .then((result) => {
            if (result) return PromiseA3();
        })
        .catch(error => console.error('Error fetching data:', error));
});