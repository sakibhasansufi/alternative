import { useEffect, useState } from "react";


const Card = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/alter')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <section>
            <h2 className="text-center font-bold text-2xl">Recent Queries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                {
                    card.map(cards => <div key={cards._id} >
                        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <img className="object-cover w-full h-64" src={cards.image} alt="Article" />

                            <div className="p-6">
                                <div>
                                    <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{cards.title}</a>
                                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{cards.name}</span> <br />
                                    <span className="text-xs font-normal uppercase dark:text-blue-400">{cards.brand}</span>

                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{cards.reason}</p>
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <img className="object-cover h-10 rounded-full" src={cards.user_image} alt="Avatar" />
                                            <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{cards.user_name}</a>
                                        </div>
                                        <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{cards.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>



        </section>

    );
};

export default Card;