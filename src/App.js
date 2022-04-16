import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  const notify = () => toast("Wow so easy !");
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}

export default App;
