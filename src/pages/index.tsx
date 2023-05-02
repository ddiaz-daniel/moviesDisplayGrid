import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Marquee from "react-fast-marquee";
import Highlights from '../components/Carousel';
import MoviesList from '../components/MoviesList';
const Home = () => {

  const marqueeText = "New content is coming from Earth to the movie theater in Keyone City, on the Wookiee homeworld of Kashyk! Don't miss out on these upcoming blockbuster movies: 'Galactic Guardians' on May 15th, 'Rogue Recon' on June 1st, and 'Space Odyssey' on June 15th. Get your tickets now!!";

  return (
    <Layout>
      <div className="bg-black text-white py-2 w-max-screen sticky">
        <Marquee gradient={false}>
          {marqueeText}
        </Marquee>
      </div>
      <main className="container mx-auto justify-center">
        <Highlights />
        <MoviesList />
      </main>
    </Layout>
  );
};

export default Home;

