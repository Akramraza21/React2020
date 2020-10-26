import React, { Component } from 'react'
import axios from 'axios'
export default class graph extends Component {
    constructor(){
        super();
        this.state = {postCommentData:null,post:null,comment:null,user_id:1,show:false}
    }
    // componentDidMount(){
        
    //     if(this.state.user_id){
    //         axios.get(`http://52.175.201.248:3000/facebook/facebook_post_comments/${this.state.user_id}`)
    //         .then(resp=>this.setState({postCommentData:resp.postCommentData}))
    //         .catch(error=>console.log(error))
    //     }
    // }
  clickHandler () {
      axios.get(`http://52.175.201.248:3000/facebook/facebook_post_comments/${this.state.user_id}`)
            .then(resp=>this.setState({postCommentData:resp.data}))
            .catch(error=>console.log(error))

    axios.get(`http://52.175.201.248:3000/facebook/facebook_post/${this.state.user_id}`)
            .then(resp=>this.setState({post:resp.data}))
            .catch(error=>console.log(error))
    axios.get(`http://52.175.201.248:3000/facebook/facebook_comments/${this.state.user_id}`)
            .then(resp=>this.setState({comment:resp.data}))
            .catch(error=>console.log(error))
    //   let show = this.state.show
    //   this.setState({show:!show})
    //   console.log(this.state.postCommentData);
  }
    render() {
        let {postCommentData} = this.state
        console.log(this.state);
        return (
            <div>
                <input placeholder = "User id" onChange={event=>this.setState({user_id:event.target.value})}/>
                <button onClick={()=>this.clickHandler()}>Fetch Data</button>
                {postCommentData?postCommentData.list.map((res)=><div key={res._id}> <p> post id : {res.post_id}  post comment id: {res.comment_id}</p></div>):null}
            </div>
        )
    }
}
