import React, {useState} from 'react';
import '../../css/Form.css';
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Form =  () => { 
   const [field, setField] = useState({
       title: '',
       name: '',
       content: ''
   });

    const handleSubmit = event => {
        event.preventDefault();
        let data = {
            title: field.title,
            content: field.content,
            author: {name: field.name}
        };

        let url = 'http://localhost:8080/feed/post';

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        fetch(url, requestOptions)
          .then(res => {
            if (res.status !== 200 && res.status !== 201) {
              throw new Error('Creating a post failed!');
            }
            return res.json();
          })
          .then(resData => {
            console.log(resData);
            // const post = {
            //   _id: resData.post._id,
            //   title: resData.post.title,
            //   content: resData.post.content,
            //   creator: resData.post.creator,
            //   createdAt: resData.post.createdAt
            // };
          })
          .catch(err => {
            console.log(err);
          });
      };

      const handleChange = event => {
          setField({
            ...field,
            [event.target.name]: event.target.value
          })
      }


    return (
        <Container className="PostWrapper" id="wrapper">
            <p className="postHeader">Write a post!</p>
            <form method="POST" action="#" onSubmit={handleSubmit}>     
                <div className="wrapper">           
                    <div className="title">
                        <label>Title</label>
                        <input onChange={handleChange} required id="titleInput" name="title" />
                    </div>
                    <div className="author">
                        <label>Author</label>
                        <input onChange={handleChange} required id="authorInput" name="name" />
                    </div>   
                </div>
                <div className="wrapper">           
                    <div className="content">
                        <label>Content</label>
                        <input onChange={handleChange} required id="contentInput" name="content" />
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