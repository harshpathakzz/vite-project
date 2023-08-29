// src/App.tsx
import SidebarCard from './components/SidebarCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Sidebar Card Example</h1>
      <SidebarCard  cardWidth="400px" cardHeight="200px">
        <h2>Custom Content</h2>
        <p>This is custom content inside the card.</p>
      </SidebarCard>
    </div>
  );
}

export default App;
