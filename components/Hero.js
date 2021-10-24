import Button from "./Button";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className='bg-hero h-[712px]'>
      <div className='container mx-auto'>
        <Navbar />
        <div className='text-center mt-20'>
          <h1 className='text-3xl text-white font-semibold font-mono w-8/12 mx-auto leading-relaxed'>
            Saya seorang front-end engineer, back-end engineer, dan juga UI
            designer
          </h1>
          <p className='text-white text-opacity-60 text-lg w-4/12 mx-auto mt-6 mb-16 leading-relaxed'>
            Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
            design.
          </p>
          <Button variant='yellow' className='mt-14'>
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
