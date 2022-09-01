import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
    //   let names=["karthik","raghu","pavan", "sathya","sai"]
        return(
            <>
            <div id="main">
               {/* Do not remove the main div */}
                <ol key="relativeList">
                   {/*{names.map((name,index)=>(
                       <li
                       key={"relativeListItem1"+index}>{name}</li> */}



                {/* //    <li key ={"relativeListItem1"} >{name}</li> */}
                     <li key ="relativeListItem1" >karthik</li>
                     <li key ="relativeListItem2" >pavan</li>
                     <li key ="relativeListItem3" >raghu</li>
                     <li key ="relativeListItem4" >karthi</li>
                     <li key ="relativeListItem5" >pavanji</li>
                     <li key ="relativeListItem6" >raju</li>
                    {/* ))}  */}
               </ol>


            </div>
            </>
            
        )
    }
}


export default App;
