"use client";
import { notFound } from 'next/navigation';
import { products } from '../products';
import { useState } from 'react';
import Image from 'next/image';

export default function Page({ params }: any) {
  const [added, setAdded] = useState(false);
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  function handleAddToCart() {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <main className="relative max-w-xl mx-auto px-4 py-12 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gold-100">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={256}
          className="w-full h-64 object-cover rounded mb-6 border border-soft-brown-100/20"
        />
        <h1 className="font-playfair text-4xl font-bold mb-4 text-deep-gold-100 drop-shadow-lg">{product.name}</h1>
        <p className="font-cormorant text-lg text-soft-brown-200 mb-4">{product.description}</p>
        <div className="mb-4">
          <span className="font-semibold text-soft-brown-200">Ingrediënten:</span>
          <span className="font-cormorant text-soft-brown-100 ml-2">{product.ingredients}</span>
        </div>
        <div className="mb-6">
          <span className="font-semibold text-soft-brown-200">Prijs:</span>
          <span className="font-cormorant text-soft-brown-100 ml-2">€ {product.price.toFixed(2)}</span>
        </div>
        <button
          className="w-full bg-deep-gold-100 text-black font-cormorant text-lg py-4 px-6 rounded-md hover:bg-deep-gold-200 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-2 transition-colors duration-200 shadow-md"
          onClick={handleAddToCart}
        >
          Voeg toe aan winkelwagen
        </button>
        {added && (
          <div className="mt-4 text-green-700 font-cormorant text-center animate-fade-in">
            Toegevoegd aan winkelwagen!
          </div>
        )}
      </div>
    </main>
  );
} 