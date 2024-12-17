import ShowMaps from '../showMaps';
import loc from '../../util/icons/location.svg';
import Instagram from '../instagram';


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
          <Instagram />
          </div>
        </div>
        <div className='w-[400px] h-[300px] m-auto md:m-4 md:w-[900px] md:h-[600px] m-4'>
           <ShowMaps />
        </div>
      </div>
    </div>
  );
};

export default Contact;
