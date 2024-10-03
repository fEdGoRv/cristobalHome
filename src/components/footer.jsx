import instIcon from '../util/icons/instagram.png';
import Button from './button';

const Footer = () => {
    return (
        <div className="flex flex-auto justify-center bg-opacity-5 shadow-lg">
            <Button>
                <div className='max-w-10'>
                    <img src={instIcon} alt="icon" />
                </div>
            </Button>
            <h3 className="text-black text-semibold p-2">Email: someMail@chistobal.com </h3>
            <h3 className="text-black p-2">Tel.: +54 2281-555555</h3>
        </div>
    );
}

export default Footer;