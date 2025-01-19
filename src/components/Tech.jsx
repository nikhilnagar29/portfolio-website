import React from 'react';
import reactjs from './techImage/reactjs.png';
import tailwind from './techImage/tailwind.png';
import python from './techImage/python.png';
import nodejs from './techImage/nodejs.png';
import mongodb from './techImage/mongodb.png';
import git from './techImage/git.png';
import cpp from './techImage/cpp.png';
import c from './techImage/c.png';
import js from './techImage/js.png';
import vscode from './techImage/vscode.png';
import sql from './techImage/sql.png'
import express from './techImage/express.png'

const techSkills = [
    
    { name: 'Tailwind CSS', image: tailwind },
    { name: 'Python', image: python },
    { name: 'MongoDB', image: mongodb },
    { name: 'Express' , image: express},
    { name: 'ReactJS', image: reactjs },
    { name: 'NodeJS', image: nodejs },
    { name: 'Git', image: git },
    { name: 'C++', image: cpp },
    { name: 'C', image: c },
    { name: 'JavaScript', image: js },
    { name: 'SQL' , image: sql},
    { name: 'VS Code', image: vscode },
];

const Tect = () => {
    return (
        <>
            <div className=" flex flex-col items-center justify-center px-4 ">
                <div className="w-full max-w-6xl text-center md:text-left">
                    <div className="mb-8">
                        <h3 className="text-4xl font-bold text-gray-800 mb-10 p-8">My Tech Skills</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
                            {techSkills.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center bg-white/50 p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300"
                                >
                                    <div className="w-20 h-20 flex items-center justify-center bg-gray-100/60 rounded-full overflow-hidden">
                                        <img src={tech.image} alt={tech.name} className="object-contain w-16 h-16" />
                                    </div>
                                    <p className="mt-4 text-sm font-medium text-gray-700">{tech.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>         
        </>
    );
};

export default Tect;
