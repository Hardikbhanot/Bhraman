import Link from "next/link";
import Lottie from 'react-lottie';
import * as animationData from '../../../images/footer-lottie.json'
import Image from "next/image";
const Footer = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData
  };


  return (
    <div className="ft-footer-container">
      <div className="ft-footer-columns-container">
        <div className="ft-footer-columns">
          <div>
            <h1 className="ft-footer-logo">BHRAMAN</h1>
            <p className="ft-footer-para">
              {" "}
              magna etiam tempor orci eu lobortis elementum nibh tellus molestie
              nunc non blandit massa enim nec dui nunc mattis enim ut tellus
              elementum sagittis{" "}
            </p>
          </div>
        </div>
        {/* <div className="ft-footer-columns">
          <div>
          <Lottie options={defaultOptions}
              height="100%"
              width="100%"
              style={{position: 'absolute'}}
              />
          </div>
        </div> */}
        <div className="ft-footer-columns">
          <h3>Pages</h3>
          <div className="ft-footer-link-list">
            <Link href="#">
              <a className="ft-footer-link"><i className="ft-footer-arrow"></i> &nbsp; Home </a>
            </Link>
            <Link href="#">
              <a className="ft-footer-link"><i className="ft-footer-arrow"></i> &nbsp; Contact Us </a>
            </Link>
            <Link href="#">
              <a className="ft-footer-link"><i className="ft-footer-arrow"></i> &nbsp; About Us </a>
            </Link>
          </div>
        </div>
        <div className="ft-footer-columns">
          <h3>Get in touch</h3>
          <div className="ft-footer-icon-container">
            <div className="ft-footer-icon">
              <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#fff"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </Link>
            </div>
            <div className="ft-footer-icon">
              <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#1DA1F2"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="ft-footer-phone">
            <div className="ft-footer-phone-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#D4A05A" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
              </svg>
            </div>
            <p>+916969696969</p>
          </div>
          <div className="ft-footer-email">
            <div className="ft-footer-email-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#D4A05A" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
              </svg>
            </div>
            <p>info@bhraman.com</p>
          </div>
          {/* <div className="ft-footer-address">
            <div className="ft-footer-address-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path fill="#D4A05A" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
              </svg>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              eaque.
            </p>
          </div> */}
        </div>
      </div>
      <div>
        <hr className="ft-footer-hr" />
      </div>
      <div className="ft-footer-lower">
        <span>&copy; BHRAMAN</span>
        <span>ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
};

export default Footer;
