import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <BookingForm />
    </div>
  );
}

export default App;
