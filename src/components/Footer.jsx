import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 py-8 text-center border-t border-gray-800">
      <div className="flex justify-center gap-8 mb-4">
        <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:text-white hover:bg-pink-600 hover:-translate-y-1 duration-300">
          <FaInstagram size={25} />
        </a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:text-white hover:bg-blue-600 hover:-translate-y-1 duration-300">
          <FaLinkedin size={25} />
        </a>
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:text-white hover:bg-gray-600 hover:-translate-y-1 duration-300">
          <FaGithub size={25} />
        </a>
      </div>
      <p className="text-sm">Created with ❤️ by Brandon using React & Tailwind.</p>
      <p className="text-xs mt-2">© 2024 All rights reserved.</p>
    </footer>
  );
};

export default Footer;