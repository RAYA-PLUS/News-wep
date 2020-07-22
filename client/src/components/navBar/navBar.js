import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";


import Login from '../../pages/Login'
import SignUp from '../../pages/SignUp'
import './style.css'
import NavBar2 from '../navBar2/navBar.js';
import AllArticles from '../articles/allArticles.js';
import AllHeaders from '../headers/allHeaders.js';
import Search from '../search/search.js'

class NavBar extends React.Component {
    state = {
        articles: [],
        headers: [],
        searchValue: '',
        loggedIn: false
    }
    // componetDidMount to get and rener the data on page load
    componentDidMount(){
        //------------- Headers ------------------//

        var url = 'http://newsapi.org/v2/top-headlines?' +
                  'country=us&' +
                  'apiKey=d8f586a00aa04b1eb67e5424cad2a18a';

        var req = new Request(url);
        let fetchReq = fetch(req);
        fetchReq.then((data) => {
            console.log(data.json().then((data1) => {
                console.log(data1.articles);
                return this.setState({headers: data1.articles});
            }))
        })
        //------------ Articles ---------------//

        var query = this.state.searchValue || 'Web development'; // web development as default search query
        var url2 = 'http://newsapi.org/v2/everything?' +
        'q=' + query + '&' +
        'from=2020-07-12&' +
        'sortBy=popularity&' +
        'apiKey=d8f586a00aa04b1eb67e5424cad2a18a';

        var req2 = new Request(url2);
        let fetchReq2 = fetch(req2);
        // console.log(fetchReq);
        fetchReq2.then((data) => {
            console.log(data.json().then((data1) => {
                console.log(data1.articles);
                this.setState({articles: data1.articles});
            }))
        })
	}
    handleArticlesClick(searchValue) {

        var query = this.state.searchValue || 'Web development';
        var url = 'http://newsapi.org/v2/everything?' +
        'q=' + query + '&' +
        'from=2020-07-12&' +
        'sortBy=popularity&' +
        'apiKey=d8f586a00aa04b1eb67e5424cad2a18a';

        var req = new Request(url);
        let fetchReq = fetch(req);
        fetchReq.then((data) => {
            console.log(data.json().then((data1) => {
                console.log(data1.articles);
                this.setState({articles: data1.articles});
            }))
        })
    }
    handleHeadersClick () {

        var url =
			"http://newsapi.org/v2/top-headlines?" +
			"country=us&" +
			"apiKey=d8f586a00aa04b1eb67e5424cad2a18a";

        var req = new Request(url);
        let fetchReq = fetch(req);
        fetchReq.then((data) => {
            console.log(data.json().then((data1) => {
                console.log(data1.articles);
                this.setState({headers: data1.articles});
            }))
        })
    }
    //used a callback to get the search value from child to parent

    searchCallback(searchValue) {
        console.log('we At searchCallback');
        this.setState({searchValue: searchValue});
        this.handleArticlesClick(searchValue);
    }
    handleLogin(){
      this.setState({
        loggedIn: true
      })
    }
    handleLogout(){
      this.setState({
        loggedIn: false
      })
      alert('logged out')
    }
    render() {
        return (
			<Router>
				<nav>
					<div className="nav-wrapper">
						<ul>
							<li className="brand-logo"></li>
							<li
								onClick={this.handleHeadersClick.bind(this)}
								className="brand-logo">
								<Link to="/headline">HeadLines</Link>
							</li>
							<li
								onClick={this.handleArticlesClick.bind(this)}
								className="brand-logo Nav__articles">
								<Link
									to={
										this.state.loggedIn
											? "/articles"
											: "/login"
									}>
									Articles
								</Link>
							</li>
							<li className="Nav__login">
								<NavLink to="/login">Login</NavLink>
							</li>
							<li className="Nav__signup">
								<NavLink to="/sign-up">Signup</NavLink>
							</li>
							<li>
								<button
									onClick={this.handleLogout.bind(this)}
									id="logout">
									logout
								</button>
							</li>
						</ul>
					</div>
				</nav>
				<div id="navBar2">
					<NavBar2 />
				</div>
				<Switch>
					<Route exact path="/articles">
						<Search
							callbackfromNavBar={this.searchCallback.bind(this)}
						/>
						<AllArticles articles={this.state.articles} />
					</Route>
					<Route exact path="/headline">
						<AllHeaders headers={this.state.headers} />
					</Route>

					<Route exact path="/login">
						<Login handleLogin={this.handleLogin.bind(this)} />
					</Route>
					<Route exact path="/sign-up">
						<SignUp handleLogin={this.handleLogin.bind(this)} />
					</Route>
				</Switch>
			</Router>
		);
    }
}

export default NavBar;
