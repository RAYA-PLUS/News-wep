import React from 'react';
import AllArticles from '../articles/allArticles.js'
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
    generalArticles:'',
    sportsArticles :'',
    businessArticles: '',
    technologyArticles: '',
    scienceArticles:'',

  }

  handleClickGeneral(){
    var url = 'http://newsapi.org/v2/top-headlines?' +
    'country=eg&' + 'catagory=general&'+
    'apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';

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
    var url = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' + 'catagory=sports&'+
    'apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';

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
    var url = 'http://newsapi.org/v2/top-headlines?' +
      'country=us&' + 'catagory=business&' +
      'apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';

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

  handleClickBusiness() {
    var url = 'http://newsapi.org/v2/top-headlines?' +
      'country=us&' + 'catagory=business&' +
      'apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';

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
    var url = 'http://newsapi.org/v2/top-headlines?' +
      'country=us&' + 'catagory=technology&' +
      'apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';

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
    var url = 'http://newsapi.org/v2/top-headlines?' +
      'country=us&' + 'catagory=science&' +
      'apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';

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
                   <li onClick={this.handleClickGeneral.bind(this)}>general</li>
                   <li onClick={this.handleClickSports.bind(this)}>Technical</li>
                   <li onClick={this.handleClickBusiness.bind(this)}>Technical</li>
                    <li onClick={this.handleClickTechnology.bind(this)}>Technical</li>
                    <li onClick={this.handleClickScience.bind(this)}>Technical</li>
                    
                   <li >Sports</li>
                   <li>busieness</li>
                </ul>
            </nav>
         </div>
             <Switch>
                <Route exact path ='/anywhere'>
                    <AllArticles articles = {this.state.generalArticles} />
                </Route>
            </Switch>
        </Router>
       
      )
  }
}


export default NavBar2;