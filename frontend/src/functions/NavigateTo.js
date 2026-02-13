import Dashboard from '../pages/Dashboard.js';
import Settings from '../pages/Settings.js';
import Debit from '../pages/Debit.js';
import Credit from '../pages/Credit.js';
const routes = {
  'dashboard': Dashboard,
  'settings': Settings,
  'debit': Debit,
  'credit': Credit
};

export default async function NavigateTo(pageKey) {
  const app = document.querySelector('#app');
  
  if (routes[pageKey]) {
    app.innerHTML = await routes[pageKey]();  // 👈 FIX HERE
    window.history.pushState({ page: pageKey }, "", `/${pageKey}`);
  } else {
    app.innerHTML = "<h1>404 Not Found</h1>";
  }
}