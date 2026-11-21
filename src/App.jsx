import { useState } from "react";

function App() {
 const [data, setData] = useState({
  name: "",
  email: ""
 });

const inputHandler = (e) => {
  const {name, value} = e.target;
  setData({...data, [name]: value})
}


 function btnClear(){
  setData({
    name: '',
    email: ''
  })
 }
  return (
    <>
      <div className="w-screen h-screen bg-green-200 flex flex-col justify-center items-center">
        <input type="text" name="name" value={data.name} placeholder="enter your name" onChange={inputHandler}/>
        <br />
        <input type="email" placeholder="enter your email" name="email" value={data.email} onChange={inputHandler}/>
        <br /><br />
        <button onClick={btnClear}>Clear</button>
        <br /><br />  
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
      </div>
    </>
  );
}

export default App;
