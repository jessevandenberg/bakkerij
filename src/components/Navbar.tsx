import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/assortiment', label: 'Assortiment' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => (
  <nav
    className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300"
    aria-label="Hoofdnavigatie"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-20 items-center justify-between">
        <Link 
          href="/"
          className="font-serif text-2xl tracking-wide text-gray-800 hover:text-amber-700 transition-colors duration-300"
        >
          Het witte bolletje
        </Link>
        <ul className="flex space-x-8" role="menubar">
          {navLinks.map(({ href, label }) => (
            <li key={href} role="none">
              <Link
                href={href}
                className="text-gray-600 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-700 hover:after:w-full after:transition-all after:duration-300"
                tabIndex={0}
                aria-label={label}
                role="menuitem"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar; 