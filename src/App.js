import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
      <div className="application">
        <Outlet />
      </div>
  );
}

export default App;
