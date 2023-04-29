export default function ServiceCard({ name, items, src }) {
    return (
        <div
            className="bg-black bg-opacity-60 hover:bg-opacity-40 bg-blend-overlay bg-center bg-no-repeat w-72 h-72 lg:w-96 lg:h-96 transition ease-in-out duration-300"
            style={{ backgroundImage: `url(${src})` }}
        >
            <div className="w-full h-full text-white grid place-items-center">
                <div>
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <ul className="opacity-80 mt-2 list-disc">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    );
}