import ReactDOM from 'react-dom/client';
import App from './App';

// Auto remove cookies and site data after session
const clearSiteData = () => {
  try {
    // Clear localStorage
    localStorage.clear();
    
    // Clear sessionStorage
    sessionStorage.clear();
    
    // Clear cookies
    document.cookie.split(";").forEach(cookie => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    });
    
    // Clear cache storage
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }
    
    console.log('Site data cleared successfully');
  } catch (error) {
    console.error('Error clearing site data:', error);
  }
};

// Clear data when page is about to unload
window.addEventListener('beforeunload', clearSiteData);

// Also clear data after a certain time (e.g., 30 minutes of inactivity)
let inactivityTimer: NodeJS.Timeout;

const resetInactivityTimer = () => {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(clearSiteData, 30 * 60 * 1000); // 30 minutes
};

// Reset timer on user activity
const userActivityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
userActivityEvents.forEach(event => {
  window.addEventListener(event, resetInactivityTimer, true);
});

// Start the timer
resetInactivityTimer();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <App />
);