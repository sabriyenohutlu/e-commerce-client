import { cookies } from 'next/headers'; // Çerezleri yönetmek için kullanılır

export async function POST(req) {
  const { product_id } = await req.json();

  // Çerezi al
  const cookieStore = cookies();
  const cart = JSON.parse(cookieStore.get('cart') || '[]');

  // Sepete ürün ekle
  if (!cart.includes(product_id)) {
    cart.push(product_id);
  }

  // Sepet çerezini güncelle
  const headers = new Headers();
  headers.set('Set-Cookie', `cart=${JSON.stringify(cart)}; HttpOnly; Path=/; Max-Age=31536000`);

  return new Response(
    JSON.stringify({ message: 'Ürün sepete eklendi', cart }),
    { status: 200, headers }
  );
}
