import React from "react";
import hoantuoi0 from "../../../Assets/hoatuoi0.jpg"
import hoantuoi1 from "../../../Assets/hoatuoi1.jpg"
import hoantuoi2 from "../../../Assets/hoatuoi2.jpg"

import { CarouselWrapper } from "./style";
const Carousel = () => {
    return(
        <React.Fragment>
            <CarouselWrapper>
            <div>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={hoantuoi0} alt="Los Angeles" className="d-block" style={{width: '100%'}} />
              <div className="carousel-caption">
                <button type="button" className="btn btn-outline-light btn-lg">VIEW TUTORIALS</button>
                <button type="button" className="btn btn-outline-light btn-lg">VIEW TUTORIALS</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={hoantuoi1} alt="Chicago" className="d-block" style={{width: '100%'}} />
              <div className="carousel-caption">
              </div> 
            </div>
            <div className="carousel-item">
              <img src={hoantuoi2} alt="New York" className="d-block" style={{width: '100%'}} />
              <div className="carousel-caption">
              </div>  
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" />
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </div>
            </CarouselWrapper>
        </React.Fragment>
    )
}
export default Carousel;