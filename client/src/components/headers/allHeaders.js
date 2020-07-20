import React from 'react';
import AllArticles from '../articles/allArticles';
import './style.css'

class AllHeaders extends React.Component {
    state= {

    }
    render() {
        const { headers } = this.props;
        return (
            <div>
                <div>
                    <ul class='ulContainer'>
                        {headers.map((header) => (
                          <div className="row">
                          <div className="col-s12-m7">
                          <div className="card">
                          <li className='headersCard'>
                          <div className="card-image">
                            <img class='headersImg' src={header.urlToImage}></img>
                          </div>
                            {/* <strong>Author</strong>: {header.author}<br></br> */}
                            {/* <strong>Content</strong>: {header.content}<br></br> */}
                            <span className="card-title">{header.title}</span>

                            <div className="card-content">
                            <strong>description</strong>: {header.description}<br></br>
                            </div>
                            <strong>Source</strong>: {header.source.name}<br></br>
                            <div className="card-action">
                            <a href={header.url} target='_blank'>Read More...</a>
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
export default AllHeaders;
