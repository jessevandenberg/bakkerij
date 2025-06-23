import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/assortiment', label: 'Assortiment' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => (
  <nav
    className="w-full bg-white border-b border-gold-100 sticky top-0 z-50 transition-all duration-300 shadow-sm"
    aria-label="Hoofdnavigatie"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-24 items-center justify-between">
        <Link 
          href="/"
          className="font-playfair text-3xl tracking-wide text-burgundy-100 hover:text-gold-300 transition-colors duration-300"
        >
          Het witte bolletje
        </Link>
        <ul className="flex space-x-8" role="menubar">
          {navLinks.map(({ href, label }) => (
            <li key={href} role="none">
              <Link
                href={href}
                className="font-cormorant text-lg text-burgundy-100 hover:text-gold-300 px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-300 hover:after:w-full after:transition-all after:duration-300"
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