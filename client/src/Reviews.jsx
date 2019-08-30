import React from 'react';
import ReactDOM from 'react-dom';
var moment = require('moment');

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
    this.showMore = this.showMore.bind(this);
  }
  showMore(e) {
    e.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    })
  }
  render() {

    let button;
    let message;
    if (this.state.expanded === false) {
      message = this.props.message.slice(0, 320);
      message += '...';
      console.log(message);
      button = <a href="#" onClick={this.showMore}>
              Show More
              </a>
    } else {
      message = this.props.message;
      button = null;
    }
    return (
      <div>
        <div className="message">
          {message.split('\n').map((paragraph, i) => {
            return <p key={i}>{paragraph}</p>
          })}
        </div>
        {button}
      </div>
    )
  }

}



class Reviews extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    let response;
    if (this.props.review.response.comment !== '') {
      response =  <div className="response">
                    <div className="responseImage">
                      <img src={this.props.review.response.image}></img>
                    </div>
                    <div className="respnseTittle">
                      Response from {this.props.review.response.name}:
                    </div>
                    <div className="responsecomment">
                      {this.props.review.response.comment}
                    </div>
                    <div className="responseDate">
                      {moment(this.props.review.response.dateCreated).format("MMMM YYYY")}
                    </div>
                  </div>
    } else {
      response = null;
    }
    let message;
    if (this.props.review.comment.length < 320) {
      message = <div className="message">
      {this.props.review.comment.split('\n').map((paragraph, i) => {
        return <p key={i}>{paragraph}</p>
      })}
      </div>
    } else {
      message = <Message message={this.props.review.comment}/>
    }

    return(
      <div className="review">
        <div className="image">
          <img src={this.props.review.userImage}></img>
        </div>
        <div className="username">
          {this.props.review.userName}
        </div>
        <div className="date">
          {moment(Date.parse(this.props.review.dateCreated)).format("MMMM YYYY")}
        </div>
        {message}
        {response}
      </div>
    )

  }
}

const ReviewsList = (props) => (
   <div className="feed">
    <div className="reviews">
    {props.reviews.map((feedItem, i)=>
      <Reviews review={feedItem} key={i}/>
    )}
    </div>
  </div>
);

export default ReviewsList;

