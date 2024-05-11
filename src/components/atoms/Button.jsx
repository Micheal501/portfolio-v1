/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
const Button = ({ titleButton, buttonLink }) => {
  return (
    <>
      <button className='w-36 border font-bold border-slate-800 text-[14px] text-Text shadow-md hover:bg-slate-300'>
        <a
          rel='noopener noreferrer'
          href={buttonLink}
          target='_blank'
        >
          {titleButton}
        </a>
      </button>
    </>
  );
};

export default Button;
