import insta from '../util/icons/instagram.png';

const Instagram = () => {
    return (
        <>
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
        </>
    )
}

export default Instagram;