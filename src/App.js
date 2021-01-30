import MyNavBar from './components/NavBar'
import Tutorial from './components/Tutorial'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <MyNavBar />
      <div className='container'>
      <Tutorial />
      </div>
    </div>
    
      
  );
}

export default App;
