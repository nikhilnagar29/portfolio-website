import React from 'react';

const renderButton = (text, link, primary = true) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`px-6 py-3 rounded shadow hover:opacity-90 inline-block ${
      primary
        ? 'bg-black text-white'
        : 'bg-white text-black border border-black hover:bg-gray-100'
    }`}
  >
    {text}
  </a>
);

const Documentation = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen px-6 sm:px-12 lg:px-24 py-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Title Section */}
        <a
          href="/"
          className="relative top-[-26px] font-extrabold left-[-35px] text-black px-6 py-3 rounded-lg  bg-gradient-to-r hover:text-gray-600 hover:scale-[125%] transition-all duration-200"
        >
          Back to Home
        </a>

        <h1 className="text-4xl font-bold text-center mb-8">SocioGram - Project Documentation</h1>

        {/* Buttons */}
        <section className="text-center mb-10">
          <div className="flex justify-center gap-5">
            {renderButton('GitHub Repo', 'https://github.com/nikhilnagar29/practice-platform')}
            {renderButton('Live Demo', 'https://learning-platform-4v3s.onrender.com/', false)}
          </div>
        </section>
        
        
        <h2 className="text-3xl font-semibold mb-4">Features</h2>

        {/* 1 */}
        <div className="flex flex-col md:flex-row mb-12">
            {/* Left Side */}
                          
            <div className="md:w-2/3 pr-4 justify-center felx flex-center">
                <h2 className="text-2xl font-bold mb-4">1. Create Account and Log In</h2>

            <li className="mb-2">
                Users can create an account by providing their email, name, and password. An OTP is sent to their Gmail for verification.
            </li>
            
            <li className="mb-2">
                Users can log in using their email and password.
            </li>
            <p className="mb-2">
                <strong>Technologies used:</strong>
            </p>
            <ul className="list-disc pl-5 mb-4">
                <li>Nodemailer for sending OTPs.</li>
                <li>Bcrypt and Encrypt for encrypting passwords in the MongoDB database.</li>
            </ul>
            </div>

            {/* Right Side */}
            <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
                <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                <p className="text-gray-600">Image Placeholder 1</p>
                </div>
                
            </div>
        </div>

        {/* 2 */}
        <div className="flex flex-col md:flex-row gap-10 mb-12">
            {/* Left Side */}
            <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
                <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                    <p className="text-gray-600">Image Placeholder 6</p>
                </div>
            </div>

            {/* Right Side */}
            <div className="md:w-2/3 pr-4">
                <h2 className="text-2xl font-bold mb-4">2. Post an Image or Text</h2>

                <li className="mb-2">
                    Users can post an image or text.
                </li>
                
                <li className="mb-2">
                    Images are saved in MongoDB, and each post includes a like button, save button, and comment button.
                </li>
                <li className="mb-2">
                    Posts are visible on the user's profile and distributed to all their followers.
                </li>
                <p className="mb-2">
                    <strong>Technologies used:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Multer for handling image uploads.</li>
                </ul>
            </div>
        </div>



        {/* 3 */}
        <div className="flex flex-col md:flex-row mb-12">
            {/* Left Side */}
            <div className="md:w-2/3 pr-4">
                <h2 className="text-2xl font-bold mb-4">3. Home Page</h2>

                <li className="mb-2">
                    Displays posts from the user and users they follow.
                </li>
                <li className="mb-2">
                    The home page is reused for saved posts, liked posts, profile pages, post comments, and post details.
                </li>
                <p className="mb-2">
                    <strong>Challenges faced:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Managing multiple functionalities in a single home.ejs page was complex and time-consuming.</li>
                </ul>
                <p className="mb-2">
                    <strong>Solution:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>In the future, using React.js would simplify the development process by creating reusable components and implementing different routes for each functionality. Debugging and updates would also be more efficient.</li>
                </ul>
            </div>

            {/* Right Side */}
            <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
                <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                    <p className="text-gray-600">Image Placeholder 3</p>
                </div>
            </div>
        </div>

        {/* 4-5-6 */}
        <div className="flex flex-col md:flex-row mb-12 gap-10">
            {/* Left Side */}
            <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
                <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                    <p className="text-gray-600">Image Placeholder 7</p>
                </div>
            </div>

            {/* Right Side */}
            <div className="md:w-2/3 pr-4 auto-my">
                <h2 className="text-2xl font-bold mb-4">4. Explore Page</h2>

                <li className="mb-2">
                    Users can search for other users and discover profiles on the platform.
                </li>

                <h2 className="text-2xl font-bold mb-4 mt-8">5. Save and Like Pages</h2>

                <li className="mb-2">
                    Separate pages display posts the user has liked or saved in the past.
                </li>

                <h2 className="text-2xl font-bold mb-4">6. Profile Page</h2>

                <li className="mb-2">
                    Each profile page includes a background image and a profile picture.
                </li>
                <li className="mb-2">
                    Displays posts of the user and details about followers and following.
                </li>
            </div>
        </div>

        {/* 8-9 */}
        <div className="flex flex-col md:flex-row mb-12">
            {/* Left Side */}
            <div className="md:w-2/3 pr-4">
                <h2 className="text-2xl font-bold mb-4 mt-8">7. Delete Post and Account</h2>

                <li className="mb-5">
                    Users can delete their posts or account. Deleting an account removes all associated data from the database.
                </li>
                <h2 className="text-2xl font-bold mb-4">8. Authorization and Authentication</h2>

                <p className="mb-2">
                    <strong>Technologies used:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Cookie-parser</li>
                    <li>JSON Web Token (JWT)</li>
                    <li>Encrypt</li>
                </ul>
                <p className="mb-2">
                    These technologies ensure secure sessions and enhance the user experience.
                </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/3 flex items-center justify-center gap-4 space-y-4">
                <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                    <p className="text-gray-600">Image Placeholder 5</p>
                </div>
            </div>
        </div>


        {/* 7 */}
        <div className="flex flex-col md:flex-row mb-12 gap-10">

            {/* Left Side */}
            <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
                <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                    <p className="text-gray-600">Image Placeholder 4</p>
                </div>
            </div>


            {/* Right Side */}
            <div className="md:w-2/3 pr-4">
                <h2 className="text-2xl font-bold mb-4">9. MongoDB Schemas</h2>

                <p className="mb-2">
                    <strong>Schemas used:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>User schema</li>
                    <li>Post schema</li>
                    <li>Comment schema</li>
                </ul>
                <p className="mb-2">
                    <strong>Optimization:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Saved posts are stored using post_id, reducing computation time and improving server efficiency.</li>
                </ul>
            </div>

            
        </div>

     

        


            <h2 className="text-3xl font-bold mb-6">Challenges and Solutions</h2>
            
            {/* 1 */}
            <div className="flex flex-col md:flex-row mb-12">
                

                {/* Right Side */}
                <div className="md:w-2/3 pr-4">
                    {/* <h2 className="text-2xl font-bold mb-4">9. Challenges and Solutions</h2> */}

                    <p className="mb-4">
                        <strong>Challenge 1:</strong> Slow Loading of Profiles and Home Page
                    </p>
                    <p className="mb-2">
                        <strong>Problem:</strong> Initially, SocioGram was very slow, with significant delays in loading the profile and home page.
                    </p>
                    <p className="mb-2">
                        <strong>Solution:</strong>
                    </p>
                    <ul className="list-disc pl-5 mb-4">
                        <li>Created separate APIs for user details (profile image, name, username) and post images.</li>
                        <li>Previously, all post and user details were computed into a single object and sent to the frontend, causing high latency.</li>
                        <li>By implementing individual APIs, user details and post images are now fetched asynchronously, reducing loading times by 75%.</li>
                        <li>Future scalability was improved as changes or updates can now be made to APIs independently.</li>
                        <li>Introduced microservices for high-demand APIs to further optimize performance.</li>
                    </ul>
                </div>

                {/* Left Side */}
                <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
                    <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                        <p className="text-gray-600">Image Placeholder 9</p>
                    </div>
                </div>
                
            </div>

            {/* 2 */}
            <div className="flex flex-col md:flex-row mb-12 gap-10">
                {/* Left Side */}
                <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
                    <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                        <p className="text-gray-600">Image Placeholder 16</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="md:w-2/3 pr-4">
                    {/* <h2 className="text-2xl font-bold mb-4">Challenge 2: Inactive Backend Server</h2> */}
                    <p className="mb-4">
                        <strong>Challenge 2:</strong> Inactive Backend Server
                    </p>
                    <p className="mb-2">
                        <strong>Problem:</strong> The free server used for hosting the backend often faced a 50-second waiting time when inactive. This delay could cause users to leave the website.
                    </p>

                    <p className="mb-2">
                        <strong>Solution:</strong>
                    </p>
                    <ul className="list-disc pl-5 mb-4">
                        <li>
                            Developed a static portfolio website that serves as a redirect page.
                        </li>
                        <li>
                            When a user visits SocioGram, they are initially redirected to the portfolio site, which activates the backend server via a fetch API.
                        </li>
                        <li>
                            During this time, users can explore the portfolio, read about the project, and increase their interest in the platform.
                        </li>
                        <li>
                            The portfolio link is shared instead of the live project link to ensure a better user experience and server activation.
                        </li>
                    </ul>
                </div>
            </div>


            {/* 3 */}
            <div className="flex flex-col md:flex-row mb-12 ">
                

                {/* Right Side */}
                <div className="md:w-2/3 pr-4">
                    <p className="mb-4">
                        <strong>Challenge 3:</strong> Real-Time Like Button
                    </p>
                    {/* <h2 className="text-2xl font-bold mb-4">10. Challenge 2: Real-Time Like Button</h2> */}

                    <p className="mb-2">
                        <strong>Problem:</strong> The like button required a page refresh to reflect changes, which disrupted user experience.
                    </p>
                    <p className="mb-2">
                        <strong>Solution:</strong>
                    </p>
                    <ul className="list-disc pl-5 mb-4">
                        <li>Implemented a fetch API for real-time like updates without requiring a page refresh.</li>
                        <li>Enhanced user engagement by providing instant feedback.</li>
                    </ul>
                </div>
                
                {/* Left Side */}
                <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
                    <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                        <p className="text-gray-600">Image Placeholder 10</p>
                    </div>
                </div>
            </div>


        


        {/* 3 */}
        <h2 className="text-3xl font-bold mb-6">Future Goals</h2>
        {/* 11 */}
        <div className="flex flex-col md:flex-row mb-12">
            

            {/* Right Side */}
            <div className="md:w-2/3 pr-4">
                <h2 className="text-2xl font-bold mb-4">Goal 1: MongoDB Optimization</h2>

                <p className="mb-2">
                    <strong>Objective:</strong> Design optimized schemas for better data storage and performance.
                </p>

                <p className="mb-2">
                    <strong>Proposed Schemas:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>
                        <strong>Image Schema:</strong> For storing background, profile, post, and other images.
                    </li>
                    <li>
                        <strong>Comment Schema:</strong> To handle both messaging and post comments.
                    </li>
                    <li>
                        <strong>User Schema:</strong> To manage user-specific information.
                    </li>
                    <li>
                        <strong>Post Schema:</strong> For post-related data.
                    </li>
                </ul>

                <p className="mb-2">
                    <strong>Impact:</strong> Reduces computational overhead, improves query performance, and ensures scalability for large-scale operations.
                </p>
            </div>

            {/* Left Side */}
            <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
                <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                    <p className="text-gray-600">Image Placeholder 11</p>
                </div>
            </div>
        </div>

        {/* 12 */}
        <div className="flex flex-col md:flex-row mb-12 gap-10">
            {/* Left Side */}
            <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
                <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                    <p className="text-gray-600">Image Placeholder 12</p>
                </div>
            </div>

            {/* Right Side */}
            <div className="md:w-2/3 pr-4">
                <h2 className="text-2xl font-bold mb-4">Goal 2: Adding Chat and Video Call Features</h2>

                <p className="mb-2">
                    <strong>Objective:</strong> Introduce real-time communication through chat rooms, group chats, and video calls.
                </p>

                <p className="mb-2">
                    <strong>Implementation Plan:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Use WebSocket or Socket.io for real-time communication.</li>
                    <li>Implement group-specific and private chat features.</li>
                    <li>Add video call support using WebRTC.</li>
                </ul>
            </div>
        </div>

        {/* 13 */}
        <div className="flex flex-col md:flex-row mb-12">
            

            {/* Right Side */}
            <div className="md:w-2/3 pr-4">
                <h2 className="text-2xl font-bold mb-4">Goal 3: Transition to React.js for Frontend</h2>

                <p className="mb-2">
                    <strong>Objective:</strong> Replace EJS with React.js to enable component-based development.
                </p>

                <p className="mb-2">
                    <strong>Advantages:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Easier updates and maintenance.</li>
                    <li>Improved performance with reusable components.</li>
                    <li>Enhanced developer experience with modern tools and libraries.</li>
                </ul>
            </div>
            {/* Left Side */}
            <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
                <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                    <p className="text-gray-600">Image Placeholder 13</p>
                </div>
            </div>
        </div>

        {/* 14 */}
        <div className="flex flex-col md:flex-row mb-12 gap-10">
            {/* Left Side */}
            <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
                <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                    <p className="text-gray-600">Image Placeholder 14</p>
                </div>
            </div>

            {/* Right Side */}
            <div className="md:w-2/3 pr-4">
                <h2 className="text-2xl font-bold mb-4">Goal 4: Expand API Usage</h2>

                <p className="mb-2">
                    <strong>Objective:</strong> Assign specialized APIs for different tasks.
                </p>

                <p className="mb-2">
                    <strong>Benefits:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Clear separation of concerns.</li>
                    <li>Easier debugging and testing.</li>
                    <li>Better scalability by delegating tasks to specific APIs.</li>
                </ul>
            </div>
        </div>

        {/* 15 */}
        <div className="flex flex-col md:flex-row mb-12">
            

            {/* Right Side */}
            <div className="md:w-2/3 pr-4">
                <h2 className="text-2xl font-bold mb-4">Goal 5: Implement Microservices</h2>

                <p className="mb-2">
                    <strong>Objective:</strong> Use microservices for high-demand tasks such as image loading, user data, comments, and messaging.
                </p>

                <p className="mb-2">
                    <strong>Benefits:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Faster processing for resource-intensive tasks.</li>
                    <li>Improved server efficiency and scalability.</li>
                </ul>
            </div>

            {/* Left Side */}
            <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
                <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                    <p className="text-gray-600">Image Placeholder 15</p>
                </div>
            </div>
        </div>


        {/* 17 */}
        <div className="mb-12">
            <div className="w-full mb-6">
                <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            </div>

            <div className='flex flex-col md:flex-row '>
                {/* Backend Section */}
                <div className="md:w-1/2 flex flex-col mb-6 md:pr-4">
                    <h3 className="text-xl font-semibold mb-2">Backend</h3>
                    <ul className="list-disc pl-5">
                        <li>Node.js: For creating server-side logic and APIs.</li>
                        <li>Express.js: As the web application framework for routing and middleware.</li>
                        <li>MongoDB: For database management and schema design.</li>
                        <li>Redis: For caching and session management.</li>
                        <li>Multer: For handling file uploads like images.</li>
                        <li>bcrypt: For secure password hashing.</li>
                        <li>jsonwebtoken: For user authentication and authorization.</li>
                    </ul>
                </div>

                {/* Frontend Section */}
                <div className="md:w-1/2 flex flex-col mb-6 md:pl-4">
                    <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                    <ul className="list-disc pl-5">
                        <li>EJS (Embedded JavaScript Templates): For server-side rendering of HTML.</li>
                        <li>Tailwind CSS: For responsive and modern styling.</li>
                        <li>JavaScript: For interactive and dynamic UI elements.</li>
                    </ul>
                    {/* Additional Tools Section */}
                    <div className="w-full flex flex-col mb-6">
                        <h3 className="text-xl font-semibold mb-2">Additional Tools</h3>
                        <ul className="list-disc pl-5">
                            <li>Git/GitHub: For version control.</li>
                            <li>Render: For hosting.</li>
                        </ul>
                    </div>
                </div>

                
            </div>

        </div>


        

        
      </div>
    </div>
  );
};

export default Documentation;

