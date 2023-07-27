import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href="/">
        
        <h1 className="text-2xl font-bold text-gray-800">Home</h1>
      </Link>
    </header>
  );
}

export default Header;