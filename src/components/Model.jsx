import myImage from '../assets/Image.png';
import { useEffect } from 'react';
import { checkApiStatus } from "../utils/apiUtils";

const Model = () => {

    useEffect(() => {
        const callApis = () => {
            checkApiStatus(
                "https://learning-platform-backend-tqmf.onrender.com/check",
                "Live Whiteboard API is running"
            );

            checkApiStatus(
                "https://sociogram-qnup.onrender.com/check",
                "SocioGram API is running"
            );

            checkApiStatus(
                "https://sociogram-3cog.onrender.com/check",
                "SocioGram is running"
            );

        };

        callApis();
    }, []);

    
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            {/* Main Container */}
            
            <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-6xl">
                {/* Text Section */}
                <div className="w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Welcome to My Portfolio
                    </h2>
                    <h4 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
                        Hi, I'm Nikhil Nagar
                    </h4>
                    <p className="text-base md:text-lg text-gray-600">
                        A 3rd-year student in the Department of Mathematics and Computing at IIT Kharagpur. I am a passionate developer and problem solver, dedicated to crafting innovative digital solutions and mastering the art of algorithmic thinking.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center mb-6 mt-[75px] md:mb-0 sm:mt-5">
                    <img 
                        src={myImage}
                        alt="Nikhil Nagar"
                        className="w-3/4 md:w-full max-w-xs md:max-w-md rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Model;
