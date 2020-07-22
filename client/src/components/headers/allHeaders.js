import React from "react";
import Slider from "@farbenmeer/react-spring-slider";
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
            currentIndex: 0,
            length: this.props.data,
        };
        this.handleSubmet = this.handleSubmet.bind(this);
    }
    componentDidMount() {
        this.handleSubmet();
    }
    handleSubmet() {
        console.log("ddddddddddd");
        var config = {
            method: "get",
            url:
                "http://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=dab775d7b77f4144bd4ae3e09310c696",
            headers: {
                Cookie: "__cfduid=de243f568a48fc0e99e026771c00245bf1595177107",
            },
        };

        axios(config)
            .then((response) => {
                this.setState({ data: response.data.articles });
                console.log("iiii", this.state.data);
            })
            .catch((error) => {
                console.log("err<>...", error);
            });
    }
    onSlideChange = (index) => console.log(`changed to slide ${index}`);
    BulletComponent = ({ onClick, isActive }) => (
        <li
            style={{
                width: "10px",
                height: "10px",
                backgroundColor: "rgb(105 99 105 / 89%)",
                margin: "0 2px",
                opacity: isActive && "0.5",
                borderRadius: "5px",
            }}
            onClick={onClick}
        />

    );

    ArrowComponent = ({ onClick, direction }) => {
        return (
            <div
                style={{
                    border: "1px solid black",
                    padding: "1em",
                    backgroundColor: "white",
                }}
                onClick={onClick}
            >
                {direction}
            </div>
        );
    };

    render() {
        const { headers } = this.props;
        const { data } = this.state;

        return (
            <div>
                <div style={{ width: "100%", height: "200px" }}>
                    <Slider
                        activeIndex={0}
                        auto={3000}
                        hasBullets
                        BulletComponent={this.BulletComponent}
                        ArrowComponent={this.ArrowComponent}
                        onSlideChange={this.onSlideChange}
                    >
                        {data.map((dataIN, key) => {
                            return (
                                <div style={{ width: "100%", height: "200px" }}>
                                    <div
                                        style={{
                                            backgroundImage: `url(${dataIN.urlToImage})`,
                                            height: "200px",
                                            width: "50%",
                                            backgroundPosition: "center",
                                            backgroundSize: "cover",
                                            marginLeft: "300px",
                                            padding: "100px",
                                        }}
                                    >
                                        <br></br>
                                        <a href={dataIN.url} >
                                            {dataIN.title}
                                        </a>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>

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