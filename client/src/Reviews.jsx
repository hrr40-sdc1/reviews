import React from 'react';
import ReactDOM from 'react-dom';
var moment = require('moment');
import styled from 'styled-components';

const ReviewContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "user"
    "message"
    "response"
    "line"
`;
const UserContainer = styled.div`
  display: grid;
  grid-area: user;
  grid-template-columns: 100px 100px;
  grid-template-row: auto auto;
  grid-template-areas:
    "userPhoto userName"
    "userPhoto date"
`;
const ResponseContainer = styled.div`
  display: grid;
  grid-area: response;
  grid-template-columns: 100px auto;
  grid-template-rows: auto auto auto
  grid-template-areas:
    "responseImg responseUserName"
    "space  responseText"
    "space  responseDate"
`;

const ParentTextDiv = styled.div`
  grid-area: message;
`;
const TextDiv = styled.div`
  grid-area: message;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  color: #484848;
`;
const ResponseTextDiv = styled.div`
  grid-area: responseText;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  color: #484848;
`;
const NameDiv = styled.div`
  grid-area: userName;
  word-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  line-height: 1.375em !important;
  color: #484848 !important;
`;
const ResponseNameDiv = styled.div`
  grid-area: responseUserName;
  word-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  line-height: 1.375em !important;
  color: #484848 !important;
`;
const DateDiv = styled.div`
  grid-area: date;
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
  grid-area: responseImg;
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
  grid-area: line;
  border-bottom: 1px solid #EBEBEB;
  margin-top: 24px;
  margin-bottom: 24px;
`;





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
      button = <ReadMore href="#" onClick={this.showMore}>
              Read More
              </ReadMore>
    } else {
      message = this.props.message;
      button = null;
    }
    return (
      <ParentTextDiv>
        <TextDiv className="message">
          <p>{message}</p>
        </TextDiv>
        {button}
      </ParentTextDiv>
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
      response =  <ResponseContainer className="response">
                    <div className="responseImage">
                      <ResponseImage src={this.props.review.response.image}></ResponseImage>
                    </div>
                    <ResponseNameDiv className="respnseTittle">
                      Response from {this.props.review.response.name}:
                    </ResponseNameDiv>
                    <ResponseTextDiv className="responsecomment">
                      {this.props.review.response.comment}
                    </ResponseTextDiv>
                    <DateDiv className="responseDate">
                      {moment(this.props.review.response.dateCreated).format("MMMM YYYY")}
                    </DateDiv>
                  </ResponseContainer>
    } else {
      response = null;
    }
    let message;
    if (this.props.review.comment.length < 320) {
      message = <ParentTextDiv className="message">
                  <TextDiv>
                  <p>{this.props.review.comment}</p>
                  </TextDiv>
                </ParentTextDiv>
    } else {
      message = <Message message={this.props.review.comment}/>
    }

    return(
      <ReviewContainer className="review">
        <UserContainer>
          <div className="image">
            <Image src={this.props.review.userImage}></Image>
          </div>
            <NameDiv className="username">
              {this.props.review.userName}
            </NameDiv>
          <DateDiv className="date">
            {moment(Date.parse(this.props.review.dateCreated)).format("MMMM YYYY")}
          </DateDiv>

        </UserContainer>
        {message}
        {response}
        <LineThrough></LineThrough>
      </ReviewContainer>
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


