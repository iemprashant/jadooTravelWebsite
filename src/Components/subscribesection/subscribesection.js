import React from 'react';
import styles from './subscribesection.module.css';

function subscribesection() {
  return (
    <div className="container p-4 py-5">
      <div className={styles.maincontainer}>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-10">
            <h4 className={styles.textheading}>
              Subscribe to get information, latest news and other interesting
              offers about Cobham
            </h4>
            <form class="row g-3 align-items-center">
              <div class="col-sm-12 col-md-5 offset-md-3">
                <div className={styles.form}>
                  <input
                    class="form-control form-little-squirrel-control"
                    type="email"
                    placeholder="Your Email"
                    aria-label="email"
                  />
                </div>
              </div>
              <div class="col-sm col-md-2 ">
                <button className={styles.button}>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default subscribesection;
