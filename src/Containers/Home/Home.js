import React from 'react';
import Category from '../../Components/category/category';
import Mainbanner from '../../Components/Mainbanner/mainbanner';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import Destinations from '../../Components/destinations/destinations';
import styles from './home.module.css';
import Subscribesection from '../../Components/subscribesection/subscribesection';

function Home() {
  return (
    <div className={styles.backgroundimg}>
      <Navbar />
      <Mainbanner />
      <Category />
      <Destinations />
      <Subscribesection />
      <Footer />
    </div>
  );
}

export default Home;
