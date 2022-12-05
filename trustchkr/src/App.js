import logo from './logo.svg';
import './App.css';
import { Form } from './form/Form';

function App() {
  return (
    <div className="App">
      <img style={{width:'80%',height:'300px' , marginLeft:'12%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgS1EZ1xxT8aalQWcOTtlCM1eEEuKmVyntQ&usqp=CAU'></img>
      <h1 className='wel'>Welcome to your own flight journey</h1>
     <Form/>
    </div>
  );
}

export default App;
