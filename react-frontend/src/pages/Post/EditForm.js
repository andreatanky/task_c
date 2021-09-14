import React, {useState} from 'react';
import '../../css/EditForm.css';
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const EditForm =  props => { 
   const [field, setField] = useState({
       title: '',
       name: '',
       content: ''
   });

    const handleSubmit = event => {
        event.preventDefault();
        console.log("in edit form:" + props.id);
        let data = {
            title: field.title,
            content: field.content,
            creator: {name: field.name}
        };

        let url = 'http://localhost:8080/feed/post/' + props.id;

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        fetch(url, requestOptions)
          .then(res => {
            if (res.status !== 200 && res.status !== 201) {
              throw new Error('Editing a post failed!');
            }
            return res.json();
          })
          .then(resData => {
            console.log(resData);
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
            <p className="postHeader">Edit post {console.log(props.editPostId)}</p>
            <form method="POST" action="#" onSubmit={handleSubmit}>     
                <div className="wrapper">           
                    <div className="title">
                        <label>Title</label>
                        <input onChange={handleChange} required id="editTitleInput" name="title" />
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

export default EditForm;