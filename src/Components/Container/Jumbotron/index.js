import React from "react";
import mission from "../../../Assets/mission.jpg"
import blinkEyes from "../../../Assets/gif/blinkEyes.gif"
import blinkGirt from "../../../Assets/gif/blinkGirl.gif"
import cheer from "../../../Assets/gif/cheer.gif"
import facehaha from "../../../Assets/gif/faceHaha.gif"
import johndoe from "../../../Assets/johndoe.png"
import logo from "../../../Assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFaceAngry, faGift} from '@fortawesome/free-solid-svg-icons'
import { JumbotronWrapper } from "./style";
const Jumbotron = () => {
    return(
        <React.Fragment>
            <JumbotronWrapper>
                <div className="container-fluid">
                    <div>
                        <div className="jumbotron m-3">
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <a className="btn btn-outline-light btn-lg" href="#" role="button">Learn more</a>
                        </div>
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
                    </div>
                </div>
                <div className="container-fluid padding">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <h1 className="display-4">Build your application</h1>
                        </div>
                        <hr/>
                        <div className="col-12">
                            <p>welcome My Bootstrap 4 Tutorials, Bootstrap Is An Open-Source And Free Front-And Library With HTML And Css Based Design</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid padding">
                    <div className="row text-center padding">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <a href="#" className="faFaceAngry fontsize">
                                <i class="fab fa-react"></i>
                            </a>
                            <h3>REACT</h3>
                            <p>Build the latest version of React</p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <a href="#" className="faCoffee fontsize">
                                <i class="fab fa-angular"></i>
                            </a>
                            <h3>ANGULAR</h3>
                            <p>Build your Website and Front-end Application</p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <a href="#" className="faGift fontsize">
                                <i class="fab fa-css3"></i>
                            </a>
                            <h3>CSS3, HTML5</h3>
                            <p>Customize your web UI with Html5 and Css3</p>
                        </div>
                        
                    </div>
                </div>
                <hr className="my-4"/>
                <div className="container-fluid padding">
                    <div className="row padding">
                        <div className="col-md-12 col-lg-6">
                            <h2>If you build...</h2>
                            <p>Arduino is an open-source hardware, software and content and content platform with active
                            global communtity. It's intented for anyone making interactive projects.
                            </p>
                            <p>Arduino is an open-source hardware, software and content and content platform with active
                            global communtity. It's intented for anyone making interactive projects.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid" src={mission} alt="ảnh lỗi"/>
                        </div>
                    </div>
                </div>
                <hr className="my-4"/>
                
                <div className="container-fluid padding">
                    <div className="row text-center padding">
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <a href="#" >
                                <img className="blinkEyes" src={blinkEyes} alt="ảnh lỗi"/>
                            </a>
                            <h3>EYES</h3>
                            <p>Build the latest version of React</p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <a href="#" className="faCoffee">
                                <img className="blinkEyes" src={blinkGirt} alt="ảnh lỗi"/>
                            </a>
                            <h3>GIRT</h3>
                            <p>Build your Website and Front-end Application</p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <a href="#" className="faGift">
                                <img className="blinkEyes" src={cheer} alt="ảnh lỗi"/>
                            </a>
                            <h3>CHEER</h3>
                            <p>Customize your web UI with Html5 and Css3</p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <a href="#" className="faGift">
                                <img className="blinkEyes" src={facehaha} alt="ảnh lỗi"/>
                            </a>
                            <h3>CHEER</h3>
                            <p>Customize your web UI with Html5 and Css3</p>
                        </div>
                    </div>
                </div>
                <hr className="my-4"/>

                <div className="container-fluid padding">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <h1 className="display-4">Build your application</h1>
                        </div>
                    </div>
                </div>
                <div className="container padding">
                    <div className="row padding">
                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top" src={johndoe} alt="ảnh lỗi"/>
                                <div className="card-body">
                                    <h4 className="card-title">Nguyễn Văn Dũng</h4>
                                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                    <a href="#" class="btn btn-primary">See Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top" src={johndoe} alt="ảnh lỗi"/>
                                <div className="card-body">
                                    <h4 className="card-title">Nguyễn Văn Dũng</h4>
                                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                    <a href="#" class="btn btn-primary">See Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top" src={johndoe} alt="ảnh lỗi"/>
                                <div className="card-body">
                                    <h4 className="card-title">Nguyễn Văn Dũng</h4>
                                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                    <a href="#" class="btn btn-primary">See Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top" src={johndoe} alt="ảnh lỗi"/>
                                <div className="card-body">
                                    <h4 className="card-title">Nguyễn Văn Dũng</h4>
                                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                    <a href="#" class="btn btn-primary">See Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4"/>
                <div className="container-fluid padding">
                    <div className="row padding">
                        <div className="col-md-12 col-lg-6">
                            <h2>Our vision</h2>
                            <p>All our work is for customer satisfaction with high quality products</p>
                            <p>We make outsourcing all softwares relating to CMS, Database, Education</p>
                            <br/>
                        </div>
                        <div className="col-lg-6">
                            <img src={mission} alt="ảnh lỗi" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <hr className="my-4"/>
                <div className="container-fluid padding">
                    <div className="row text-center padding">
                        <div className="col-12">
                            <h2 className="display-4">Contact Us</h2>
                        </div>
                        <div className="col-12 social padding">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container-fluid padding">
                        <div className="row text-center">
                            <div className="col-md-4">
                                <img src={logo} alt="ảnh lỗi" style={{width: '50%'}}/>
                                <hr className="light"/>
                                <p>111-222-3333</p>
                                <p>mymail@gmail.com</p>
                                <p>Bạch Mai Street, Hà Nội, Việt Nam</p>
                            </div>
                            <div className="col-md-4">				
                                <hr className="light"/>
                                <h5>Working hours</h5>
                                <hr className="light"/>
                                <p>Monday-Friday: 8am - 5pm</p>
                                <p>Weekend: 8am - 12am</p>
                            </div>
                            <div className="col-md-4">				
                                <hr className="light"/>
                                <h5>Services</h5>
                                <hr className="light"/>
                                <p>Outsourcing</p>
                                <p>Website development</p>
                                <p>Mobile applications</p>
                            </div>
                            <div className="col-12">
                                <hr className="light-100"/>
                                <h5>&copy; WebPro</h5>
                            </div>
                        </div>
                    </div>
                </footer>
            </JumbotronWrapper>
        </React.Fragment>
    )
}
export default Jumbotron;