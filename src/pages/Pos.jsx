import React, { useState } from 'react';
import ProductCard from '../component/ui/pos/ProductCard';
import CartItem from '../component/ui/pos/CartItem';
import OrderSummary from '../component/ui/pos/OrderSummary';

export default function POS() {
  const [activeTab, setActiveTab] = useState('products'); // For responsive mobile tab switching
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([
    { id: 1, name: 'Coca Cola 500ml', price: 60.00, quantity: 2, image: '🥤' },
    { id: 3, name: 'Bread 400g', price: 80.00, quantity: 1, image: '🍞' },
    { id: 4, name: 'Milk 500ml', price: 70.00, quantity: 1, image: '🥛' }
  ]);

  const mockProducts = [
    { id: 1, name: 'Coca Cola 500ml', price: 60.00, unit: '500ml', image: '🥤' },
    { id: 2, name: 'Water 500ml', price: 40.00, unit: '500ml', image: '💧' },
    { id: 3, name: 'Bread 400g', price: 80.00, unit: '400g', image: '🍞' },
    { id: 4, name: 'Milk 500ml', price: 70.00, unit: '500ml', image: '🥛' },
    { id: 5, name: 'Sugar 1kg', price: 120.00, unit: '1kg', image: '🍚' },
    { id: 6, name: 'Rice 2kg', price: 240.00, unit: '2kg', image: '🌾' },
  ];

  const handleAddToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const handleRemoveItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="h-screen w-full bg-[#F8FAFC] flex flex-col overflow-hidden font-sans">
      
      <header className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <span className="text-md font-bold text-slate-800 tracking-tight hidden md:inline">POS Mode</span>
          <div className="relative w-full">
            <input 
              type="text"
              placeholder="Search products by name, barcode or SKU..."
              className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Connection Offline/Online Indicators */}
        <div className="flex items-center gap-3 ml-4">
          <span className="bg-amber-50 text-amber-600 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md hidden sm:inline">
            Offline Mode Enabled
          </span>
          <div className="h-8 w-px bg-gray-100 hidden sm:block" />
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-800">Marion</p>
            <p className="text-[10px] font-semibold text-gray-400">Cashier</p>
          </div>
        </div>
      </header>

      {/* Responsive Dual Action Switching Tabs for Mobile/Tablet Viewports */}
      <div className="flex border-b border-gray-100 bg-white lg:hidden shrink-0">
        <button 
          onClick={() => setActiveTab('products')}
          className={`flex-1 py-3 text-center text-xs font-bold tracking-wide border-b-2 transition-colors ${activeTab === 'products' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-400'}`}
        >
          Products List
        </button>
        <button 
          onClick={() => setActiveTab('cart')}
          className={`flex-1 py-3 text-center text-xs font-bold tracking-wide border-b-2 transition-colors flex justify-center items-center gap-1.5 ${activeTab === 'cart' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-400'}`}
        >
          Cart Panel ({totalItemsCount})
        </button>
      </div>

      {/* Workspace Split Content Frame */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Side: Product Grid Area */}
        <main className={`flex-1 overflow-y-auto p-4 sm:p-6 ${activeTab === 'products' ? 'block' : 'hidden lg:block'}`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
            {mockProducts.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </main>

        {/* Right Side: Active Cart Drawer Pane */}
        <aside className={`w-full lg:w-[380px] xl:w-[420px] bg-white border-l border-gray-100 flex flex-col p-4 sm:p-5 h-full ${activeTab === 'cart' ? 'block' : 'hidden lg:flex'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 shrink-0">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              Cart <span className="bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded-full">{totalItemsCount}</span>
            </h3>
            <button 
              onClick={() => setCart([])}
              className="text-xs font-semibold text-rose-500 hover:text-rose-600 transition-colors"
            >
              Clear All
            </button>
          </div>

          {/* Scrolling Cart Row Stack Container */}
          <div className="flex-1 overflow-y-auto my-3 divide-y divide-gray-50 pr-1">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <span className="text-3xl mb-2">🛒</span>
                <p className="text-xs font-semibold text-gray-400">Your cart looks empty</p>
              </div>
            ) : (
              cart.map(item => (
                <CartItem 
                  key={item.id}
                  item={item}
                  onUpdateQty={handleUpdateQty}
                  onRemove={handleRemoveItem}
                />
              ))
            )}
          </div>

          {/* Pricing Calculation Summary Module */}
          <OrderSummary cart={cart} />
        </aside>

      </div>
    </div>
  );
}