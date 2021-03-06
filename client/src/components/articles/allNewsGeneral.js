import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
class AllNewsGeneral extends React.Component {
    state = {

    }
    render() {
        const { generalArticles } = this.props;
        console.log(generalArticles);
        return (
            <div>
                <div>
                    <ul class='ulContainer'>
                        {generalArticles.map((general) => (
                            <div className="row">
                                <div className="col-s12-m7">
                                    <div className="card" id="cards">
                                        <li className='generalCard'>
                                            <div className="card-image">
                                                <img id="cards-img" class='generalImg' src={general.urlToImage}></img>
                                            </div>
                                            {/* <strong>Author</strong>: {general.author}<br></br> */}
                                            {/* <strong>Content</strong>: {general.content}<br></br> */}
                                            <span className="card-title">{general.title}</span>

                                            <div className="card-content">
                                                <strong>description</strong>: {general.description}<br></br>
                                            </div>
                                            <strong>Source</strong>: {general.source.name}<br></br>
                                            <div className="card-action">
                                                <a href={general.url} target='_blank'>Read More...</a>
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
export default AllNewsGeneral;
