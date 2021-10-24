import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <div>
        <div className='container mx-auto'>
          <div className='flex bg-blue-500 items-center'>
            <div className='w-3/12'>
              <Logo />
            </div>
            <div className='w-6/12'>
              <Nav />
            </div>
            <div className='w-3/12 text-right'>
              <Button variant='outline-yellow'>Kontak</Button>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-3xl text-white font-semibold font-mono w-8/12 mx-auto'>
              Saya seorang front-end engineer, back-end engineer, dan juga UI
              designer
            </h1>
            <p className='text-white text-opacity-60 text-lg w-4/12 mx-auto mt-0'>
              Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
              design.
            </p>
            <Button className='mt-10' variant='yellow'>
              Pelajari
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
