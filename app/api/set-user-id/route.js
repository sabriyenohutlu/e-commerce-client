import { v4 as uuidv4 } from 'uuid';

export async function GET(req) {
  // Benzersiz kullanıcı ID'si oluştur
  const userId = uuidv4();

  // Çerezi ayarla
  const headers = new Headers();
  headers.set(
    'Set-Cookie',
    `userId=${userId}; HttpOnly; Path=/; Max-Age=31536000; SameSite=Lax`
  );

  // Yanıt oluştur ve çerezi döndür
  return new Response(
    JSON.stringify({ message: "Kullanıcı ID'si oluşturuldu", userId }),
    {
      status: 200,
      headers,
    }
  );
}

