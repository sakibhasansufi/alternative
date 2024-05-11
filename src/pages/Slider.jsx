import { useState } from "react";

export const CarouselMain = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/06/the-photoshop-logo.jpg", tags: "Room", }, { img: "https://techcult.com/wp-content/uploads/2023/07/best-photoshop-alternatives-for-android.png", tags: "Room", }, { img: "https://media.sproutsocial.com/uploads/2021/10/grammarly-case-study-featured-img.png", tags: "Room", }, { img: "https://myclasstracks.com/wp-content/uploads/2023/02/Best-Grammarly-Alternatives-MyClassTracks.png", tags: "Room", },];
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    return (
        <div className="sm:w-2/3 h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
            {/* arrow */}
            <button onClick={nextSlider} className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite ">
                <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
            </button>
            {/* slider container */}
            <div className="ease-linear duration-300 flex gap-[2%]" style={{ transform: `translateX(-${currentSlider * 52}%)` }}>
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <div key={inx}
                        className={`${currentSlider === inx ? 'h-[310px] md:h-[310px] lg:h-[580px] ' : 'h-[260px] md:h-[280px] lg:h-[480px]'} min-w-[50%] bg-black/30 relative duration-200`}
                    >
                        <img src={slide.img} className="w-full h-full" alt={slide.tags} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Slider = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto h-[540px] lg:h-[670px] px-3 lg:px-10 flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 relative">
                <div className="bg-[#f3f9fc] w-full absolute left-0 h-[540px] lg:h-[670px] -z-40"></div>
                <div className="w-2/3 lg:w-1/3 text-center lg:text-left space-y-2 lg:space-y-5 py-5">
                    
                    <p className="text-[#616161] text-xl font-semibold md:text-lg">AltMart is a free service that helps you find better alternatives to the products you love and hate.</p>
                    
                </div>
                <CarouselMain />
            </div>
        </div>
    );
};

export default Slider;