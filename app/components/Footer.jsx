const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MealManager. All rights reserved.</p>
        <p className="mt-2 text-gray-400 text-sm">Designed & Developed by Sabba</p>
      </div>
    </footer>
  );
};

export default Footer;
