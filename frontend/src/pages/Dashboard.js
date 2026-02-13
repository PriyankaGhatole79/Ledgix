export default async function Dashboard() {
  try {
    // Make sure this matches the port and path exactly!
    //const response = await fetch('http://localhost:3000/api/user'); 
    const response = await fetch('https://silver-succotash-ggrrvwr7wrw2vvpx-3000.app.github.dev/api/user'); 
    if (!response.ok) {
       throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return `
      <div class="card">
        <h1>Dashboard</h1>
        <p>User: <strong>${data.name}</strong></p>
        <p>Role: ${data.role}</p>
        <button id="toSettings">Settings</button>
      </div>
    `;
  } catch (error) {
    console.error("Fetch Error:", error);
    return `<h1>Error</h1><p>Could not connect to the backend.</p>`;
  }
}