import instIcon from '../util/icons/instagram.png';

const Footer = () => {
    return (
        <div className="flex flex-auto justify-center  h-64 bg-morao shadow-lg">

            <div className='max-w-10 max-h-10'>
                <img src={instIcon} alt="icon" />
            </div>
            <h3 className="text-black text-semibold p-2">Email: someMail@chistobal.com </h3>
            <h3 className="text-black p-2">Tel.: +54 2281-555555</h3>
        </div>
    );
}

export default Footer;