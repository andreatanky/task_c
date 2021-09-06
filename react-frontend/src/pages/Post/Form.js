import React from 'react';
import '../../css/Form.css';
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Form =  () => {  
    return (
        <Container className="PostWrapper" id="wrapper">
            <p className="postHeader">Write a post!</p>
            <form method="POST" action="#">     
                <div className="wrapper">           
                    <div className="title">
                        <label>Post Title</label>
                        <input required id="titleInput" name="title" />
                    </div>
                    <div className="author">
                        <label>Author</label>
                        <input required id="authorInput" name="author" />
                    </div>   
                </div>
                <div className="wrapper">           
                    <div className="content">
                        <label>Content</label>
                        <input required id="contentInput" name="content" />
                    </div>               
                </div>
                <Button type="submit" id="submit" variant="contained">
                    Submit
                </Button>
            </form>
           
        </Container>
    )
}

export default Form;