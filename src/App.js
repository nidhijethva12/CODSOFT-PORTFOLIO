import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
function App() {
  return (
    <>
      <div className='back'>
        <Navbar />
        <div className="container mt-4">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;