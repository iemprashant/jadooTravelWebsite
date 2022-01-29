import React from 'react';
import Mainbanner from '../../Components/Mainbanner/mainbanner/mainbanner';
import Navbar from '../../Components/navbar/navbar';
import styles from './home.module.css';
function Home() {
  return (
    <div className={styles.backgroundimg}>
      <Navbar />
      <Mainbanner />
    </div>
  );
}

export default Home;
