if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js',{scope: '/'})
        .then((reg) => {
          console.log('Service worker registered!', reg);
        })
        .catch((err) => {
          console.log('Service worker registration failed:', err);
        });
    });

    
  }

  document.getElementById('unregisterButton').addEventListener('click', function() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        if (registrations.length) {
          for (let registration of registrations) {
            registration.unregister().then(success => {
              console.log('Service worker unregistered:', success);
            }).catch(error => {
              console.error('Failed to unregister service worker:', error);
            });
          }
        } else {
          console.log('No service workers are currently registered.');
        }
      });
    }
  });
  