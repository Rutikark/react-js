import React from "react"
import ReactDOM from "react-dom/client";
import {useState,useEffect} from "react"
const App = ()=>{
  const [input,setInput] = useState("");
  const [result,setResult] = useState([]);
  const [showResults,setShowResults] = useState(false);
  const [cache, setCache] = useState({});
  const [option,setOption] = useState("")
  

  //Api call
  const fetchData = async()=>{
    if(cache[input]){
      console.log("caching" + input)
      setResult(cache[input])
      return;
    }
    console.log("api call" + input)
    const data =await fetch('https://dummyjson.com/recipes/search?q='+input);
    const json =await data.json();
    setResult(json?.recipes);
    setCache((prev)=>({...prev,[input]:json.recipes}))
  }

  useEffect(()=>{
     const timer = setTimeout(fetchData, 300);
     return()=>{
      clearTimeout(timer)
     }
  },[input])
    return(
        <div className="search-bar">
          <h1>Auto Search Bar using React</h1>
          <input type="text"
          className="search-input" 
          value={input} onChange={(e)=>setInput(e.target.value)}
          onFocus={()=>setShowResults(true)}
          onBlur={()=>setShowResults(false)}/>
          <div className="result-container">
            {showResults && result.map((r)=><span className="result" key={r.id}>{r.name}</span>)}
          </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>);



