import React from "react"
import ReactDoM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"

const App = ()=>{
    return(
        <div className="appLayout">
           <Header/>
           <Body/>
        </div>
    )
}


const root = ReactDoM.createRoot(document.getElementById("root"));

root.render(<App/>);