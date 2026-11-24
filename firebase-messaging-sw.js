// Service worker des notifications (Firebase Cloud Messaging) — Tableau de bord (coach)
// À poser à côté de index.html, avec ce nom exact : firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js', 'https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyC9BmsyRf2MY7qxRO7bL1wRhkJuig0IcLQ",
  authDomain: "cooperation-familiale.firebaseapp.com",
  projectId: "cooperation-familiale",
  storageBucket: "cooperation-familiale.firebasestorage.app",
  messagingSenderId: "527954161214",
  appId: "1:527954161214:web:e3297a3109523e9fa1ab6f"
});
var messaging = firebase.messaging();
// Les messages sont envoyés en « data » seulement : c'est ici qu'on écrit la notification, avec un texte volontairement
// neutre (jamais le contenu du message, jamais de donnée de santé : il s'affiche sur l'écran verrouillé).
messaging.onBackgroundMessage(function(payload) {
  var d = (payload && payload.data) || {};
  return self.registration.showNotification(d.title || 'Tableau de bord', {
    body: d.body || 'Tu as un nouveau message.',
    icon: 'icon-192.png', badge: 'icon-192.png', tag: d.tag || 'message', renotify: true, silent: false, vibrate: [200, 100, 200, 100, 200],
    data: { url: d.url || self.registration.scope }
  });
});
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  var url = (event.notification.data && event.notification.data.url) || self.registration.scope;
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(list) {
    for (var i = 0; i < list.length; i++) { if (list[i].url.indexOf(self.registration.scope) === 0 && 'focus' in list[i]) return list[i].focus(); }
    return clients.openWindow(url);
  }));
});
