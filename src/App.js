import MyNavBar from './components/NavBar'
import {Header, Footer} from './components/Tutorial'
import Greeting from './components/Greeting'
import ToDoItem from './components/ToDoItem'
import ToDoList from './components/ToDoList'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <MyNavBar />
      <div className='container'>
      <Greeting />
      <Header />
      </div>
      <ToDoList />
      <Footer />
    </div>
    
      
  );
}

export default App;
