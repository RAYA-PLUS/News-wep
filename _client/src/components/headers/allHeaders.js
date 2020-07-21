import React from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import AllArticles from "../articles/allArticles";
import "./style.css";
var axios = require("axios");

class AllHeaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  handleSubmet() {
    console.log("ddddddddddd");
    var config = {
      method: "get",
      url:
        "http://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=dab775d7b77f4144bd4ae3e09310c696",
      headers: {
        Cookie: "__cfduid=de243f568a48fc0e99e026771c00245bf1595177107",
      },
    };

    axios(config)
      .then((response) => {
        this.setState({ data: response.data });
        console.log("iiii", this.state.data.articles);
      })
      .catch((error) => {
        console.log("err<>...", error);
      });
  }

  render() {
    const { headers } = this.props;
    const { data } = this.state;
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
     
      <div>
        { this.handleSubmet.bind(this)}
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            {data.map((dataIN, key) => {
              return <div> {dataIN.title}</div>;
            })}
          </div>
        </Slider>

        <div>
          <ul class="ulContainer">
            {headers.map((header) => (
              <div className="row">
                <div className="col-s12-m7">
                  <div className="card">
                    <li className="headersCard">
                      <div className="card-image">
                        <img class="headersImg" src={header.urlToImage}></img>
                      </div>
                      {/* <strong>Author</strong>: {header.author}<br></br> */}
                      {/* <strong>Content</strong>: {header.content}<br></br> */}
                      <span className="card-title">{header.title}</span>
                      <div className="card-content">
                        <strong>description </strong>: {header.description}
                        <br></br>
                      </div>
                      <strong>Source</strong>: {header.source.name}
                      <br></br>
                      <div className="card-action">
                        <a href={header.url} target="_blank">
                          Read More...
                        </a>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AllHeaders;
