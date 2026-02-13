import './style.css';
import NavigateTo from './functions/NavigateTo.js';

// 1. Initial render - Let the function handle the first load!
// This ensures the URL and the content match from the start.
NavigateTo('dashboard');

// 2. Event Delegation
// We listen for clicks on the entire #app container.
document.querySelector('#app').addEventListener('click', (event) => {
  // Check if the clicked element (or its parent) has the ID we want
  if (event.target.id === 'toSettings') {
    // Prevent default if it's an <a> tag
    event.preventDefault(); 
    NavigateTo('settings');
  }
  
  if (event.target.id === 'toDashboard') {
    event.preventDefault();
    NavigateTo('dashboard');
  }

  if (event.target.id === 'toCredit') {
    event.preventDefault();
    NavigateTo('credit');
  }

  if (event.target.id === 'toDebit') {
    event.preventDefault();
    NavigateTo('debit');
  }
});