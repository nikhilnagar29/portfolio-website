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

        <h1 className="text-3xl font-bold text-center mb-8">Live Whiteboard - Project Documentation</h1>

        {/* Buttons */}
        <section className="text-center mb-10">
          <div className="flex justify-center gap-5">
            {renderButton('GitHub Repo', 'https://github.com/nikhilnagar29/practice-platform')}
            {renderButton('Live Demo', 'https://learning-platform-4v3s.onrender.com/', false)}
          </div>
        </section>
        
        {/* 1 */}
        <h2 className="text-2xl font-bold mb-4">1. Canvas HTML Tag and Rough.js Library</h2>
        <div className="flex flex-col md:flex-row mb-12">
        {/* Left Side */}
                  
                  <div className="md:w-2/3 pr-4">
                    
                    <p className="mb-2">
                      The <code>canvas</code> HTML element provides an area for drawing graphics via JavaScript. In this project, the rough.js library is utilized to give a hand-drawn aesthetic to the drawings. This combination supports tools such as rectangles, lines, circles, and freehand shapes.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">Features</h3>
                    <ul className="list-disc pl-5 mb-4">
                      <li>
                      <span className='font-semibold'>Drawing Tools:</span> Includes pencil, circle, line, rectangle, highlighter, and eraser.
                      </li>
                      <li>
                      <span className='font-semibold'>Customization:</span> Allows users to change colors for enhanced visual appeal.
                      </li>
                      <li>
                      <span className='font-semibold'>Text Input:</span> Supports adding text directly onto the canvas.
                      </li>
                      <li>
                      <span className='font-semibold'>Erase and Clear Page:</span> Enables erasing specific sections or clearing the entire canvas.
                      </li>
                      <li>
                      <span className='font-semibold'>Rough.js:</span> Provides a hand-drawn appearance to drawings.
                      </li>

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
            <h2 className="text-2xl font-bold mb-4">2. Create Room and Join Room</h2>
            
            <div className="flex flex-col md:flex-row mb-12 gap-6">
              {/* Left Side (Images) */}
              <div className="md:w-1/3 flex justify-center items-center gap-4 flex-col space-y-4">
                <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                  <p className="text-gray-600">Image Placeholder 1</p>
                </div>
                
              </div>

              {/* Right Side (Text) */}
              <div className="md:w-2/3 pl-4">
               
                
              <p className="mb-2">
            This feature allows users to create a collaborative session by generating a session ID and sharing it with others. Both hosts and viewers can interact within the same session.
                </p>
                

                <h3 className="text-xl font-semibold mt-4 mb-2">Room Creation</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>A host generates a unique session ID.</li>
                  <li> The session ID is shared with viewers for collaboration.</li>
                  
                </ul>

                <h3 className="text-xl font-semibold mt-4 mb-2">Room Joining</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>Viewers enter the session ID to join an existing room..</li>
                  <li> Collaboration is synchronized in real-time.</li>
                  {/* <li>Detects game-ending conditions like checkmate or stalemate.</li> */}
                </ul>

                
              </div>
            </div>
        
        


        {/* 3 */}
        <h2 className="text-2xl font-bold mb-4">3. Socket.io Integration</h2>
<div className="flex flex-col md:flex-row mb-12">
  {/* Left Side */}
  <div className="md:w-2/3 pr-4">
    <p className="mb-2">
      Socket.io enables real-time communication between the host and viewers, providing a seamless and interactive collaboration experience. Here's a detailed breakdown of its key components:
    </p>

    <p className="mb-4">
      <strong>Elements (Drawing) Data Transfer:</strong> Real-time synchronization of drawing elements, such as lines, rectangles, and circles, ensuring that all users see updates instantly.
    </p>

    <h4 className="text-lg font-semibold mt-4 mb-2">Session Management</h4>
    <ul className="list-disc pl-5 mb-4">
      <li>
        <strong>Session Creation:</strong> The host creates a room where session data is temporarily stored for ongoing interactions.
      </li>
      <li>
        <strong>Session Joining:</strong> Viewers validate a unique session ID to join the room and access shared content.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mt-4 mb-2">Benefits</h3>
    <ul className="list-disc pl-5 mb-4">
      <li>Delivers smooth and reliable real-time collaboration across multiple devices.</li>
      <li>Improves the user experience with instant updates and interactions.</li>
      <li>Scales effectively for sessions with multiple viewers.</li>
    </ul>
  </div>

  {/* Right Side */}
  <div className="md:w-1/3 flex flex-col items-center justify-center gap-4">
    <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
      <p className="text-gray-600">Image Placeholder 1</p>
    </div>
  </div>
</div>




        {/* Future Goals */}
        <h2 className="text-2xl font-bold mb-4">4. Feature Goals</h2>
        <p className="mb-2">
                The feature goals aim to enhance real-time collaboration, improve performance, and introduce advanced functionalities for a seamless and efficient user experience. Here's a breakdown of the current and future goals:
                </p>

            <div className="flex flex-col md:flex-row mb-12 gap-10">


           
            {/* Right Side */}
            <div className="md:w-1/3 flex flex-col items-center justify-center gap-4">
                <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                <p className="text-gray-600">Image Placeholder 1</p>
                </div>
                
            </div>

             {/* Left Side */}
            <div className="md:w-2/3 pr-4">
                
                <h4 className="text-lg font-semibold mt-4 mb-2">Current Goals</h4>
                <ul className="list-disc pl-5 mb-4">
                <li>
                    <strong>Real-Time Collaboration:</strong> Ensure all connected users see updates instantly, fostering effective interaction.
                </li>
                <li>
                    <strong>Efficient Data Transfer:</strong> Optimize data transfer by sending only new drawing elements to improve performance, rather than sending all elements every time.
                </li>
                <li>
                    <strong>Persistent Notes:</strong> Save classroom data to MongoDB for later reference and note-taking, ensuring data is accessible anytime.
                </li>
                </ul>

                <h4 className="text-lg font-semibold mt-4 mb-2">Future Goals</h4>
                <ul className="list-disc pl-5 mb-4">
                <li>
                    <strong>Enhanced Video Integration:</strong> Implement video and audio broadcasting using WebRTC to enable live teaching sessions with rich multimedia support.
                </li>
                <li>
                    <strong>Comprehensive Learning Platform:</strong> 
                    <ul className="list-disc pl-5 mb-2">
                    <li>Enable teachers to create accounts and host live classes.</li>
                    <li>Allow students to create accounts and join sessions with ease.</li>
                    </ul>
                </li>
                
                </ul>
            </div>

            
            </div>

        
      </div>
    </div>
  );
};

export default Documentation;

