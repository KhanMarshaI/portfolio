import Image from 'next/image';

const Projects = () => {
    return (
    <section id="projects" className="py-16 bg-gray-50">
        <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-amber-500">Projects Showcase</h2>

            <div>
                <h3 className="text-2xl font-semibold ml-4 mb-4 text-indigo-600">C# Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-4">
                
                    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
                        <Image
                            src="/argus.png"
                            alt="Argus"
                            width={768}
                            height={300}
                            className="rounded-t-lg object-cover"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-bold text-stone-800">Argus</h4>
                            <p className="mt-2 text-stone-600">
                                A WIP robust tool that aggregates and analyzes threat intelligence using APIs like <span className="font-medium">VirusTotal, AlienVault OTX, and Shodan</span>. 
                            </p>
                            <p className="mt-2 text-sm text-gray-500">
                                Built with: <span className="font-medium">C#, .NET, MSSQL</span>
                            </p>
                            <a href="https://github.com/KhanMarshaI/Argus" target="_blank" className="text-blue-600 underline mt-3 inline-block">
                                View on GitHub
                            </a>
                        </div>
                    </div>

                </div>

            </div>

            <div className='mt-8'>
                <h3 className="text-2xl font-semibold ml-4 mb-4 text-indigo-600">C++ Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-4">
                
                    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
                        <Image
                            src="/IDS.png"
                            alt="IDS"
                            width={768}
                            height={300}
                            className="rounded-t-lg object-cover"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-bold text-stone-800">IDS</h4>
                            <p className="mt-2 text-stone-600">
                            This project is an Intrusion Detection System (IDS) that leverages Data Structures and Algorithms to process and analyze 
                            network logs. The system reads network logs from a .txt file, converts them into a vector (later that vector is used for 
                            sorting), and then into a hash table for efficient processing. The IDS provides various features to display, sort, and 
                            search network events, enhancing the ability to detect and analyze potential intrusions. 
                            </p>
                            <p className="mt-2 text-sm text-gray-500">
                                Built with: <span className="font-medium">C++, RegExp</span>
                            </p>
                            <a href="https://github.com/KhanMarshaI/IDS" target="_blank" className="text-blue-600 underline mt-3 inline-block">
                                View on GitHub
                            </a>
                        </div>
                    </div>

                
                    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
                        <Image
                            src="/naive.png"
                            alt="Naive-Bayes-GUI"
                            width={500}
                            height={300}
                            className="rounded-t-lg object-cover"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-bold text-stone-800">Naive Bayes Classifier</h4>
                            <p className="mt-2 text-stone-600">
                            Naive Bayes Classifier is built on C++ and QT framework as GUI application. It is the implementation of Naive Bayes algorithm.
                            </p>
                            <p className="mt-2 text-sm text-gray-500">
                                Built with: <span className="font-medium">C++, QT (GUI)</span>
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <div className='mt-8'>
                <h3 className="text-2xl font-semibold ml-4 mb-4 text-indigo-600">Python Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-4">
                
                    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
                        <Image
                            src="/tiles.png"
                            alt="Memory Tiles Game"
                            width={500}
                            height={300}
                            className="rounded-t-lg object-cover"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-bold text-stone-800">Memory Tiles</h4>
                            <p className="mt-2 text-stone-600">
                            The game will highlight three random tiles at the start the user has to find those tiles, if the user picks a wrong tile 
                            the score will go down. Once the user has detected all three tiles the program will generate three more random tiles.
                            </p>
                            <p className="mt-2 text-sm text-gray-500">
                                Built with: <span className="font-medium">Python, PySimpleGUI</span>
                            </p>
                            <a href="https://github.com/KhanMarshaI/Python/tree/master/Intermediate%20Projects/Memory%20Tiles" target="_blank" className="text-blue-600 underline mt-3 inline-block">
                                View on GitHub
                            </a>
                        </div>
                    </div>

                
                    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
                        <Image
                            src="/login.png"
                            alt="User"
                            width={350}
                            height={300}
                            className="rounded-t-lg object-cover"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-bold text-stone-800">Simple USER Login/Registration</h4>
                            <p className="mt-2 text-stone-600">
                            A simple login/registration program created on Python using PySimpleGUI and MySQL.
                            </p>
                            <p className="mt-2 text-sm text-gray-500">
                                Built with: <span className="font-medium">Python, PySimpleGUI, MySQL.</span>
                            </p>
                            <a href="https://github.com/KhanMarshaI/Python/tree/master/Intermediate%20Projects/Login%20%5BSQL%7D" target="_blank" className="text-blue-600 underline mt-3 inline-block">
                                View on GitHub
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section>
    );
  };
  
  export default Projects;