// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Textbar from './components/TextForm';
import './App.css';

function App() {
  return (
    <>

      <Navbar />
      {/* <Navbar title = "TextUtilss"/> */}
      <div className='container my-3'>
      <Textbar heading= "Enter the text to analyze"/>
      </div>
      

    </>
    
  );
}

export default App;
