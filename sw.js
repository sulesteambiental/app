// Exigido pelo celular para oferecer "Instalar aplicativo". Não guarda nada: tudo vem da internet, como antes.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
