import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Typed from 'typed.js';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    const type = new Typed('.auto-type', {
      strings: ['Under Construction', 'emmanueloloke.dev', 'Come back soon!'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      type.destroy();
    };
  }, []);

  return (
    <div className="container">
      <h1>
        <span className="auto-type"></span>
      </h1>
    </div>
  );
};

export default Home;
