import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './taskReducer';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Addtask from './Addtask';
import Todolist from './Todolist';
function App() {
  const store = createStore(taskReducer)
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Addtask />
        <Todolist />
      </Provider>
    </div>
  );
}

export default App;
