import './App.css';
import HomePage from './components/HomePage';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Services/>
      <WhyChooseUs/>
      <AboutUs/>
    </div>
  );
}

export default App;
