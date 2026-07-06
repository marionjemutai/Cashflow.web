import React, { useState } from 'react';
import ProductCard from '../component/ui/pos/ProductCard';
import CartItem from '../component/ui/pos/CartItem';
import OrderSummary from '../component/ui/pos/OrderSummary';

export default function POS() {
  const [activeTab, setActiveTab] = useState('products'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([
    { id: 1, name: 'Coca Cola 500ml', price: 60.00, quantity: 2, image: 'https://www.donnybrookfair.ie/cdn/shop/files/54491472Coca-Cola500mlDonnybrookFairCatering_bc7cdf4a-510a-44ee-a2e1-3207df7ee53b_650x.jpg?v=1764759457' },
    { id: 3, name: 'Bread 400g', price: 80.00, quantity: 1, image: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/219686/219686_main.jpg' },
    { id: 4, name: 'Milk 500ml', price: 70.00, quantity: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGlx8fq4w4ghOt7T_h2XBdJUmbWPjIOa_AgfqSZ6qrWj8JWhZ3QGhThQ&s=10' }
  ]);

const mockProducts = [
  {
    id: 1,
    name: "Coca Cola 500ml",
    price: 60.00,
    unit: "500ml",
    image: "https://www.donnybrookfair.ie/cdn/shop/files/54491472Coca-Cola500mlDonnybrookFairCatering_bc7cdf4a-510a-44ee-a2e1-3207df7ee53b_650x.jpg",
  },
  {
    id: 2,
    name: "Water 500ml",
    price: 40.00,
    unit: "500ml",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJdP4uCaR0rD3v6bzgCPo7gISJi8Nmt-jFe61mdm6vw&s=10",
  },
  {
    id: 3,
    name: "Bread 400g",
    price: 80.00,
    unit: "400g",
    image: "https://www.dplfestive.com/_next/image?url=%2Fimages%2Fnatures-gold-white-bread-varieties.png&w=3840&q=85",
  },
  {
    id: 4,
    name: "Milk 500ml",
    price: 70.00,
    unit: "500ml",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkvsJTsLzTw7Xy9z4PIaD1kXI3pVtT-yWpEp_cW5VxHfzCyc1GOYO15_Nb&s=10",
  },
  {
    id: 5,
    name: "Sugar 1kg",
    price: 120.00,
    unit: "1kg",
    image: "https://mybigorder.com/public/uploads/products/photos/cdVX3C2hsV6wlmOZo0gkpvUqdCAF1kS4nujx1uQR.jpeg",
  },
  {
    id: 6,
    name: "Rice 2kg",
    price: 240.00,
    unit: "2kg",
    image: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/26/4806723/2.jpg?6122",
  },
  {
    id: 7,
    name: "Cooking Oil 2L",
    price: 420.00,
    unit: "2L",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJ0heuUgOElySKSJ5MjKuPr_Hp1bd3l7T70nzXeyJuvGI132u2GeXJsQ&s=10",
  },
  {
    id: 8,
    name: "Salt 1kg",
    price: 55.00,
    unit: "1kg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI8zVeyaCmXzG_gdi7i4nmirDK_0ElCB8TEDjVSgVgTiUSXMmqmIN-io&s=10",
  },
  {
    id: 9,
    name: "Tea Leaves 250g",
    price: 180.00,
    unit: "250g",
    image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/7328723/1.jpg?1671",
  },
  {
    id: 10,
    name: "Smokies",
    price: 50.00,
    unit: "1 pc",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9jyekxOFDDDyERnifBnI-YHjzvqdHvusQCLgCB08Eg8PyoGeynBIFweM&s=10",
  },
  {
    id: 11,
    name: "Blue Band Margarine 500g",
    price: 230.00,
    unit: "500g",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PD1ERF4dVshceTl0WvJs3MmKVDmf8XhQD7NmPr3HiA&s",
  },
  {
    id: 12,
    name: "Colgate Toothpaste 100ml",
    price: 150.00,
    unit: "100ml",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUK9zjGnaMKNmayXriT-9Jba-B0_cmcCsL10B_5TppXw&s=10",
  },
  {
    id: 13,
    name: "Ice Cream Vanilla 500ml",
    price: 350.00,
    unit: "500ml",
    image: "https://cdn.mafrservices.com/pim-content/KEN/media/product/6533/1738149605/6533_main.jpg",
  },
  {
    id: 14,
    name: "Chocolate Bar 100g",
    price: 120.00,
    unit: "100g",
    image: "https://i.pinimg.com/736x/bb/a7/77/bba77710b82f2089b7c954f71fba148f.jpg",
  },
  {
    id: 15,
    name: "Spaghetti 500g",
    price: 95.00,
    unit: "500g",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdn1qnf5K3vYjuCg-qE0dpEGDfPt1Z93jcEv1lVKTVem_WwQbyf3MhAlY&s=10",
  },
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
          <span className="text-md font-bold text-slate-800 tracking-tight hidden md:inline">POS proucts</span>
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
            Offline 
          </span>
          <div className="h-8 w-px bg-gray-100 hidden sm:block" />
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-800">Marion</p>
            <p className="text-[10px] font-semibold text-gray-400">Cashier</p>
          </div>
        </div>
      </header>
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
      <div className="flex-1 flex overflow-hidden">
        
        <main className={`flex-1 overflow-y-auto p-4 sm:p-6 ${activeTab === 'products' ? 'block' : 'hidden lg:block'}`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {mockProducts.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </main>

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

          <OrderSummary cart={cart} />
        </aside>

      </div>
    </div>
  );
}