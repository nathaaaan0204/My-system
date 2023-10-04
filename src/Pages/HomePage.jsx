import React, { Fragment, useEffect, useState } from 'react'
import { NavigationBar } from '../Components/NavigationBar'
import { HeroSection } from '../Components/HeroSection'
import { CustomCard } from '../Components/CustomCard'
import { ArticlesList } from '../Components/ArticlesList'
import { FastMarquee } from '../Components/FastMarquee'
import { BeatLoader } from 'react-spinners'
import { Footer } from '../Components/Footer'
import { FeaturedArticles } from '../Components/FeaturedArticles'
import { RecentArticles } from '../Components/RecentArticles'

export const HomePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <div className="w-screen h-screen flex items-center justify-center">
           <BeatLoader color="#0e4c00" loading={loading} />
        </div>
       
      ) : (
   <div>
 <NavigationBar/>
        <HeroSection/>
        <FeaturedArticles/>
        <RecentArticles/>
        <FastMarquee/>
        <Footer/>
   </div>   
    
     ) }
    </Fragment>
  )
}
