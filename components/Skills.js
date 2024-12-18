const Skills = () => {
    return (
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-amber-500">Skills</h2>
          <p className="text-zinc-950">
            I have experience with a variety of technologies, including:
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md font-semibold">C#/.NET</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md font-semibold">C++</span>
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-md font-semibold">Python</span>
            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-semibold">HTML/CSS</span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-md font-semibold">SQL</span>
            <span className="bg-red-100 text-red-700 px-4 py-2 rounded-md font-semibold">Pentest</span>
            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-md font-semibold">OS</span>
            <span className="bg-lime-100 text-lime-700 px-4 py-2 rounded-md font-semibold">Network Analysis</span>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;