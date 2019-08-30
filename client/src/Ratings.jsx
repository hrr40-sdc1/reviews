import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


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

const Ratings = ({averageRatings}) => (
  <div>
    <NumReviewsDiv id="numReviews">{averageRatings.numReviews} Reviews</NumReviewsDiv>
    <TextDiv id="ratings">
      <div id="overall">{averageRatings.overall}</div>
      <div id="accuracy">Accuracy {averageRatings.accuracy}</div>
      <div id="communication">Communication {averageRatings.communication}</div>
      <div id="clean">Cleanliness {averageRatings.cleanliness}</div>
      <div id="location">Location {averageRatings.location}</div>
      <div id="checkIn">Check In {averageRatings.checkIn}</div>
      <div id="value">Value {averageRatings.value}</div>
    </TextDiv>
  </div>
)

export default Ratings;
