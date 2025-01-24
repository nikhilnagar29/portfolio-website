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
                        Hi, I'm Nikhil 
                    </h4>
                    <p className="text-base md:text-lg text-gray-600">
                    I'm third-year undergraduate student in the Department of Mathematics at IIT Kharagpur, pursuing a Bachelor of Science (BS) degree. I am passionate about solving real-world challenges and building projects that make an impact. I love exploring ideas, turning them into practical solutions, and constantly expanding my knowledge along the way.
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
