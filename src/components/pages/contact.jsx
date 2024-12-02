import ShowMaps from '../showMaps';
import loc from '../../util/icons/location.svg';
import insta from '../../util/icons/instagram.png';


const Contact = () => {

  return (
    <div className="mt-4 text-center">
      <div
        className='h-48 my-4 bg-cover bg-center grid place-items-center font-josefin font-semibold'
        style={{ backgroundImage: 'url(/pinchos/DSC_2862.jpg)' }}
      >
        <p className='text-6xl text-white '>Contactenos</p>
      </div>
      <div className='block md:flex justify-center'>
        <div className='mx-auto md:m-0 w-72'>
          <div className='font-josefin mt-20'>
            <img className="w-24 m-auto" src={loc} alt="location" />
            <p className='font-bold text-2xl mt-4'>DIRECCIÓN</p>
            <p className='text-2xl text-morao font-semibold '>Colon 1004</p>
            <p className='text-2xl text-morao font-semibold '>Azul, Bs As.</p>
          </div>
          <div className='mt-8'>
          <a 
          href="https://www.instagram.com/cristobalhomegarden"
          target="_blank"
          rel="noopener noreferrer"
          >
            <img className='w-16 m-auto' src={insta} alt="instagram" />
          </a>
            <p className='text-2xl text-morao font-josefin font-semibold p-4'>
              @cristobalhomegarden
            </p>
          </div>
        </div>
        <div className='w-[900px] h-[600px] m-4'>
           <ShowMaps />
        </div>
      </div>
    </div>
  );
};

export default Contact;
