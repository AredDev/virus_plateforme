const Navbar = () => {
  return (
    <nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 
                    bg-[#2B2550]/60 backdrop-blur-lg 
                    text-white px-8 py-4 rounded-full shadow-lg"
    >
      <div className="flex items-center justify-center gap-16">
        {/* Logo or Brand Name can go here */}
        <p className="hover:text-purple-300 cursor-pointer transition font-semibold">Logo</p>
        <ul className="flex items-center space-x-8 text-sm ">
          <li className="hover:text-purple-300 cursor-pointer transition">
            Accueil
          </li>
          <li className="hover:text-purple-300 cursor-pointer transition">
            Carte
          </li>
          <li className="hover:text-purple-300 cursor-pointer transition">
            Sensibilisation
          </li>
          <li className="hover:text-purple-300 cursor-pointer transition">
            Assistance & FAQ
          </li>
          <li className="hover:text-purple-300 cursor-pointer transition">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
