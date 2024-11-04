// app/api/location/route.js
import geoip from 'geoip-lite';

export async function GET(req) {
  console.log(111);
  /*
  const ip = req.headers.get('x-forwarded-for') || req.ip; // IP 주소 추출
  const geo = geoip.lookup(ip); // GeoIP 조회

  return new Response(
    JSON.stringify({
      ip: ip,
      location: geo ? `${geo.city}, ${geo.country}` : 'Unknown',
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
  */
}
