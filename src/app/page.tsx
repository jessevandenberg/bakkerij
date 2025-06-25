import Image from "next/image";

const Home = () => (
  <main className="relative max-w-7xl mx-auto px-4 py-12 min-h-screen">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 animate-fade-in">
        <h1 className="font-playfair text-5xl font-bold text-gray-800 leading-tight">
          Welkom bij <span className="text-amber-700">Het witte bolletje</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Bij onze exclusieve banketbakkerij combineren we ambachtelijke traditie met moderne verfijning. 
          Elke dag creëren we met passie en precisie de meest verrukkelijke taarten, gebakjes en desserts.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Onze meesterbanketbakkers werken met de fijnste ingrediënten om u een onvergetelijke culinaire ervaring te bieden.
        </p>
      </div>
      <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
        <Image
          src="/images/broodmandje.jpg"
          alt="Luxe interieur van banketbakkerij Het witte bolletje"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  </main>
);

export default Home;
