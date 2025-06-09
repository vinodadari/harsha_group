import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  

  const loopSlides = (n:number) => {
    const slides: React.ReactElement[] = []
    for(let i=2; i <= n; i++){
      slides.push(<div
      key={i}
              className={`item-slick1 item-slick${i}`}
              style={{ backgroundImage: `url(/images/slides/slide_${i}.jpeg)` }}
            ></div>)
    }
    return slides
  }
  
  return (
    <>

      {/* Slider */}
      <section className="section-slide">
        <div className="wrap-slick1">
          <div className="slick1">
            
            <div
              className="item-slick1 item1-slick1"
              style={{
                backgroundImage: "url(/images/slides/slide_1.jpeg)",
              }}
            >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
						<span className="caption1-slide1 txt1 t-center animated visible-false m-b-15" data-appear="fadeInDown">
							Welcome to
						</span>

						<h2 className="caption2-slide1 tit1 t-center animated visible-false m-b-37" data-appear="fadeInUp">
							Harsha Group
						</h2>

						{/* <div className="wrap-btn-slide1 animated visible-false d-none" data-appear="zoomIn">
							<a href="menu.html" className="btn1 flex-c-m size1 txt3 trans-0-4">
								Look Menu
							</a>
						</div> */}
					</div>
            </div>
            {loopSlides(4)}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-welcome bg1-pattern p-t-120 p-b-105">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-t-45 p-b-30">
              <div className="wrap-text-welcome t-center">
                <span className="tit2 t-center">Harsha Group</span>

                <h3 className="tit3 t-center m-b-35 m-t-5">Welcome</h3>

                <p className="t-center m-b-22 size3 m-l-r-auto">
                  Welcome to Harsha Group - Where Excellence Meets Innovation
                </p>
              </div>
            </div>

            <div className="col-md-6 p-b-30">
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

      {/* Intro */}

      	<section className="section-intro">
		<div className="header-intro parallax100 t-center p-t-135 p-b-158" style={{ backgroundImage: `url(/images/home/sandel_wood_3.jpg)` }}>
			<span className="tit2 p-l-15 p-r-15">
				Discover
			</span>

			<h3 className="tit4 t-center p-l-15 p-r-15 p-t-3">
				INVESTING
			</h3>
		</div>

		<div className="content-intro bg-white p-t-77 p-b-133">
			<div className="container">
				<div className="row">
					<div className="col-md-4 p-t-30">
						{/* <!-- Block1 --> */}
						<div className="blo1">
							<div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
								{/* <a href="#"></a> */}
                <img src="images/plots/annex_ventures.jpeg" alt="annex ventures" className={styles.plot_img} />
							</div>

							<div className="wrap-text-blo1 p-t-35">
								<a href="#"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
									@Vijayanagaram
								</h4></a>

								<p className="m-b-20 d-none">
									Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
								</p>

								<a href="#" className="txt4">
									Download Brochure
									<i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="col-md-4 p-t-30">
						{/* <!-- Block1 --> */}
						<div className="blo1">
							<div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
								{/* <a href="#"></a> */}
                <img src="images/plots/open_plots.jpeg" alt="annex ventures" className={styles.plot_img} />
							</div>

							<div className="wrap-text-blo1 p-t-35">
								<a href="#"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
									@Vijayanagaram & Vizag
								</h4></a>

								<p className="m-b-20 d-none">
									Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
								</p>

								<a href="#" className="txt4">
									Download Brochure
									<i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="col-md-4 p-t-30">
						{/* <!-- Block1 --> */}
						<div className="blo1">
							<div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
								{/* <a href="#"></a> */}
                <img src="images/plots/sanal_valley_cheedikada.jpeg" alt="annex ventures" className={styles.plot_img} />
							</div>

							<div className="wrap-text-blo1 p-t-35">
								<a href="#"><h4 className="txt5 color0-hov trans-0-4 m-b-13">
									@Sandal valley #Cheedikada
								</h4></a>

								<p className="m-b-20 d-none">
									Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
								</p>

								<a href="#" className="txt4">
									Download Brochure
									<i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
								</a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>

  	{/* <!-- Our menu --> */}
	<section className="section-ourmenu bg2-pattern p-t-115 p-b-120">
		<div className="container">
			<div className="title-section-ourmenu t-center m-b-22">
				<span className="tit2 t-center">
					Discover
				</span>

				<h3 className="tit5 t-center m-t-2">
					Our Services
				</h3>
			</div>

			<div className="row">
				<div className="col-md-8">
					<div className="row">
						<div className="col-sm-6 d-none">
							{/* <!-- Item our menu --> */}
							<div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
								<img src="images/services/holidays.jpg" alt="Holidays trips" />

								{/* <!-- Button2 --> */}
								<a href="#" className="btn2 flex-c-m txt5 ab-c-m size4">
									Holidays
								</a>
							</div>
						</div>

						<div className="col-sm-6 d-none">
							{/* <!-- Item our menu --> */}
							<div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
								<img src="images/services/bookings.jpg" alt="IMG-MENU" />


								{/* <!-- Button2 --> */}
								<a href="#" className="btn2 flex-c-m txt5 ab-c-m size5">
									Hotel
								</a>
							</div>
						</div>

						<div className="col-12">
							{/* <!-- Item our menu --> */}
							<div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
								<img src="images/services/travel.jpg" alt="IMG-MENU" />

								{/* <!-- Button2 --> */}
								<a href="#" className="btn2 flex-c-m txt5 ab-c-m size6">
									Travel
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-4">
					<div className="row">
						<div className="col-12 d-none">
							{/* <!-- Item our menu --> */}
							<div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
								<img src="images/services/bookings.jpg" alt="IMG-MENU" />

								{/* <!-- Button2 --> */}
								<a href="#" className="btn2 flex-c-m txt5 ab-c-m size7">
									Hotel
								</a>
							</div>
						</div>

						<div className="col-12">
							{/* <!-- Item our menu --> */}
							<div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
								<img src="images/services/holiday_package.jpg" alt="IMG-MENU" />

								{/* <!-- Button2 --> */}
								<a href="#" className="btn2 flex-c-m txt5 ab-c-m size85">
									Holiday Packages
								</a>
							</div>
						</div>

						<div className="col-12">
							{/* <!-- Item our menu --> */}
							<div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
								<img src="images/services/investing.jpg" alt="IMG-MENU" />

								{/* <!-- Button2 --> */}
								<a href="#" className="btn2 flex-c-m txt5 ab-c-m size9">
									Investing
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>

  

      {/* Back to top */}
      <div className="btn-back-to-top bg0-hov" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <i className="fa fa-angle-double-up" aria-hidden="true"></i>
        </span>
      </div>
    </>
  );
}
