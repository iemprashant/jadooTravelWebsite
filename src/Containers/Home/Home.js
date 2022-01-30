import React from 'react';
import Category from '../../Components/category/category';
import Mainbanner from '../../Components/Mainbanner/mainbanner';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';

import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.backgroundimg}>
      <Navbar />
      <Mainbanner />
      {/* <Category /> */}
      <Footer />
    </div>
  );
}

export default Home;
