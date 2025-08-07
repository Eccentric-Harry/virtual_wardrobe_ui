import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...');

  useEffect(() => {
    fetch('/api/health')
      .then(response => response.json())
      .then(data => {
        setBackendStatus(`Status: ${data.status}, Service: ${data.service}`);
      })
      .catch(() => {
        setBackendStatus('Error: Could not connect to the backend.');
      });
  }, []);

  return (
    <>
      <h1>AI Virtual Wardrobe</h1>
      <div className="card">
        <p>
          Backend Connection Status: <strong>{backendStatus}</strong>
        </p>
      </div>
    </>
  );
}

export default App;