export default function Product({ src, name }) {
    return (
        <div
            className={`relative w-64 h-40 md:w-68 md:h-56 lg:w-72 lg:h-72 bg-black bg-opacity-60 bg-blend-overlay bg-cover bg-center bg-no-repeat grid place-items-center text-white text-lg hover:bg-opacity-30 transition ease-in-out duration-300`}
            style={{ backgroundImage: `url(${src})` }}
        >
            {name}
        </div>



    );
}