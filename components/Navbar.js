import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">KhanMarshal's Portfolio</div>
        <div className="flex space-x-6">
          <Link href="#introduction" className="hover:text-indigo-500">Introduction</Link>
          <Link href="#projects" className="hover:text-indigo-500">Projects</Link>
          <Link href="#skills" className="hover:text-indigo-500">Skills</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;