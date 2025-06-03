const products = [
  {
    name: 'Luxe Taarten',
    description: 'Handgemaakte taarten met de fijnste ingrediënten, perfect voor speciale gelegenheden.',
    image: '/images/taart.png',
  },
  {
    name: 'Verfijnd Gebak',
    description: 'Exclusieve gebakjes die een perfecte balans bieden tussen zoet en subtiel.',
    image: '/images/gebak.jpg',
  },
  {
    name: 'Ambachtelijk Brood',
    description: 'Traditioneel gebakken brood met een moderne twist, dagelijks vers uit onze oven.',
    image: '/images/Brood.png',
  },
];

const AssortimentPage = () => (
  <main className="max-w-7xl mx-auto px-4 py-12">
    <h1 className="font-serif text-4xl font-bold text-center mb-12 text-gray-800">
      Ons Exclusieve Assortiment
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div 
          key={product.name} 
          className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <h2 className="font-serif text-2xl font-semibold mb-3 text-gray-800">{product.name}</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  </main>
);

export default AssortimentPage; 