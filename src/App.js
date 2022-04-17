// import logo from './logo.svg';
import './App.css';
// import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
// import { motion, MotionConfig } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';
import auth from './Firebase/firebase.init';
// import { Refresh } from "./refresh";


function App() {

  console.log(auth)
  const notify = () => toast("Wow so easy !");
  return (


    <div>
      <div className="App">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />

      </div>
      {/* <motion.div className="example-container"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}


      >
        <h2>hello</h2>


      </motion.div> */}
    </div>





  );
}



export default App;




