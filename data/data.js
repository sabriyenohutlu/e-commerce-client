import { cookies } from 'next/headers';
// export async function fetchProducts() {
//     try {
//         const response = await fetch('http://localhost:5000/products');
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         const products = await response.json();
//         return products;

//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//     }
// }

// fetchProducts();

export async function getFavorites() {
    const cookieStore = await  cookies();
    const favorites = JSON.parse(cookieStore.get('favorites') || '[]');

    return favorites; // Favori ürünlerin listesi
}

export async function getUserId() {
    const cookieStore = await  cookies(); // Çerezlere erişim
    let userId = cookieStore.get('userId')?.value; // Çerezi kontrol et
  
    // Kullanıcı ID'sini dön
    return userId;
  }

export async function getCart() {
    const cookieStore = await  cookies();
    const cart = JSON.parse(cookieStore.get('cart') || '[]');

    return cart; // Sepetteki ürünlerin listesi
}