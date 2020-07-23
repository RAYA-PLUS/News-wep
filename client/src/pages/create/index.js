import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'draft-js/dist/Draft.css';

import "./style.css";
export default class Create extends Component {
    state = {
        title: "",
        content: "",
        user: "",
        redirect: null,
        // editorState: EditorState.createEmpty()
    };
    ///
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleClick() {
        var myReq = new Request('http://localhost:5000/api/users/newArticle');
        fetch(myReq, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then(data => {
                console.log('Success:', data);
                window.location.href = '/articles'
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    // onEditorStateChange = editorState => {
    //     console.log('...00,0,', editorState);

    //     this.setState({ editorState });
    // };
    render() {

        return (
            <div className="new" >
                <label>Writer name</label>
                <input type="text" name="user" placeholder="Enter you name" onChange={(e) => this.handleChange(e)}></input>
                <label>Title</label>
                <input type="text" name="title" placeholder="Enter the title" onChange={(e) => this.handleChange(e)}></input>
                {/* <div className="edit">
                    <Editor
                        editorState={editorState}
                        wrapperClassName="rich-editor demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorStateChange}
                        placeholder="The message goes here..." />
                </div> */}
                <br /> <br />
                <label>Article</label>
                <textarea name="content" placeholder="type yout article here" rows="10" cols="50" onChange={(e) => this.handleChange(e)}></textarea>
                <br /> <br />
                <input class="addBtn" type="button" value="Add" onClick={() => this.handleClick()}></input>
                <br /> <br />
            </div >
        );
    }
}