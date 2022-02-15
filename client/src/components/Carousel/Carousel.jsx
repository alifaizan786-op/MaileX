import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer } from
"mdbreact";
import { makeStyles } from '@material-ui/core';
import img1 from './Image_1.PNG'
import img2 from './Image_2.PNG'
import img3 from './Image_3.PNG'


const useStyles = makeStyles((theme) => ({
  cpImg:{
     width: "-webkit-fill-available"}
}));

const CarouselPage = () => {
  const classes = useStyles();
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={2}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
           
              <img
                max-width= "100%"
                height= '50%'
                className="d-block w-100"
                src={img1}
                alt="First slide"
                className=
                {classes.cpImg}
              />
            
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            
              <img
                className="d-block w-100"
                height= '50%'
                src={img3}
                alt="Second slide"
                className=
                {classes.cpImg}
              />
           
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            
              <img
                className="d-block w-100"
                height= '50%'
                src={img2}
                alt="Third slide"
                className=
                {classes.cpImg}
              />
            
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;