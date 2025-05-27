// src/App.js
import React from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>🌟  Reusable Buttons Demo</h1>
      <div className="button-container">
        <Button type="ocean" label="Ocean Blue" />
        <Button type="peach" label="Peach" />
        <Button type="lava" label="Lava" />
        <Button type="muted" label="Muted" disabled />
        <Button type="neon" label="Neon Green" />
      </div>
    </div>
  );
}

export default App;
