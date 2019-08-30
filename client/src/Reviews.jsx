import React from 'react';
import ReactDOM from 'react-dom';
var moment = require('moment');
import styled from 'styled-components';


const TextDiv = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  color: #484848;
`;
const NameDiv = styled.div`
    /* margin: 0px !important; */
    word-wrap: break-word !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
`;
const ResponseNameDiv = styled.div`
  word-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  line-height: 1.375em !important;
  color: #484848 !important;
`;
const DateDiv = styled.div`
    /* margin: 0px !important; */
    word-wrap: break-word !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    line-height: 1.2857142857142858em !important;
    color: #484848 !important;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%
`;
const ResponseImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%
`;
const ReadMore = styled.a`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  text-decoration: none;

`;

const LineThrough = styled.div`
  border-bottom: 1px solid #EBEBEB;
  margin-top: 24px;
  margin-bottom: 24px;
`;

// border-bottom-width: var(--border-rule-border-width, 1px) !important;
// border-bottom-color: var(--color-divider, #EBEBEB) !important;
// }


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
      button = <ReadMore href="#" onClick={this.showMore}>
              Read More
              </ReadMore>
    } else {
      message = this.props.message;
      button = null;
    }
    return (
      <div>
        <TextDiv className="message">
          <p>{message}</p>
        </TextDiv>
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
                      <ResponseImage src={this.props.review.response.image}></ResponseImage>
                    </div>
                    <ResponseNameDiv className="respnseTittle">
                      Response from {this.props.review.response.name}:
                    </ResponseNameDiv>
                    <TextDiv className="responsecomment">
                      {this.props.review.response.comment}
                    </TextDiv>
                    <DateDiv className="responseDate">
                      {moment(this.props.review.response.dateCreated).format("MMMM YYYY")}
                    </DateDiv>
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
          <Image src={this.props.review.userImage}></Image>
        </div>
          <NameDiv className="username">
            {this.props.review.userName}
          </NameDiv>
        <DateDiv className="date">
          {moment(Date.parse(this.props.review.dateCreated)).format("MMMM YYYY")}
        </DateDiv>

        {message}
        {response}
        <LineThrough></LineThrough>
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


