import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const imgUrls = {
  leftPage: "http://127.0.0.1:5000/leftPage.jpg",
  rightPage: "http://127.0.0.1:5000/rightPage.jpg",
  current: "http://127.0.0.1:5000/currentPageBackground.jpg"

}

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px;
  grid-template-rows: 50px;
`;
const LeftRight = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
`;
const CurrentNums = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Nums = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Current = styled.div`
  position: relative;
`;

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var elmnt = document.getElementById("value");
    let left;
    let right;
    let middle1;
    let middle2;
    let middle3;
    let middle4;
    let middle5;

    if (this.props.currentPage !== 0) {
      left = <LeftRight src={imgUrls.leftPage} onClick={ () => {
        this.props.backPage(); elmnt.scrollIntoView();}}></LeftRight>

    } else {
      left = null;
    }

    if (this.props.currentPage >= 4 && this.props.currentPage < (this.props.numOfPages - 4)) {
      middle1 = <Nums className="middle">...</Nums>
      middle2 = <Nums className="middle" onClick={ () => { this.props.toPage(this.props.currentPage - 1); elmnt.scrollIntoView(); } }>{this.props.currentPage}</Nums>
      middle3 =
      <Current className="middle current">
        <LeftRight src={imgUrls.current} onClick={ () => { this.props.toPage(this.props.currentPage + 1); elmnt.scrollIntoView();} }></LeftRight>
        <CurrentNums>{this.props.currentPage + 1}</CurrentNums>
      </Current>

      middle4 = <Nums className="middle" onClick={ () => { this.props.toPage(this.props.currentPage + 1); elmnt.scrollIntoView(); } }>{this.props.currentPage + 2}</Nums>
      middle5 = <Nums className="middle">...</Nums>
    } else if (this.props.currentPage < 4) {
        if (this.props.currentPage === 0) {
          if (this.props.numOfPages > 2) {
            middle1 = <Nums className="middle" onClick={ () => { this.props.toPage(1); elmnt.scrollIntoView(); } }>2</Nums>
          } else {
            middle1 = null;
          }
          if (this.props.numOfPages > 3) {
            middle2 = <Nums className="middle" onClick={ () => { this.props.toPage(2); elmnt.scrollIntoView();} }>3</Nums>
          } else {
            middle2 = null;
          }
          if (this.props.numOfPages > 4) {
            middle3 = <Nums className="middle">...</Nums>
          } else {
            middle3 = null;
          }
          middle4 = null;
          middle5 = null;
        } else if (this.props.currentPage === 1) {
          if (this.props.numOfPages > 2) {
            // middle1 = <Nums className="middle" onClick={ () => { this.props.toPage(1); } }>2</Nums>
            middle1 =
              <Current className="middle current">
                <LeftRight src={imgUrls.current} onClick={ () => { this.props.toPage(1); elmnt.scrollIntoView(); } }></LeftRight>
                <CurrentNums>{2}</CurrentNums>
              </Current>
          } else {
            middle1 = null;
          }
          if (this.props.numOfPages > 3) {
            middle2 = <Nums className="middle" onClick={ () => { this.props.toPage(2); elmnt.scrollIntoView(); } }>3</Nums>
          } else {
            middle2 = null;
          }
          if (this.props.numOfPages > 4) {
            middle3 = <Nums className="middle">...</Nums>
          } else {
            middle3 = null;
          }
          middle4 = null;
          middle5 = null;
        } else if (this.props.currentPage === 2) {
          middle1 = <Nums className="middle current" onClick={ () => { this.props.toPage(1); elmnt.scrollIntoView(); } }>2</Nums>
          if (this.props.numOfPages > 3) {
            middle2 =
              <Current className="middle current">
                <LeftRight src={imgUrls.current} onClick={ () => { this.props.toPage(this.props.numOfPages - 2); elmnt.scrollIntoView(); } }></LeftRight>
                <CurrentNums>{3}</CurrentNums>
              </Current>
          } else {
            middle2 = null;
          }
          if (this.props.numOfPages > 4) {
            middle3 = <Nums className="middle" onClick={ () => { this.props.toPage(3); elmnt.scrollIntoView(); } }>4</Nums>
          } else {
            middle3 = null;
          }
          if (this.props.numOfPages > 5) {
            middle4 = <Nums className="middle">...</Nums>
          } else {
            middle4 = null;
          }
          middle5 = null;
        } else if (this.props.currentPage === 3) {
          middle1 = <Nums className="middle" onClick={ () => { this.props.toPage(1); elmnt.scrollIntoView(); } }>2</Nums>
          middle2 = <Nums className="middle current" onClick={ () => { this.props.toPage(2); elmnt.scrollIntoView(); } }>3</Nums>
          // middle3 = <Nums className="middle" onClick={ () => { this.props.toPage(3); } }>4</Nums>
          middle3 =
            <Current className="middle current">
              <LeftRight src={imgUrls.current} onClick={ () => { this.props.toPage(3); elmnt.scrollIntoView(); } }></LeftRight>
              <CurrentNums>{4}</CurrentNums>
            </Current>
          if (this.props.numOfPages > 5) {
            middle4 = <Nums className="middle" onClick={ () => { this.props.toPage(4); elmnt.scrollIntoView(); } }>5</Nums>
          } else {
            middle4 = null;
          }
          if (this.props.numOfPages > 6) {
            middle5 = <Nums className="middle">...</Nums>
          } else {
            middle5 = null;
          }

         }
    } else {
      if (this.props.currentPage === this.props.numOfPages - 1) {
        middle5 = <Nums className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 2); elmnt.scrollIntoView(); } }>{this.props.numOfPages - 1}</Nums>

        middle4 = <Nums className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 3); elmnt.scrollIntoView(); } }>{this.props.numOfPages - 2}</Nums>
        middle3 = <Nums className="middle">...</Nums>
        middle2 = null;
        middle1 = null;
      } else if (this.props.currentPage === this.props.numOfPages - 2) {
        middle5 =
          <Current className="middle current">
            <LeftRight src={imgUrls.current} onClick={ () => { this.props.toPage(this.props.numOfPages - 2); elmnt.scrollIntoView(); } }></LeftRight>
            <CurrentNums>{this.props.numOfPages - 1}</CurrentNums>
          </Current>
        middle4 = <Nums className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 3); elmnt.scrollIntoView(); } }>{this.props.numOfPages - 2}</Nums>
        middle3 = <Nums className="middle">...</Nums>
        middle2 = null;
        middle1 = null;
      } else if (this.props.currentPage === this.props.numOfPages - 3) {
        middle5 = <Nums className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 2); elmnt.scrollIntoView(); } }>{this.props.numOfPages - 1}</Nums>
        middle4 =
          <Current className="middle current">
            <LeftRight src={imgUrls.current} onClick={ () => { this.props.toPage(this.props.numOfPages - 3); elmnt.scrollIntoView(); } }></LeftRight>
            <CurrentNums>{this.props.numOfPages - 2}</CurrentNums>
          </Current>
        middle3 = <Nums className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 4); elmnt.scrollIntoView(); } }>{this.props.numOfPages - 3}</Nums>
        middle2 = <Nums className="middle">...</Nums>
        middle1 = null;
      } else if (this.props.currentPage === this.props.numOfPages - 4) {
        middle5 = <Nums className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 2); elmnt.scrollIntoView();} }>{this.props.numOfPages - 1}</Nums>
        middle4 = <Nums className="middle current" onClick={ () => { this.props.toPage(this.props.numOfPages - 3); elmnt.scrollIntoView(); } }>{this.props.numOfPages - 2}</Nums>
        middle3 =
          <Current className="middle current">
            <LeftRight src={imgUrls.current} onClick={ () => { this.props.toPage(this.props.numOfPages - 4); elmnt.scrollIntoView(); } }></LeftRight>
            <CurrentNums>{this.props.numOfPages - 3}</CurrentNums>
          </Current>
        middle2 = <Nums className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 5); elmnt.scrollIntoView(); } }>{this.props.numOfPages - 4}</Nums>
        middle1 = <Nums className="middle">...</Nums>
       }

    }


    if (this.props.currentPage !== this.props.numOfPages -1) {
      right = <LeftRight src={imgUrls.rightPage} onClick={ () => {
        this.props.nextPage(); elmnt.scrollIntoView(); }}></LeftRight>

    } else {
      right = null;
    }
    let first = <Nums className="first" onClick={ () => { this.props.toPage(0); elmnt.scrollIntoView();} }>1</Nums>;
    let last = <Nums className="last" onClick={ () => { this.props.toPage(this.props.numOfPages - 1); elmnt.scrollIntoView(); } }>{this.props.numOfPages}</Nums>;
    if (this.props.currentPage === 0) {
      first =   <Current className="middle current">
            <LeftRight src={imgUrls.current} onClick={ () => { this.props.toPage(0); elmnt.scrollIntoView(); } }></LeftRight>
            <CurrentNums>{this.props.currentPage + 1}</CurrentNums>
          </Current>
    }
    if (this.props.currentPage === this.props.numOfPages - 1) {
      last =  <Current className="middle current">
                <LeftRight src={imgUrls.current} onClick={ () => { this.props.toPage(this.props.numOfPages - 1); elmnt.scrollIntoView(); } }></LeftRight>
                <CurrentNums>{this.props.currentPage + 1}</CurrentNums>
              </Current>
    }
    return(
      <NavContainer className="nav">
        {left}
        {first}
        {middle1}
        {middle2}
        {middle3}
        {middle4}
        {middle5}
        {last}
        {right}
      </NavContainer>
    )

  }
}

export default Nav;

