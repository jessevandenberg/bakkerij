const products = [
  {
    name: 'Frambozen Opera-taartje',
    description: 'Luchtige lagen van amandelbiscuit, frambozencrème en ganache.',
    image: '/images/gebak.jpg',
  },
  {
    name: 'Citroen-meringue tartelette',
    description: 'Knapperige bodem met frisse citroencrème en gebrande Italiaanse meringue.',
    image: '/images/citroen.jpeg',
  },
  {
    name: 'Mille-feuille Vanille Bourbon',
    description: 'Bladerdeeg met rijke vanillecrème en poedersuiker.',
    image: '/images/vanille.png',
  },
];

const AssortimentPage = () => (
  <main className="max-w-7xl mx-auto px-4 py-12">
    <h1 className="font-playfair text-5xl font-bold text-center mb-16 text-burgundy-100">
      Ons Exclusieve Assortiment
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {products.map((product) => (
        <div 
          key={product.name} 
          className="bg-cream-50 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gold-100"
        >
          <div className="relative h-80 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8">
            <h2 className="font-playfair text-2xl font-semibold mb-4 text-burgundy-100">{product.name}</h2>
            <p className="font-cormorant text-lg text-burgundy-100 leading-relaxed">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  </main>
);

export default AssortimentPage; 