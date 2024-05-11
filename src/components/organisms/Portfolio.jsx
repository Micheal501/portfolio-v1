import Navbar from './Navbar';
import Footer from './Footer';
const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div className='lg:flex lg:flex-row flex-col items-center py- max-w-8xl container mx-auto'>
        <div className='w-full h-full lg:w-1/2 lg:flex relative pt-8 flex justify-center items-center mb-24 p-6 mx-auto backdrop-blur-xl'>
          <div className='border border-white rounded-lg shadow-lg p-4 hover:scale-105 duration-300'>
            <img
              src='../../assets/img/data-analytics.png'
              alt='data analytics website'
              className='rounded-xl p-2 '
            />
            <div className='p-2'>
              <h2 className='font-bold text-[24px] pt-2'>
                Data Analytics Services
              </h2>
              <h3 className='font-semibold text-[20px] '>
                Stacks: Reactjs, Tailwindcss
              </h3>
              <p className='font-normal text-[16px]'>
                - Ensure the website is designed to be responsive, providing an
                optimal viewing experience across various devices and screen
                sizes.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full h-full lg:w-1/2 lg:flex relative pt-8 flex justify-center items-center mb-24 p-6 mx-auto backdrop-blur-xl'>
          <div className='border border-white rounded-lg shadow-lg p-4 hover:scale-105 duration-300'>
            <img
              src='../../assets/img/login-page.png'
              alt='data analytics website'
              className='rounded-xl p-2 '
            />
            <div className='p-2'>
              <h2 className='font-bold text-[24px] pt-2'>Login Page</h2>
              <h3 className='font-semibold text-[20px] '>
                Stacks: HTML, Tailwindcss
              </h3>
              <p className='font-normal text-[16px]'>
                - create a user-friendly login page that allows users to
                authenticate using their email and password credentials, with
                the additional feature of authentication through Google
                accounts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
