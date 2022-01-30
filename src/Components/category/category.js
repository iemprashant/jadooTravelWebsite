import React from 'react';
import styles from './category.module.css';
import Icon1 from '../../Assests/icon1.svg';
import Icon2 from '../../Assests/icon2.svg';
import Icon3 from '../../Assests/icon3.svg';
import Icon4 from '../../Assests/icon4.svg';
function category() {
  return (
    <div class="container pt-5">
      <h6 className={styles.heading1}>CATEGORY </h6>
      <h1 className={styles.heading2}>We Offer Best Services</h1>
      <div class="row mt-5">
        <div class="col-12 col-lg-3 p-md-0">
          <div className={styles.card}>
            <div className={styles.cardbody}>
              <img className={styles.iconimg} src={Icon1} />
              <h5 className={styles.iconheading}>Calculated Weather</h5>
              <h6 className={styles.iconsubheading}>
                Built Wicket longer admire do barton vanity itself do in it.
              </h6>
            </div>
            <div className={styles.cardcorner}></div>
          </div>
        </div>
        <div class="col-12 col-lg-3 p-md-0">
          <div className={styles.card}>
            <div className={styles.cardbody}>
              <img className={styles.iconimg} src={Icon2} />
              <h5 className={styles.iconheading}>Best Flights</h5>
              <h6 className={styles.iconsubheading}>
                Engrossed listening. Park gate sell they west hard for the.
              </h6>
            </div>
            <div className={styles.cardcorner}></div>
          </div>
        </div>
        <div class="col-12 col-lg-3 p-md-0">
          <div className={styles.card}>
            <div className={styles.cardbody}>
              <img className={styles.iconimg} src={Icon3} />
              <h5 className={styles.iconheading}>Local Events</h5>
              <h6 className={styles.iconsubheading}>
                Barton vanity itself do in it. Preferd to men it engrossed
                listening.
              </h6>
            </div>
            <div className={styles.cardcorner}></div>
          </div>
        </div>
        <div class="col-12 col-lg-3 p-md-0">
          <div className={styles.card}>
            <div className={styles.cardbody}>
              <img className={styles.iconimg} src={Icon4} />
              <h5 className={styles.iconheading}>Customization</h5>
              <h6 className={styles.iconsubheading}>
                We deliver outsourced aviation services for military customers
              </h6>
            </div>
            <div className={styles.cardcorner}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default category;
