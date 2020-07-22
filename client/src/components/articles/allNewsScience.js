import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

class AllNewsScience extends React.Component {
    state = {

    }
    render() {
        const { scienceArticles } = this.props;
        return (
            <div>
                <div>
                    <ul class='ulContainer'>
                        {scienceArticles.map((science) => (
                            <div className="row">
                                <div className="col-s12-m7">
                                    <div className="card">
                                        <li className='scienceCard'>
                                            <div className="card-image">
                                                <img class='scienceImg' src={science.urlToImage}></img>
                                            </div>
                                            {/* <strong>Author</strong>: {science.author}<br></br> */}
                                            {/* <strong>Content</strong>: {science.content}<br></br> */}
                                            <span className="card-title">{science.title}</span>

                                            <div className="card-content">
                                                <strong>description</strong>: {science.description}<br></br>
                                            </div>
                                            <strong>Source</strong>: {science.source.name}<br></br>
                                            <div className="card-action">
                                                <a href={science.url} target='_blank'>Read More...</a>
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
export default AllNewsScience;
