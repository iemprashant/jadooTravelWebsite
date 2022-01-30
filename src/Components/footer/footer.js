import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import appstore from '../../Assests/appstore.svg';
import googleplay from '../../Assests/googleplay.svg';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
function footer() {
  return (
    <div class="container p-4 ">
      <div class="row">
        <div class="col-lg-3 col-md-7 col-12 mb-4 mb-md-6 mb-lg-0 order-0">
          <h1 className={styles.heading1}>Jadoo.</h1>
          <p className={styles.subheading1}>
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div class="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-1 order-md-2">
          <h4 className={styles.heading2}>Company</h4>
          <ul class="list-unstyled mb-0">
            <li class="mb-2">
              <a className={styles.subheading2}>About</a>
            </li>
            <li class="mb-2">
              <a className={styles.subheading2}>Careers</a>
            </li>
            <li class="mb-2">
              <a className={styles.subheading2}>Mobile</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-2 order-md-3">
          <h4 className={styles.heading2}>Contact</h4>
          <ul class="list-unstyled mb-0">
            <li class="mb-2">
              <a className={styles.subheading2}>Help/FAQ</a>
            </li>
            <li class="mb-2">
              <a className={styles.subheading2}>Press</a>
            </li>
            <li class="mb-2">
              <a className={styles.subheading2}>Affiliate</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-3 order-md-4">
          <h4 className={styles.heading2}>More</h4>
          <ul class="list-unstyled mb-0">
            <li class="mb-2">
              <a className={styles.subheading2}>Airlinefees</a>
            </li>
            <li class="mb-2">
              <a className={styles.subheading2}>Airline</a>
            </li>
            <li class="mb-2">
              <a className={styles.subheading2}>Low fare tips</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-5 col-12 mb-4 mb-md-6 mb-lg-0 order-lg-4 order-md-1">
          <div class="mb-4 my-md-4 d-flex justify-content-start">
            <a className={styles.socialicon}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className={styles.socialicon}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className={styles.socialicon}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div class="mb-3">
            <h4 className={styles.subheading3}>Discover our app</h4>
          </div>
          <div class="mb-4 my-md-4 d-flex justify-content-start">
            <a href="#!">
              <img class="me-2" src={googleplay} alt="play store" />
            </a>
            <a href="#!">
              <img src={appstore} alt="apple store" />
            </a>
          </div>
        </div>
      </div>
      <div class="row py-3 py-md-5 text-center">
        <p className={styles.subheading1}>All rights reserved@jadoo.co </p>
      </div>
    </div>
  );
}

export default footer;
