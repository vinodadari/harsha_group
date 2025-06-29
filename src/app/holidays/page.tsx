
import './page.holidays.css';
import Image from 'next/image';
// import Navigation from "../../components/Navigation";
// import Hero from "../../components/Hero";
// import About from "../../components/About";
// import Destinations from "../../components/Destinations";
// import Hotels from "../../components/Hotels";
// import Resorts from "../../components/Resorts";
// import Footer from "../../components/Footer";

import { destinations } from './destinations_resorts';

const Holidays = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Slider */}
      <section className="section-slide">
        <div className="wrap-slick1">
          <div className="slick1">

            <div
              className="item-slick1 item1-slick1"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80')" }}
            >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-300">
                <span className="caption1-slide1 txt1 t-center animated visible-false m-b-15" data-appear="fadeInDown">
                  Travel Well, Stay Better
                </span>
                {/* <span className="caption1-slide1 txt1 t-center animated visible-false m-b-15" data-appear="fadeInDown">
                  You don&apos;t have to be rich to travel well.
                </span> */}

                <h2 className="caption2-slide1 tit1 t-center animated visible-false m-b-37" data-appear="fadeInUp">
                  Discover India&apos;s most enchanting destinations with our curated collection of luxury hotels and resorts
                </h2>

                {/* <div className="wrap-btn-slide1 animated visible-false d-none" data-appear="zoomIn">
							<a href="menu.html" className="btn1 flex-c-m size1 txt3 trans-0-4">
								Look Menu
							</a>
						</div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About US */}
      <section className="section-welcome bg1-pattern p-t-120 p-b-105">
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-t-45 p-b-30">
              <div className="wrap-text-welcome t-center">
                <p className="tit2 t-center p-b-50">About US</p>

                {/* <h3 className="tit3 t-center m-b-35 m-t-5">Welcome</h3> */}

                <p className="t-center m-b-22 size3 m-l-r-auto">
                  <b>Harsha Group</b> offers curated experiences and stays across India's most beloved travel destinations — from the backwaters of Alleppey to the peaks of Manali. </p>
                <p className="t-center m-b-22 size3 m-l-r-auto">

                  We believe that exceptional travel experiences should be accessible to everyone. Our carefully selected portfolio of destinations, hotels, and resorts ensures that every journey becomes a cherished memory.
                </p>
              </div>
            </div>

            <div className="col-md-6 p-b-30 d-none">
              <div className="wrap-pic-welcome size2 bo-rad-10 hov-img-zoom m-l-r-auto">
                <Image
                  src="/images/home/land_plot.webp"
                  alt="Welcome"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="section-event">
        <div className="wrap-slick2">
          <div className="slick2">
            {/* each destination start */}

            {Object.entries(destinations).map(([key, value]) => (
              <div key={key} className="item-slick2 item1-slick2" style={{ backgroundImage: " url(images/bg-event-01.jpg)" }}>
                <div className="wrap-content-slide2 p-t-115 p-b-208">
                  <div className="container">
                    <div className="title-event t-center m-b-52">
                      <span className="tit2 p-l-15 p-r-15">
                        Top Destinations
                      </span>

                      {/* <h3 className="tit6 t-center p-l-15 p-r-15 p-t-3"></h3> */}
                    </div>

                    <div className="blo2 flex-w flex-str flex-col-c-m-lg animated visible-false" data-appear="zoomIn">
                      <a href="#" className="wrap-pic-blo2 bg1-blo2" style={{ backgroundImage: `url(${value.hero_image})` }}>
                        <div className="time-event size10 txt6 effect1">
                          <span className="txt-effect1 flex-c-m t-center">
                            {key.replace('_', ' ')}
                          </span>
                        </div>
                      </a>

                      <div className="wrap-text-blo2 flex-col-c-m p-l-40 p-r-40 p-t-45 p-b-30">
                        <h4 className="tit7 t-center m-b-10">
                          {key.replace('_', ' ')}
                        </h4>

                        <p className="t-center size3">
                          {value.detail}
                        </p>


                        <a href="#" className="txt4 m-t-40">
                          View Details
                          <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}


            {/* each destination end */}


          </div>

          <div className="wrap-slick2-dots"></div>
        </div>
      </section>


      {/* Featured Resorts */}
      <section className="section-event">
        <div className="wrap-slick4">
          <div className="slick4">
            {/* each destination start */}

            {Object.entries(destinations).map(([key, value]) => 
              (!('resorts' in value) || !value.resorts || value.resorts.length == 0 ? null : (
                <div key={`${key}test`} className="item-slick4 item1-slick4" style={{ backgroundImage: "url(images/bg-event-01.jpg)", background: "unset" }}>
                  <div className="wrap-content-slide2 p-t-115 p-b-208">
                    <div className="container">
                      <div className="title-event t-center m-b-52">
                        <span className="tit2 p-l-15 p-r-15">
                          Featured Resorts & Hotels
                        </span>

                        {/* <h3 className="tit6 t-center p-l-15 p-r-15 p-t-3"></h3> */}
                      </div>

                      <div className="blo2 flex-w flex-str flex-col-c-m-lg animated visible-false" data-appear="zoomIn">
                        

                        <div className="wrap-text-blo2 flex-col-c-m p-l-40 p-r-40 p-t-45 p-b-30">
                          <h4 className="tit7 t-center m-b-10">
                            {key.replace('_', ' ')}
                          </h4>

                          <p className="t-center size3">
                            {value.resorts.map((resort: string, idx: number) => (
                              <span key={idx}> {`${resort}${idx < value.resorts.length - 1 ? ' |' : ''}`} </span>
                            ))}    
                          </p>


                          {/* <a href="#" className="txt4 m-t-40">
                            View Details
                            <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                          </a> */}
                        </div>
                        <a href="#" className="wrap-pic-blo2 bg1-blo2" style={{ backgroundImage: `url(${value.hero_image})` }}>
                          <div className="time-event size10 txt6 effect1  d-none">
                            <span className="txt-effect1 flex-c-m t-center">
                              {key.replace('_', ' ')}
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))

            )}


            {/* each destination end */}


          </div>

          <div className="wrap-slick4-dots"></div>
        </div>
      </section>
    </div>
  );
};

export default Holidays;
