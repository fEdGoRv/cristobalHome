const CardAbout = ({title, description, image}) => {
    return (
        <div className="m-4 max-w-sm m-4 bg-grisCard text-morao shadow-md overflow-hidden">
      <img
        className="w-full h-96 object-cover"
        src={`/pinchos/${image}`}
        alt={title}
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
    );
}

export default CardAbout;