import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div 
      onClick={() => onAddToCart(product)}
      className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all cursor-pointer flex flex-col justify-between group"
    >
      <div className="bg-slate-50 rounded-xl p-2 flex items-center justify-center mb-3 h-40 relative overflow-hidden">
        {product.image ? (
          typeof product.image === 'string' && product.image.startsWith('http') ? (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-contain rounded-lg group-hover:scale-110 transition-transform p-2"
            />
          ) : (
            <span className="text-4xl group-hover:scale-110 transition-transform">{product.image}</span>
          )
        ) : (
          <span className="text-4xl group-hover:scale-110 transition-transform">🛒</span>
        )}
      </div>
      <div>
        <h4 className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-1">{product.name}</h4>
        <div className="flex items-center justify-between mt-1">
          <p className="text-xs font-semibold text-gray-400">{product.unit}</p>
          <p className="text-xs sm:text-sm font-extrabold text-emerald-600">KSh {product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}