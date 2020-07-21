import React from 'react';
import './style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";


class NavBar2 extends React.Component{
  state={

  }

  render(){
      return(
        //   <Router>
        <div>
            <nav>
                <ul>
                   <li>general</li>
                   <li>Technical</li>
                   <li>Sports</li>
                   <li>busieness</li>
                </ul>
            </nav>
         </div>
       
      )
  }
}


export default NavBar2;