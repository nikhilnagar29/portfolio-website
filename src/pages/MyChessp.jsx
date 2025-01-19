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

        <h1 className="text-3xl font-bold text-center mb-8">MyChess - Project Documentation</h1>

        {/* Buttons */}
        <section className="text-center mb-10">
          <div className="flex justify-center gap-5">
            {renderButton('GitHub Repo', 'https://github.com/nikhilnagar29/myChess')}
            {renderButton('Live Demo', 'https://mychess.freewebhostmost.com/', false)}
          </div>
        </section>
        
        {/* CSS/JS Code Explanation */}
        <h2 className="text-2xl font-bold mb-4">1. CSS/JS Code Explanation</h2>
        <div className="flex flex-col md:flex-row mb-12">
          {/* Left Side */}
          
          <div className="md:w-2/3 pr-4">
            
            <p className="mb-2">
              The <code>createBoard</code> function dynamically creates and updates the
              chessboard on the page. Here’s a breakdown of its key components:
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Board Initialization</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <code>gameBoard.innerHTML = ""</code>: Clears the existing chessboard to
                ensure a fresh start.
              </li>
              <li>
                Loops through <code>chessBoard</code> (array representation of the board)
                to create squares and populate them with pieces.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Square Creation</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Each square is represented by a <code>div</code> element with a class of
                <code>square</code>.
              </li>
              <li>
                Alternating colors (beige or brown) are assigned based on the sum of the
                row and column indices.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Piece Representation</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>
                If a square contains a piece, a <code>div</code> is created to represent
                the piece.
              </li>
              <li>
                CSS classes like <code>white</code> or <code>black</code> are used to
                indicate the piece's color.
              </li>
              <li>
                A <code>span</code> element is added to represent the piece's type (e.g.,
                rook, bishop).
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Drag and Drop for Moves</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Pieces are made draggable for players with the appropriate role.
              </li>
              <li>
                <code>dragstart</code> stores the source square and piece being moved.
              </li>
              <li>
                <code>dragend</code> resets the state after the drag action.
              </li>
              <li>
                <code>drop</code> handles moving the piece to the target square.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Chessboard Rotation</h3>
            <p className="mb-2">
              The board rotates 180° for the black player using a <code>flipped</code> CSS
              class.
            </p>
          </div>

          {/* Right Side */}
          <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
            <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
              <p className="text-gray-600">Image Placeholder 1</p>
            </div>
            <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
              <p className="text-gray-600">Image Placeholder 2</p>
            </div>
          </div>
        </div>

       
          

            {/* Chess.js Integration */}
            <h2 className="text-2xl font-bold mb-4">2. Chess.js Integration</h2>
            <p className="mb-2">
                  The Chess.js library handles all game logic, such as move validation and rule enforcement.
                </p>
            <div className="flex flex-col md:flex-row mb-12 gap-6">
              {/* Left Side (Images) */}
              <div className="md:w-1/3 flex justify-center items-center gap-4 flex-col space-y-4">
                <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
                  <p className="text-gray-600">Image Placeholder 1</p>
                </div>
                
              </div>

              {/* Right Side (Text) */}
              <div className="md:w-2/3 pl-4">
               
                

                <h3 className="text-xl font-semibold mt-4 mb-2">Purpose</h3>
                <p className="mb-2">
                  Chess.js tracks the state of the game, including board setup and piece positions, validates moves to ensure legality, and detects game-ending conditions like checkmate or stalemate.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2">Key Functionalities</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>Tracks the state of the game, including board setup and piece positions.</li>
                  <li>Validates moves to ensure legality (e.g., no moving through other pieces for bishops).</li>
                  <li>Detects game-ending conditions like checkmate or stalemate.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4 mb-2">Why Chess.js?</h3>
                <p className="mb-2">
                  Chess.js simplifies the implementation of chess rules, allowing focus on UI and other features.
                </p>
              </div>
            </div>
        
        


        {/* Socket.io Explanation */}
        <h2 className="text-2xl font-bold mb-4">3. Socket.io for Moves and Chat</h2>
        <div className="flex flex-col md:flex-row mb-12">
          {/* Left Side */}
          <div className="md:w-2/3 pr-4">
            <p className="mb-2">
              Socket.io enables real-time communication for both moves and chat between players in the chess game. Here's a breakdown of its key components:
            </p>

            
            <h4 className="text-lg font-semibold mt-4 mb-2">Chess Move Transfer</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>
                When a player makes a move, the move details are sent to the server using <code>Socket.io</code>.
              </li>
              <li>
                The server broadcasts the move to the opponent, updating their board instantly.
              </li>
            </ul>

            <h4 className="text-lg font-semibold mt-4 mb-2">Chat System</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Players can send messages during the game. Messages are transmitted via <code>Socket.io</code> and displayed in the chat interface.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Benefits</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Ensures smooth real-time gameplay and communication across devices.</li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
            <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
              <p className="text-gray-600">Image Placeholder 1</p>
            </div>
          </div>
        </div>


        {/* Future Goals */}
        <h2 className="text-2xl font-bold mb-4">4. Future Goals</h2>
        <p className="mb-2">
          To enhance the chess game and user experience, several features and improvements are planned for future development:
        </p>
        <div className="flex flex-col md:flex-row mb-12 gap-10">
          {/* Left Side */}
          <div className="md:w-1/3 flex flex-col items-center justify-center gap-4 space-y-4">
            <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
              <p className="text-gray-600">Image Placeholder 1</p>
            </div>
            
          </div>

          {/* Right Side */}
          <div className="md:w-2/3 ">
            

            <h3 className="text-xl font-semibold mt-4 mb-2">Game Enhancements</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Display statistics during the match (e.g., pieces captured, opponent’s moves).</li>
              <li>Introduce a timer for competitive play.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Post-Match Analysis</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Allow users to undo and redo moves after a game to study their performance.</li>
              <li>Highlight key moves and errors during the match.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">User Data and Analytics</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Store user data in <code>MongoDB</code>, including the number of matches played and win/loss records.
              </li>
              <li>
                Use this data to match players with opponents of similar skill levels.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Gameplay Modes</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Play Against the Computer:</strong> Add an AI opponent with adjustable difficulty.
              </li>
              <li>
                <strong>Local Multiplayer:</strong> Play with a friend on the same device.
              </li>
              <li>
                <strong>Online Multiplayer:</strong> Play with friends on different devices or against random opponents.
              </li>
            </ul>
          </div>

        
          
        </div>

        
      </div>
    </div>
  );
};

export default Documentation;

