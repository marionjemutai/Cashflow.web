import React, { useState } from 'react';
import Sidebar from '../component/ui/layouts/Sidebar';
import TopHeader from '../component/ui/layouts/TopHeader';
import ProductCard from '../component/ui/pos/ProductCard';
import CartItem from '../component/ui/pos/CartItem';
import OrderSummary from '../component/ui/pos/OrderSummary';

export default function POS() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('products'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
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
    category: "drinks",
    image: "https://www.donnybrookfair.ie/cdn/shop/files/54491472Coca-Cola500mlDonnybrookFairCatering_bc7cdf4a-510a-44ee-a2e1-3207df7ee53b_650x.jpg",
  },
  {
    id: 2,
    name: "Water 500ml",
    price: 40.00,
    unit: "500ml",
    category: "drinks",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTWXR3W6DynIcjzthuH7ajYyMz5JAgaYsA2EJ3XAzaQ&s=10",
  },
  {
    id: 3,
    name: "Bread 400g",
    price: 80.00,
    unit: "400g",
    category: "bakery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQok3HKMOCEyclBfBkW8lyluG7429hRFnVcrHfE9cFiCvwyt9QoGJex9v8&s=10",
  },
  {
    id: 4,
    name: "Milk 500ml",
    price: 70.00,
    unit: "500ml",
    category: "dairy",
    image: "https://greenspoon.co.ke/wp-content/uploads/2024/06/3J2A9343.jpg",
  },
  {
    id: 5,
    name: "Sugar 1kg",
    price: 120.00,
    unit: "1kg",
    category: "groceries",
    image: "https://mybigorder.com/public/uploads/products/photos/cdVX3C2hsV6wlmOZo0gkpvUqdCAF1kS4nujx1uQR.jpeg",
  },
  {
    id: 6,
    name: "Rice 2kg",
    price: 240.00,
    unit: "2kg",
    category: "groceries",
    image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/4806723/2.jpg?6122",
  },
  {
    id: 7,
    name: "Cooking Oil 2L",
    price: 420.00,
    unit: "2L",
    category: "groceries",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNEephhUIlkyS05bmRpRPmG1ZnbkyzGCIcMj0Zp-a4zVeM7PUhxYDzLEa&s=10",
  },
  {
    id: 8,
    name: "Salt 1kg",
    price: 55.00,
    unit: "1kg",
    category: "groceries",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7VKUUvlrlfJv6gJetV3kXiGfON2XzKxHrgtieLEAoBB_ITmOVuhR7nj1&s=10",
  },
  {
    id: 9,
    name: "Tea Leaves 250g",
    price: 180.00,
    unit: "250g",
    category: "beverages",
    image: "https://e-mart.co.ke/image/cache/catalog/0%20backnd%20D-L/eden%20tea%20premium-800x800.PNG",
  },
  {
    id: 10,
    name: "Smokies",
    price: 50.00,
    unit: "1 pc",
    category: "snacks",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9jyekxOFDDDyERnifBnI-YHjzvqdHvusQCLgCB08Eg8PyoGeynBIFweM&s=100",
  },
  {
    id: 11,
    name: "Blue Band Margarine 500g",
    price: 230.00,
    unit: "500g",
    category: "dairy",
    image: "https://m.media-amazon.com/images/I/71Uv-OyzFPL.jpg",
  },
  {
    id: 12,
    name: "Colgate Toothpaste 100ml",
    price: 150.00,
    unit: "100ml",
    category: "personal-care",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92IgIpCmfGXTea1VXQV6KhhKdvO9NqzLcusufMtESMJe2HHeF4htecNQ&s=10",
  },
  {
    id: 13,
    name: "Ice Cream Vanilla 500ml",
    price: 350.00,
    unit: "500ml",
    category: "frozen",
    image: "https://greenspoon.co.ke/wp-content/uploads/2024/07/3J2A2916-1400x933.jpg",
  },
  {
    id: 14,
    name: "Chocolate Bar 100g",
    price: 120.00,
    unit: "100g",
    category: "confectionery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_0P5G7kNJnIKXae_q8TWYBsAFkQjS1c8WKua1YCaCw&s=10",
  },
  {
    id: 15,
    name: "Spaghetti 500g",
    price: 95.00,
    unit: "500g",
    category: "pasta",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdn1qnf5K3vYjuCg-qE0dpEGDfPt1Z93jcEv1lVKTVem_WwQbyf3MhAlY&s=10",
  },
];

  const categories = ['all', ...new Set(mockProducts.map(product => product.category))];
  
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.unit.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        <TopHeader setSidebarOpen={setSidebarOpen} />

        <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 shrink-0">
          <div className="flex items-center gap-4 flex-1 max-w-xl w-full">
            <span className="text-md font-bold text-slate-800 tracking-tight hidden md:inline">POS Products</span>
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
          
          <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full sm:w-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3 ml-0 sm:ml-4">
            <span className="bg-amber-50 text-amber-600 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md hidden sm:inline">
              Offline 
            </span>
            <div className="h-8 w-px bg-gray-100 hidden sm:block" />
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-slate-800">Marion</p>
              <p className="text-[10px] font-semibold text-gray-400">Cashier</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-2 text-xs text-gray-500 flex items-center justify-between">
          <div>
            Showing <span className="font-semibold text-slate-700">{filteredProducts.length}</span> of{' '}
            <span className="font-semibold text-slate-700">{mockProducts.length}</span> products
            {selectedCategory !== 'all' && (
              <span className="ml-2">
                in <span className="font-semibold text-emerald-600">{selectedCategory}</span> category
              </span>
            )}
          </div>
          <div className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
            {filteredProducts.length} items
          </div>
        </div>

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
            {filteredProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <span className="text-4xl mb-3">🔍</span>
                <p className="text-sm font-semibold text-gray-600">No products found</p>
                <p className="text-xs text-gray-400 mt-1">Try a different search or category</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}
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
    </div>
  );
}