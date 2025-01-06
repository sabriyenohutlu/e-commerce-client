export async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const products = await response.json();
        return products;
      
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

fetchProducts();