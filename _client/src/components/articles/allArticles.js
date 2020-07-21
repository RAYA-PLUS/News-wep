import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
class AllArticles extends React.Component {
    state = {
    }
    render() {
        const { articles } = this.props;
        return (

            <div>
                <ul class='ArticlesUlContainer'>
                    {articles.map((article, index) => (
                       <div className="row">
                          <div className="col s12 m7">
                          <div className="Articles__Page">
                        <li class='articlesCard' key={index}>
                        <div className="Articles__Page__card">

                            {/* <strong>Author</strong>: {article.author}<br></br> */}
                            <div className="card-image">
                            <img class='articlesImg' src={article.urlToImage}></img>
                            </div>

                            <strong>Source</strong>: {article.source.name}<br></br>
                            <span className="card-title">
                            <strong>Title</strong>: {article.title} <br></br>
                            </span>
                            {/* <strong>Content</strong>: {article.content}<br></br> */}
                            {/* <strong>description</strong>: {article.description}<br></br> */}
                            {/* <strong>url</strong>: <a href={article.url}>{article.url}</a> */}
                             <div className="card-action">
                            <a href={article.url} target='_blank'>Read More...</a>
                              </div>
                        </div>
                        </li>
                        </div>
                        </div>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}
export default AllArticles;
