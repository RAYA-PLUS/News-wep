import React from 'react';

class Articles extends React.Component {
    state = {}
    handleClick(e) {
document.location='/create'
    }
        render() {                                
        return ( 
            <button className="newBtn" onClick={this.handleClick} type="submit" name="action">NEW Articles</button>
        )
    }
}
export default Articles;