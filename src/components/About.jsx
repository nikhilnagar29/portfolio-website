
const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 ">
            {/* About Me Section */}
            <div className="w-full max-w-6xl text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    About Me
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
                Full-Stack Developer | Algorithmic Problem-Solving Enthusiast
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-8">
                    I am a proficient full-stack developer passionate about designing and implementing modern, scalable, and intuitive web applications. My expertise lies in creating seamless user interfaces paired with reliable and efficient backend architectures. I excel at addressing complex algorithmic challenges and optimizing computational workflows to deliver high-performance solutions.
                </p>
                
                {/* Development Expertise */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Technical Expertise
                    </h3>
                    <ul className="list-disc list-inside text-base md:text-lg text-gray-600">
                        <li>Frontend: React.js, Tailwind CSS, EJS, Javascript</li>
                        <li>Backend: Node.js, Express.js, MongoDB</li>
                        <li>Additional Skills: REST API Development, WebSocket Programming (Socket.io), Git Version Control, Authentication & Authorization, and Application Deployment
                        </li>
                    </ul>
                </div>
                
                {/* Notable Projects */}
               




                {/* Problem Solving */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Algorithmic Problem-Solving Skills
                    </h3>
                    <p className="text-base md:text-lg text-gray-600">
                        I have successfully solved over 270 problems on competitive programming platforms such as Codeforces and LeetCode, consistently refining my problem-solving acumen. I am currently advancing my knowledge of Data Structures and Algorithms through the AlgoZenith platform, with a focus on mastering advanced techniques and tackling complex algorithmic challenges.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
