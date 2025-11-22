import React from 'react';
import './DeveloperSetup.css';

function DeveloperSetup({ setup }) {
  return (
    <section className="developer-setup" id="setup">
      <div className="container">
        <h2>Developer Setup</h2>
        <div className="setup-grid">
          <div className="setup-card">
            <h3>🖥️ VS Code Setup</h3>
            <h4>Extensions:</h4>
            <ul>
              {setup.vscode.extensions.map((ext, index) => (
                <li key={index}>{ext}</li>
              ))}
            </ul>
            <p><strong>Theme & Settings:</strong> {setup.vscode.settings}</p>
          </div>
          
          <div className="setup-card">
            <h3>💻 Terminal Setup</h3>
            <p><strong>Environment:</strong> {setup.terminal.setup}</p>
            <p><strong>Shell:</strong> {setup.terminal.shell}</p>
          </div>
          
          <div className="setup-card">
            <h3>✨ Preferred Font</h3>
            <p><strong>Font:</strong> {setup.font.name}</p>
            <p><strong>Features:</strong> {setup.font.features}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeveloperSetup;