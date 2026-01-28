function Navbar({ onServicesClick }) {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">LeviaX</h1>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li onClick={onServicesClick} className="cursor-pointer hover:text-blue-600">Solutions</li>
          <li className="cursor-pointer hover:text-blue-600">Company</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
