import { cookies } from 'next/headers'; // Çerezleri yönetmek için kullanılır

export async function POST(req) {
  const { product_id } = await req.json();

  // Çerezi al
  const cookieStore = cookies();
  const favorites = JSON.parse(cookieStore.get('favorites') || '[]');

  // Favorilere ürün ekle
  if (!favorites.includes(product_id)) {
    favorites.push(product_id);
  }

  // Favori ürünler çerezini güncelle
  const headers = new Headers();
  headers.set('Set-Cookie', `favorites=${JSON.stringify(favorites)}; HttpOnly; Path=/; Max-Age=31536000`);

  return new Response(
    JSON.stringify({ message: 'Ürün favorilere eklendi', favorites }),
    { status: 200, headers }
  );
}
