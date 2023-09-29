"use client"

import MainPage from './main/page'
import SplashScreen from '../components/SplashScreen'
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1850);
  }, []);

  return (
    <>
      {showSplash ? <SplashScreen /> : <MainPage />}
    </>
  )
}
