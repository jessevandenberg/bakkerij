import Link from 'next/link';
import { products } from './products';
import Image from 'next/image';

const AssortimentPage = () => (
  <main className="relative max-w-7xl mx-auto px-4 py-12 min-h-screen">
    <h1 className="font-playfair text-5xl font-bold text-center mb-16 text-deep-gold-100 drop-shadow-lg">
      Ons Exclusieve Assortiment
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {products.map((product) => (
        <Link href={`/assortiment/${product.slug}`} key={product.name}>
          <div 
<<<<<<< HEAD
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gold-100 cursor-pointer hover:border-deep-gold-100"
=======
            className="bg-champagne-100 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-deep-gold-100 cursor-pointer hover:border-deep-gold-200"
>>>>>>> parent of a3a062c (veranderingen)
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={320}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                priority={product.slug === products[0].slug}
              />
            </div>
            <div className="p-8">
              <h2 className="font-playfair text-2xl font-semibold mb-4 text-soft-brown-200">{product.name}</h2>
              <p className="font-cormorant text-lg text-soft-brown-100 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </main>
);

export default AssortimentPage; 