import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,

} from "react-router-dom";
import axios from "axios";

import Login from '../../pages/Login'
import SignUp from '../../pages/SignUp'
import './style.css'

import AllArticles from '../articles/allArticles.js';
import AllHeaders from '../headers/allHeaders.js';
import Create from '../../pages/create';
import Search from '../search/search.js'
class NavBar extends React.Component {
    state = {
        articles: [],
        myArticles: [],
        headers: [],
        searchValue: '',
        loggedIn: false,
        redirect: null
    }
    // componetDidMount to get and rener the data on page load
    componentDidMount() {
        //------------- Headers ------------------//

        var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=e018037c75ab4c1aa3757d3e457ec977';

        var req = new Request(url);
        let fetchReq = fetch(req);
        fetchReq.then((data) => data.json()).then((data1) => {
            console.log('--------->', data1);
            this.setState({ headers: data1.articles });
        })
        //------------ Articles ---------------//

        var query = this.state.searchValue || 'Web development'; // web development as default search query
        var url2 = 'http://newsapi.org/v2/everything?' +
            'q=' + query + '&' +
            'from=2020-07-12&' +
            'sortBy=popularity&' +
            'apiKey=e018037c75ab4c1aa3757d3e457ec977';

        var req2 = new Request(url2);
        let fetchReq2 = fetch(req2);
        // console.log(fetchReq);
        fetchReq2.then((data) => data.json()).then((data1) => {
            console.log('--------->', data1);
            this.setState({ articles: data1.articles });
        })
        ////myarticles///
        axios.get('http://localhost:5000/api/users/newArticle')
            .then(data => {
                console.log('Success:', data.data);
                this.setState({ myArticles: data.data });
            })
            .catch((error) => {
                console.error('Error::::>', error);
            });

    }
    // updateMine(data) {
    //     console.log('data in the parent...', data)
    //     this.setState({ myArticles: data })
    // }

    handleArticlesClick(searchValue) {

        var query = this.state.searchValue || 'Web development';
        var url = 'http://newsapi.org/v2/everything?' +
            'q=' + query + '&' +
            'from=2020-07-12&' +
            'sortBy=popularity&' +
            'apiKey=e018037c75ab4c1aa3757d3e457ec977';

        var req = new Request(url);
        let fetchReq = fetch(req);
        fetchReq.then((data) => data.json()).then((data1) => {
            console.log('--------->', data1);
            this.setState({ articles: data1.articles });
        })
    }
    handleHeadersClick() {

        var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=e018037c75ab4c1aa3757d3e457ec977';

        var req = new Request(url);
        let fetchReq = fetch(req);
        fetchReq.then((data) => data.json()).then((data1) => {
            console.log('--------->', data1);
            this.setState({ headers: data1.articles });
        })
    }
    //used a callback to get the search value from child to parent

    searchCallback(searchValue) {
        console.log('we At searchCallback');
        this.setState({ searchValue: searchValue });
        this.handleArticlesClick(searchValue);
    }
    handleLogin() {
        this.setState({
            loggedIn: true
        })
    }
    handleLogout() {
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
                            <li onClick={this.handleHeadersClick.bind(this)} className="brand-logo"><Link to="/">HeadLines</Link></li>
                            <li onClick={this.handleArticlesClick.bind(this)} className="brand-logo Nav__articles" ><Link to={this.state.loggedIn ? '/articles' : '/login'}>Articles</Link></li>
                            <li className="Nav__login"><NavLink to='/login'>Login</NavLink></li>
                            <li className="Nav__signup"><NavLink to='/sign-up'>Signup</NavLink></li>
                            <li><button onClick={this.handleLogout.bind(this)}>logout</button></li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/articles'>

                        <Search callbackfromNavBar={this.searchCallback.bind(this)} />
                        <AllArticles articles={this.state.articles} myArticles={this.state.myArticles} />
                    </Route>
                    <Route exact path='/'>
                        <AllHeaders headers={this.state.headers} />
                    </Route>
                    <Route exact path='/create'>
                        <Create />
                    </Route>
                    <Route exact path="/login">
                        <Login handleLogin={this.handleLogin.bind(this)} />
                    </Route>
                    <Route exact path="/sign-up">
                        <SignUp handleLogin={this.handleLogin.bind(this)} />
                    </Route>

                </Switch>
            </Router>
        )
    }
}

export default NavBar;
