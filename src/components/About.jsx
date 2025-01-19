
const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 ">
            {/* About Me Section */}
            <div className="w-full max-w-6xl text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    About Me
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
                    Full-Stack Developer | Problem Solver
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-8">
                    As a full-stack developer, I specialize in crafting modern, scalable, and user-friendly web applications. My expertise lies in delivering seamless user experiences backed by robust and efficient backend solutions. Additionally, I excel in solving complex algorithmic challenges and optimizing computational processes.
                </p>
                
                {/* Development Expertise */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Development Expertise
                    </h3>
                    <ul className="list-disc list-inside text-base md:text-lg text-gray-600">
                        <li>Frontend: React.js, Tailwind CSS, EJS</li>
                        <li>Backend: Node.js, Express.js, MongoDB</li>
                        <li>Additional Skills: REST APIs, WebSocket Programming (Socket.io), Git, Authentication & Authorization, Deployment</li>
                    </ul>
                </div>
                
                {/* Notable Projects */}
               




                {/* Problem Solving */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Problem Solver
                    </h3>
                    <p className="text-base md:text-lg text-gray-600">
                        I have solved over 270 problems on platforms like Codeforces and LeetCode, continually refining my problem-solving skills. Currently, I am advancing my expertise in Data Structures and Algorithms through the AlgoZenith platform, focusing on advanced techniques and algorithmic problem-solving.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
