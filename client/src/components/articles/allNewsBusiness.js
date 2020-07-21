import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
class AllNewsBusiness extends React.Component {
    state = {

    }
    render() {
        const { business } = this.props;
        return (
            <div>
                <div>
                    <ul class='ulContainer'>
                        {business.map((business) => (
                            <div className="row">
                                <div className="col-s12-m7">
                                    <div className="card">
                                        <li className='businessCard'>
                                            <div className="card-image">
                                                <img class='businessImg' src={business.urlToImage}></img>
                                            </div>
                                            {/* <strong>Author</strong>: {business.author}<br></br> */}
                                            {/* <strong>Content</strong>: {business.content}<br></br> */}
                                            <span className="card-title">{business.title}</span>

                                            <div className="card-content">
                                                <strong>description</strong>: {business.description}<br></br>
                                            </div>
                                            <strong>Source</strong>: {business.source.name}<br></br>
                                            <div className="card-action">
                                                <a href={business.url} target='_blank'>Read More...</a>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
export default AllNewsBusiness;
