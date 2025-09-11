import { useState } from "react"

function App() {
  const [color, setColor]=useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>  
    {/* injected variable is color */}

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>setColor("#f20505")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#f20505"}}>Red</button>
        {/* onclick() method takes a function with the parameter i.e: setColor("red") and not the reference of the function i.e: setColor. here in this case i have used a callback fn*/}
        <button onClick={()=>setColor("#fa8c16")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#fa8c16"}}>Orange</button>
        <button onClick={()=>setColor("#e9ed02")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#e9ed02"}}>Yellow</button>
        <button onClick={()=>setColor("#0ecc2b")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#0ecc2b"}}>Green</button>
        <button onClick={()=>setColor("#2222f2")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#2222f2"}}>Blue</button>
        <button onClick={()=>setColor("#e309ca")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#e309ca"}}>Pink</button>
        <button onClick={()=>setColor("#8d09bd")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#8d09bd"}}>Purple</button>
        
      </div>
    </div>

    </div>
  )
}

export default App
