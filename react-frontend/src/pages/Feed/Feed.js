import React, { Component } from 'react';
import '../../css/Feed.css';

class Feed extends Component {
    state = {
        isEditing: false,
        posts: [],
        totalPosts: 0,
        editPost: null,
        status: '',
        postPage: 1,
        postsLoading: true,
        editLoading: false
      };

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:8080/feed/posts")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => console.log(err));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    loadPosts = () => {
        fetch('URL')
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch posts.');
        }
        return res.json();
      })
      .then(resData => {
        this.setState({
          posts: resData.posts,
          totalPosts: resData.totalItems,
          postsLoading: false
        });
      })
      .catch(this.catchError);
    }

    render() {
        return (
            <div className="FeedWrapper">
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
            
        )
    }
}

export default Feed;