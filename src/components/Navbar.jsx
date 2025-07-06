import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="w-full h-16 px-6 flex items-center justify-between bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Welcome back!</h2>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
