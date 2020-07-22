import React from 'react';
import AllNewsGeneral from '../articles/allNewsGeneral.js'
import AllNewsBusiness from '../articles/allNewsBusiness.js'
import AllNewsScience from '../articles/allNewsScience.js'
import AllNewsSports from '../articles/allNewsSports.js'
import AllNewsTechnology from '../articles/allNewsTechnology.js'
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
    generalArticles:[],
    sportsArticles :[],
    businessArticles: [],
    technologyArticles: [],
    scienceArticles:[],
  }
  
  handleClickGeneral(){
    var url = 'http://newsapi.org/v2/top-headlines?category=general&country=ae&apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';
    var req2 = new Request(url);
    let fetchReq2 = fetch(req2);
    // console.log(fetchReq);
    fetchReq2.then((data) => {
        console.log(data.json().then((data1) => {
            console.log(data1.articles);
            this.setState({generalArticles: data1.articles});
        }))
    })
  }
  handleClickSports(){
    var url = 'http://newsapi.org/v2/top-headlines?category=sports&country=ae&apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';
    var req2 = new Request(url);
    let fetchReq2 = fetch(req2);
    // console.log(fetchReq);
    fetchReq2.then((data) => {
        console.log(data.json().then((data1) => {
            console.log(data1.articles);
            this.setState({sportsArticles: data1.articles});
        }))
    })
  }
 
  handleClickBusiness() {
    var url = 'http://newsapi.org/v2/top-headlines?category=business&country=ae&apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';
        var req2 = new Request(url);
    let fetchReq2 = fetch(req2);
    // console.log(fetchReq);
    fetchReq2.then((data) => {
      console.log(data.json().then((data1) => {
        console.log(data1.articles);
        this.setState({ businessArticles: data1.articles });
      }))
    })
  }
  handleClickTechnology() {
    var url = 'http://newsapi.org/v2/top-headlines?category=technology&country=ae&apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';
    var req2 = new Request(url);
    let fetchReq2 = fetch(req2);
    // console.log(fetchReq);
    fetchReq2.then((data) => {
      console.log(data.json().then((data1) => {
        console.log(data1.articles);
        this.setState({ technologyArticles: data1.articles });
      }))
    })
  }
  handleClickScience() {
    var url = 'http://newsapi.org/v2/top-headlines?category=science&country=ae&apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';
    var req2 = new Request(url);
    let fetchReq2 = fetch(req2);
    // console.log(fetchReq);
    fetchReq2.then((data) => {
      console.log(data.json().then((data1) => {
        console.log(data1.articles);
        this.setState({ scienceArticles: data1.articles });
      }))
    })
  }
  render(){
      return(
     <Router>
        <div>
            <nav>
                <ul>
                <li onClick={this.handleClickGeneral.bind(this)}><Link to="/general">General</Link></li>
                <li onClick={this.handleClickSports.bind(this)}><Link to="/Sports">Sports</Link></li>
                <li onClick={this.handleClickBusiness.bind(this)}><Link to="/Business">Business</Link></li>
                <li onClick={this.handleClickTechnology.bind(this)}><Link to="/Technology">Technology</Link></li>
                <li onClick={this.handleClickScience.bind(this)}><Link to="/Science">Science</Link></li>
               </ul>
            </nav>
         </div>
             <Switch>
            <Route exact path='/general'>
              <AllNewsGeneral generalArticles = {this.state.generalArticles} />
            </Route>
            <Route exact path='/Sports'>
              <AllNewsSports sportsArticles ={this.state.sportsArticles} />
            </Route>
            <Route exact path='/Business'>
              <AllNewsBusiness businessArticles ={this.state.businessArticles} />
            </Route>
            <Route exact path='/Technology'>
              <AllNewsTechnology technologyArticles ={this.state.technologyArticles} />
            </Route>
            <Route exact path='/Science'>
              <AllNewsScience scienceArticles ={this.state.scienceArticles} />
            </Route>
            </Switch>
        </Router>
      )
  }
}


export default NavBar2;