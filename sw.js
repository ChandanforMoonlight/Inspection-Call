// Network-first navigation; never cache authentication or inspection data.
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
 if(event.request.mode!=='navigate'||!event.request.url.startsWith(self.registration.scope))return;
 event.respondWith(fetch(event.request).catch(()=>new Response(`<!doctype html><html lang="en"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Inspection Call — Offline</title><body style="font-family:system-ui;padding:32px;background:#f3f6fc;color:#16243c"><h1>You are offline</h1><p>Connect to the internet to sign in, book an inspection or view history.</p><button onclick="location.reload()" style="padding:12px 20px">Try again</button></body></html>`,{status:503,headers:{'Content-Type':'text/html; charset=utf-8'}})));
});
