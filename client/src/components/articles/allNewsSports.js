import React from 'react';
import './style.css'

class AllNewsSports extends React.Component {
    state = {

    }
    render() {
        const { sportsArticles } = this.props;
        return (
            <div>
                <div>
                    <ul class='ulContainer'>
                        {sportsArticles.map((sport) => (
                            <div className="row">
                                <div className="col-s12-m7">
                                    <div className="card">
                                        <li className='sportCard'>
                                            <div className="card-image">
                                                <img class='sportImg' src={sport.urlToImage}></img>
                                            </div>
                                            {/* <strong>Author</strong>: {sport.author}<br></br> */}
                                            {/* <strong>Content</strong>: {sport.content}<br></br> */}
                                            <span className="card-title">{sport.title}</span>

                                            <div className="card-content">
                                                <strong>description</strong>: {sport.description}<br></br>
                                            </div>
                                            <strong>Source</strong>: {sport.source.name}<br></br>
                                            <div className="card-action">
                                                <a href={sport.url} target='_blank'>Read More...</a>
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
export default AllNewsSports;
