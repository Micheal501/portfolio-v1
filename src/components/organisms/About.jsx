/* eslint-disable react/no-unescaped-entities */
import NavBar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';
import { ReactTyped } from 'react-typed';
const HeroSection = () => {
  return (
    <>
      <NavBar />
      <div className='lg:flex lg:flex-row flex-col items-center max-w-8xl container mx-auto bg-Background'>
        <div className='w-full lg:w-1/2 lg:flex relative flex justify-center items-center mb-24 p-6 mx-auto'>
          <img
            src='../../assets/img/profile.png'
            alt='Profiles'
            className='w-3/6 lg:w-4/6 h-[500px] rounded-2xl z-30'
          />
        </div>
        <div className='w-full lg:w-1/2 flex flex-col flex-wrap justify-start items-center'>
          <h1 className='text-[36px] h-12'>I'm Micheal Owen</h1>
          <h2 className='text-[26px] font-bold mb-4'>Front End Developer</h2>
          <p className='text-[20px] mb-8 px-4'>
            <ReactTyped
              strings={[
                ` I am a passionate web development enthusiast currently pursuing my
              education in Informatics at Amikom Yogyakarta. As I embark on my 7th
              semester, I've developed a deep interest and specialization in web
              programming, with a strong focus on Front-End Development.
              Proficieny in HTML, CSS, Javascript, ReactJS, Bootstrap and Tailwindcss.`,
              ]}
              typeSpeed={30}
            />
          </p>
          <h1 className='font-bold text-[26px]'>Social Media</h1>
          <div className='flex gap-4 mt-2 pb-12'>
            <a href='https://linkedin.com/in/micheal-owen'>
              <Linkedin />
            </a>
            <a href='https://github.com/Micheal501'>
              <Github />
            </a>
            <a href='https://instagram.com/micowen293'>
              <Instagram />
            </a>
            <a href='https://www.tiktok.com/@michealowen64'>
              <img
                src='../../assets/img/tiktok.png'
                alt='tiktok'
                className='w-[24px] h-[24px]'
              />
            </a>
            <a href='https://twitter.com/Micheal17258817'>
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HeroSection;
