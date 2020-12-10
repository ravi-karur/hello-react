import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Person name='Ravi' age='39'></Person>
      <Person name='Prabha' age='31'></Person>
      <Person name='Diya' age='12'>Daughter</Person>
      <Person name='Dishanth' age='12'></Person>
    </div>
  );
}

export default App;
