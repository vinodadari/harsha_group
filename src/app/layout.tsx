import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsha Group",
  description: "Where Excellence Meets Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/images/icons/favicon.png" />

      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}` }>
             {/* Header */}
	<header>
		{/* <!-- Header desktop --> */}
		<div className="wrap-menu-header gradient1 trans-0-4">
			<div className="container h-full">
				<div className="wrap_header trans-0-3">
					{/* <!-- Logo -->		 */}
					<div className="logo">
						<a href="index.html">
							{/* <!-- <p> HARSHA <span>GROUP</span> </p> <p>PROPERTIES & DEVELOPERS</p> --> */}
							<Image src="/images/icons/logo_old2.png" width={150} height={75} alt="IMG-LOGO" data-logofixed="images/icons/logo.png" />
						</a>
					</div>

					{/* <!-- Menu --> */}
					<div className="wrap_menu p-l-45 p-l-0-xl">
						<nav className="menu">
							<ul className="main_menu">
								<li>
									<a href="index.html">Home</a>
								</li>

								<li>
									<a href="menu.html">Plots</a>
								</li>

								{/* <!-- <li>
									<a href="reservation.html">Reservation</a>
								</li> --> */}

								<li>
									<a href="gallery.html">Services</a>
								</li>

								<li>
									<a href="about.html">About</a>
								</li>

								{/* <!-- <li>
									<a href="blog.html">Blog</a>
								</li> --> */}

								<li>
									<a href="contact.html">Contact</a>
								</li>
							</ul>
						</nav>
					</div>
					
					<div className="social flex-w flex-l-m p-r-20">
						<a href="#"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a>
						<a href="#"><i className="fa fa-facebook m-l-21" aria-hidden="true"></i></a>
						<a href="#"><i className="fa fa-twitter m-l-21" aria-hidden="true"></i></a>

						<button className="btn-show-sidebar m-l-33 trans-0-4"></button>
					</div>
				</div>
			</div>
		</div>
	</header>

      {/* Sidebar */}
      <aside className="sidebar trans-0-4">
        {/* Button Hide sidebar */}
        <button className="btn-hide-sidebar ti-close color0-hov trans-0-4"></button>

        <ul className="menu-sidebar p-t-95 p-b-70">
          <li className="t-center m-b-13">
            <Link href="/" className="txt19">
              Home
            </Link>
          </li>

          <li className="t-center m-b-13">
            <Link href="/menu" className="txt19">
              Menu
            </Link>
          </li>

          <li className="t-center m-b-13">
            <Link href="/gallery" className="txt19">
              Gallery
            </Link>
          </li>

          <li className="t-center m-b-13">
            <Link href="/about" className="txt19">
              About
            </Link>
          </li>

          <li className="t-center m-b-13">
            <Link href="/blog" className="txt19">
              Blog
            </Link>
          </li>

          <li className="t-center m-b-33">
            <Link href="/contact" className="txt19">
              Contact
            </Link>
          </li>

          <li className="t-center">
            <Link
              href="/reservation"
              className="btn3 flex-c-m size13 txt11 trans-0-4 m-l-r-auto"
            >
              Reservation
            </Link>
          </li>
        </ul>

        {/* Gallery Sidebar */}
        <div className="gallery-sidebar t-center p-l-60 p-r-60 p-b-40">
          <h4 className="txt20 m-b-33">Gallery</h4>

          {/* Gallery */}
          <div className="wrap-gallery-sidebar flex-w">
            <Image
              src="/images/photo-gallery-01.jpg"
              width={60}
              height={60}
              alt="Gallery"
              className="item-gallery-sidebar wrap-pic-w"
            />

            <Image
              src="/images/photo-gallery-02.jpg"
              width={60}
              height={60}
              alt="Gallery"
              className="item-gallery-sidebar wrap-pic-w"
            />

            <Image
              src="/images/photo-gallery-03.jpg"
              width={60}
              height={60}
              alt="Gallery"
              className="item-gallery-sidebar wrap-pic-w"
            />

            <Image
              src="/images/photo-gallery-04.jpg"
              width={60}
              height={60}
              alt="Gallery"
              className="item-gallery-sidebar wrap-pic-w"
            />

            <Image
              src="/images/photo-gallery-05.jpg"
              width={60}
              height={60}
              alt="Gallery"
              className="item-gallery-sidebar wrap-pic-w"
            />

            <Image
              src="/images/photo-gallery-06.jpg"
              width={60}
              height={60}
              alt="Gallery"
              className="item-gallery-sidebar wrap-pic-w"
            />
          </div>
        </div>
      </aside>
        {children}


        
	{/* <!-- Footer --> */}
	<footer className="bg1">
		<div className="container p-t-40 p-b-70">
			<div className="row">
        <div className="col-sm-6 col-md-4 p-t-50">
					{/* <h4 className="txt13 m-b-33">
						Contact Us
					</h4> */}

					<img src="/images/icons/logo.png"  width={150} height={150}/>

					
				</div>
				<div className="col-sm-6 col-md-4 p-t-50">
					<h4 className="txt13 m-b-33">
						Contact Us
					</h4>

					<ul className="m-b-70">
						<li className="txt14 m-b-14">
							<i className="fa fa-map-marker fs-16 dis-inline-block size19" aria-hidden="true"></i>
							8th floor, 379 Hudson St, New York, NY 10018
						</li>

						<li className="txt14 m-b-14">
							<i className="fa fa-phone fs-16 dis-inline-block size19" aria-hidden="true"></i>
							(+1) 96 716 6879
						</li>

						<li className="txt14 m-b-14">
							<i className="fa fa-envelope fs-13 dis-inline-block size19" aria-hidden="true"></i>
							<a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="e0838f8e94818394a093899485ce838f8d">[email&#160;protected]</a>
						</li>
					</ul>

					
				</div>

				<div className="col-sm-6 col-md-4 p-t-50">
          <h4 className="txt13 m-b-32">
						Opening Times
					</h4>

					<ul>
						<li className="txt14">
							09:30 AM – 11:00 PM
						</li>

						<li className="txt14">
							Every Day
						</li>
					</ul>
					
				</div>

			</div>
		</div>

		<div className="end-footer bg2">
			<div className="container">
				<div className="flex-sb-m flex-w p-t-22 p-b-22">
					<div className="p-t-5 p-b-5">
						<a href="#" className="fs-15 c-white"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a>
						<a href="#" className="fs-15 c-white"><i className="fa fa-facebook m-l-18" aria-hidden="true"></i></a>
						<a href="#" className="fs-15 c-white"><i className="fa fa-twitter m-l-18" aria-hidden="true"></i></a>
					</div>

					<div className="txt17 p-r-20 p-t-5 p-b-5">
						@ 2017 Colorlib. 
						<a href="#" className="txt18">
							Get The Theme
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
        
        <Script strategy="beforeInteractive" src="/vendor/jquery/jquery-3.2.1.min.js" />
        <Script strategy="afterInteractive" src="/vendor/animsition/js/animsition.min.js" />
        <Script strategy="afterInteractive" src="/vendor/bootstrap/js/popper.js" />
        <Script strategy="afterInteractive" src="/vendor/bootstrap/js/bootstrap.min.js" />
        <Script strategy="afterInteractive" src="/vendor/select2/select2.min.js" />
        <Script strategy="afterInteractive" src="/vendor/daterangepicker/moment.min.js" />
        <Script strategy="afterInteractive" src="/vendor/daterangepicker/daterangepicker.js" />
        <Script strategy="afterInteractive" src="/vendor/slick/slick.min.js" />
        <Script strategy="afterInteractive" src="/js/slick-custom.js" />
        <Script strategy="afterInteractive" src="/vendor/parallax100/parallax100.js" />
        <Script id="parallax-init" strategy="lazyOnload">
          {`window.addEventListener('load', function() {
            if (typeof $('.parallax100').parallax100 === 'function') {
              $('.parallax100').parallax100();
            }
          });`}
        </Script>
        <Script strategy="afterInteractive" src="/vendor/countdowntime/countdowntime.js" />
        <Script strategy="afterInteractive" src="/vendor/lightbox2/js/lightbox.min.js" />
        <Script strategy="afterInteractive" src="/js/main.js" />
      </body>
    </html>
  );
}
