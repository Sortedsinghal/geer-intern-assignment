'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch('/api/products');
      const data = await res.json();
      const selected = data.find(p => p.id === id);
      setProduct(selected);
    }

    fetchProduct();
  }, [id]);

  if (!product) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full object-contain max-h-96 rounded mb-4 bg-white"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-gray-700 mb-4">₹{product.price}</p>
      <p className="text-gray-600">This is a product detail page</p>
    </div>
  );
}
