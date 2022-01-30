import React from 'react';
import styles from './mainbanner.module.css';
import img from '../../Assests/Traveller.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
function mainbanner() {
  return (
    <div className={styles.imgcontainer}>
      <div className="container-sm ">
        <div class="row ">
          <div class="col-12 col-lg-6 py-md-5">
            <h5 className={styles.text1}>BEST DESTINATION AROUND THE WORLD</h5>
            <h2 className={styles.text2}>
              Travel,
              <ins style={{ textDecorationColor: '#DF6951' }}>enjoy </ins>and
              live a new and full life
            </h2>
            <h5 className={styles.text3}>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </h5>
            <div class="row mx-2 my-4">
              <div class="col-6 col-md-4 d-flex align-items-center">
                <span className={styles.text4}>Find out more</span>
              </div>
              <div class="col-6 col-md-4 d-flex align-items-center justify-content-center">
                <a className={styles.socialicon}>
                  <FontAwesomeIcon icon={faCaretRight} size="lg" />
                </a>
                <span className={styles.text5}>Play Demo</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 d-flex align-items-center ">
            <div class="d-none d-lg-block">
              <img src={img} className={styles.img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default mainbanner;
