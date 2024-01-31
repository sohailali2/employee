import logo from './logo.svg';
import './App.css';
import AppRoutes from "./routes"
import Header from './components/header/header';
import  {BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="App">
       <Router>
        <Header />
        <AppRoutes />
       </Router>
      </div>
    </>
  );
}

export default App;
