import './App.css';
import ApiFetch from './Components/ApiFetch';
import Footer from './Components/Footer';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <ApiFetch/>
      <Footer/>
    </div>
  );
}

export default App;
