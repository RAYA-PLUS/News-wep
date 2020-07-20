import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
    state = {
    }
    render() {
        return (
          <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">News Web App</h5>
              <p className="grey-text text-lighten-4">Keeping you up-to-date with what's going on around the world.</p>
            </div>
            <div className="col l4 offset-l2 s12">
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2020 Copyright News-App Team
          </div>
        </div>
      </footer>
        )
    }
}
export default Footer;
