import React from 'react';
import styles from './destinations.module.css';
import d1 from '../../Assests/d1.png';
import d2 from '../../Assests/d2.png';
import d3 from '../../Assests/d3.png';

function destinations() {
  return (
    <div class="container p-4 pt-5">
      <h6 className={styles.heading1}>Top Selling</h6>
      <h1 className={styles.heading2}>Top Destinations</h1>
      <div class="row mt-5">
        <div class="row">
          <div class="col-md-4 mb-4 p-4">
            <div className={styles.card}>
              <img class="card-img-top" src={d1} alt="Rome, Italty" />
              <div class="card-body py-4 px-3">
                <div class="d-flex flex-column flex-lg-row justify-content-between mb-3">
                  <h4 className={styles.cardtext}>Rome, Italty</h4>
                  <span className={styles.cardtext}>$5,42k</span>
                </div>
                <div class="d-flex align-items-center">
                  <span className={styles.cardtext}>10 Days Trip</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 p-4">
            <div className={styles.card}>
              <img class="card-img-top" src={d2} alt="Rome, Italty" />
              <div class="card-body py-4 px-3">
                <div class="d-flex flex-column flex-lg-row justify-content-between mb-3">
                  <h4 className={styles.cardtext}>London, UK</h4>
                  <span className={styles.cardtext}>$4.2k</span>
                </div>
                <div class="d-flex align-items-center">
                  <span className={styles.cardtext}>12 Days Trip</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 p-4">
            <div className={styles.card}>
              <img class="card-img-top" src={d3} alt="Rome, Italty" />
              <div class="card-body py-4 px-3">
                <div class="d-flex flex-column flex-lg-row justify-content-between mb-3">
                  <h4 className={styles.cardtext}>Full Europe</h4>
                  <span className={styles.cardtext}>$15k</span>
                </div>
                <div class="d-flex align-items-center">
                  <span className={styles.cardtext}>28 Days Trip</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default destinations;
