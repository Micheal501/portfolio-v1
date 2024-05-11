/* eslint-disable react/no-unescaped-entities */
import Button from '../atoms/Button';
import Navbar from './Navbar';
import Footer from '../organisms/Footer';
import { ReactTyped } from 'react-typed';
import { Download } from 'lucide-react';
const HeroSection = () => {
  return (
    <>
      <Navbar />
      <div className='lg:flex lg:flex-row flex-col items-center py-16 max-w-8xl container mx-auto bg-Background'>
        <div className='w-full lg:w-1/2 flex flex-col flex-wrap justify-start items-center py-6'>
          <h1 className='text-[36px] h-12'>I'm Micheal Owen</h1>
          <h2 className='text-[26px] font-bold mb-4'>
            Front End{' '}
            <ReactTyped
              strings={['Developer']}
              typeSpeed={100}
              backSpeed={100}
              loop
            />
          </h2>
          <q className='text-[20px] mb-8 px-4 text-center'>
            Code is like humor. When you have to explain it, it’s bad. – Cory
            House
          </q>
          <div className='flex gap-6'>
            <Button
              titleButton='Hire Me'
              buttonLink='mailto:mowen8983@gmail.com'
            />
            <div className='flex justify-center border border-black hover:bg-slate-300'>
              <button className='w-32 font-bold border-slate-800 text-[14px] text-Text shadow-lg '>
                <a
                  href='https://drive.google.com/uc?export=download&id=1Du6-HFRyUIKP0cToojta_4hbopr_jLNK'
                  download='Micheal_Owen_Front_End_Developer_CV.pdf'
                >
                  Download CV
                </a>
              </button>
              <a
                href='https://drive.google.com/uc?export=download&id=1Du6-HFRyUIKP0cToojta_4hbopr_jLNK'
                download='Micheal_Owen_Front_End_Developer_CV.pdf'
              >
                <Download />
              </a>
            </div>
          </div>
        </div>
        <div className='w-full md:w-5/6 xl:w-1/2 h-[500px] lg:flex relative pt-8 flex justify-center items-center mx-auto'>
          <img
            src='../../assets/img/man.png'
            alt='Profiles'
            className='w-5/6 h-4/6 md:w-full sm:h-full lg:w-4/6 rounded-2xl'
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HeroSection;
