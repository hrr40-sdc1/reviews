import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const RatingsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 50px 50px
`;
const TextDiv = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  color: #484848;
`;
const NumReviewsDiv = styled.div`
  margin: 0px !important;
  word-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 24px !important;
  font-weight: 800 !important;
  line-height: 1.25em !important;
  color: #484848 !important;
  padding-top: 2px !important;
  padding-bottom: 2px !important;
`;
const OverallContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 100px;
`;
const OverallRating = styled.div`
  margin: auto;
`;
const Ratings = ({averageRatings}) => (
  <div>
    <OverallContainer>
      <NumReviewsDiv id="numReviews">{averageRatings.numReviews} Reviews
      </NumReviewsDiv>
      <OverallRating>{averageRatings.overall}</OverallRating>
    </OverallContainer>






    <TextDiv id="ratings">
    <RatingsContainer>
      <div id="accuracy">Accuracy</div>
      <div>{averageRatings.accuracy}</div>
      <div id="communication">Communication</div>
      <div>{averageRatings.communication}</div>
      <div id="clean">Cleanliness</div>
      <div>{averageRatings.cleanliness}</div>
      <div id="location">Location</div>
      <div>{averageRatings.location}</div>
      <div id="checkIn">Check In</div>
      <div>{averageRatings.checkIn}</div>
      <div id="value">Value</div>
      <div>{averageRatings.value}</div>
      </RatingsContainer>
    </TextDiv>

  </div>
)

export default Ratings;
