import React from 'react';

import './style.css'
class Search extends React.Component {
    state = {
        searchValue: ''
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.callbackfromNavBar(this.state.searchValue);
    }
    render() {
        const { callbackfromNavBar } = this.props;
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>

                <input type='search' name='search' name='searchValue' value={this.state.searchValue} onChange={this.handleChange.bind(this)} className="Search__input" placeholder="Search by keyword"></input>
                <button type='submit' className="btn waves-effect waves-light" type="submit" name="action">Search Articles</button>

            </form>
        )
    }
}
export default Search;
