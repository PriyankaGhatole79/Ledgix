import Dashboard from '../pages/Dashboard.js';
import Settings from '../pages/Settings.js';

const routes = {
  'dashboard': Dashboard,
  'settings': Settings
};

export default function NavigateTo(pageKey) {
  const app = document.querySelector('#app');
  
  if (routes[pageKey]) {
    // IMPORTANT: Call the function routes[pageKey]() to get the string
    app.innerHTML = routes[pageKey](); 
    window.history.pushState({ page: pageKey }, "", `/${pageKey}`);
  } else {
    app.innerHTML = "<h1>404 Not Found</h1>";
  }
}