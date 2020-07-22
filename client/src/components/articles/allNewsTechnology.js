import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

class AllNewsTechnology extends React.Component {
    state = {

    }
    render() {
        const { technologyArticles } = this.props;
        return (
            <div>
                <div>
                    <ul class='ulContainer'>
                        {technologyArticles.map((technology) => (
                            <div className="row">
                                <div className="col-s12-m7">
                                    <div className="card" id="cards">
                                        <li className='technologyCard'>
                                            <div className="card-image">
                                                <img id="cards-img" class='technologyImg' src={technology.urlToImage}></img>
                                            </div>
                                            {/* <strong>Author</strong>: {technology.author}<br></br> */}
                                            {/* <strong>Content</strong>: {technology.content}<br></br> */}
                                            <span className="card-title">{technology.title}</span>

                                            <div className="card-content">
                                                <strong>description</strong>: {technology.description}<br></br>
                                            </div>
                                            <strong>Source</strong>: {technology.source.name}<br></br>
                                            <div className="card-action">
                                                <a href={technology.url} target='_blank'>Read More...</a>
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
export default AllNewsTechnology;
