import React, { useState } from 'react';
import Sidebar from '../component/ui/layouts/Sidebar';
import TopHeader from '../component/ui/layouts/TopHeader';
import InventoryFilters from '../component/ui/inventory/InventoryFilters';
import InventoryTable from '../component/ui/inventory/InventoryTable';
import InventoryCardList from '../component/ui/inventory/InventoryCardList';
import ProductModal from '../component/ui/inventory/ProductModal';

export default function Inventory() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [mockInventory, setMockInventory] = useState(() => {
    // Generate initial inventory
    const categories = ['Drinks', 'Bakery', 'Dairy', 'Groceries', 'Frozen', 'Confectionery', 'Pasta', 'Snacks', 'Beverages', 'Personal Care'];
    const statuses = ['Active', 'Low Stock', 'Out of Stock', 'Discontinued'];
    const products = [
      'Coca Cola 500ml', 'Water 500ml', 'Bread 400g', 'Milk 500ml', 'Sugar 1kg', 'Rice 2kg', 
      'Cooking Oil 1L', 'Salt 1kg', 'Tea Leaves 250g', 'Smokies', 'Blue Band Margarine 500g',
      'Colgate Toothpaste 100ml', 'Ice Cream Vanilla 500ml', 'Chocolate Bar 100g', 'Spaghetti 500g'
    ];

    const initialInventory = [];
    
    for (let i = 1; i <= 100; i++) {
      const productIndex = (i - 1) % products.length;
      const categoryIndex = (i - 1) % categories.length;
      const statusIndex = (i - 1) % statuses.length;
      
      const basePrice = [40, 60, 80, 120, 240, 320, 55, 180, 50, 230, 150, 350, 120, 95][productIndex % 14] || 100;
      const price = basePrice + (i % 50);
      const stock = [150, 200, 35, 28, 80, 18, 25, 42, 65, 30][productIndex % 10] || 50;
      
      initialInventory.push({
        id: i,
        name: `${products[productIndex]} ${i <= products.length ? '' : `Variant ${Math.floor(i / products.length) + 1}`}`,
        sku: `SKU${String(i).padStart(5, '0')}`,
        category: categories[categoryIndex],
        price: price,
        stock: stock - (i % 20),
        status: statuses[statusIndex],
      });
    }
    
    return initialInventory;
  });
  
  const itemsPerPage = 10;

  // Filter items based on search
  const filteredItems = mockInventory.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Action Functions
  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowProductModal(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowProductModal(true);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product? This action cannot be undone.')) {
      setMockInventory(prev => prev.filter(item => item.id !== productId));
    }
  };

  const handleSaveProduct = (productData, productId) => {
    if (productId) {
      // Update existing product
      setMockInventory(prev => prev.map(item => 
        item.id === productId ? { ...item, ...productData, id: productId } : item
      ));
    } else {
      // Add new product
      const newId = Math.max(...mockInventory.map(item => item.id)) + 1;
      const newSku = `SKU${String(newId).padStart(5, '0')}`;
      setMockInventory(prev => [
        ...prev,
        {
          ...productData,
          id: newId,
          sku: productData.sku || newSku,
        }
      ]);
    }
  };

  const handleCloseModal = () => {
    setShowProductModal(false);
    setEditingProduct(null);
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);
  
  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      if (currentPage <= 2) {
        end = 4;
      }
      
      if (currentPage >= totalPages - 1) {
        start = totalPages - 3;
      }
      
      for (let i = start; i <= end; i++) {
        if (i > 1 && i < totalPages) {
          pageNumbers.push(i);
        }
      }
      
      if (end < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  const handlePageChange = (page) => {
    if (page === '...') return;
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        <TopHeader setSidebarOpen={setSidebarOpen} />

        <main className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto w-full space-y-5">
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-black text-slate-900 tracking-tight">Inventory</h1>
              <p className="text-xs text-gray-400 mt-0.5 font-medium">Manage stock metrics, pricing structure, and items SKU logs.</p>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-white border border-gray-100 px-3 py-1.5 rounded-xl shadow-sm hidden sm:inline">
              Total Products: <span className="text-emerald-600">{mockInventory.length}</span>
            </span>
          </div>

          <InventoryFilters 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
            onAddProduct={handleAddProduct}
          />

          {/* Current Page Info */}
          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <div className="text-sm text-gray-600">
                Showing <span className="font-semibold text-slate-900">{startIndex + 1}-{Math.min(endIndex, filteredItems.length)}</span> of{' '}
                <span className="font-semibold text-slate-900">{filteredItems.length}</span> filtered products
                {searchQuery && (
                  <span className="ml-2 text-emerald-600 font-medium">
                    (Search: "{searchQuery}")
                  </span>
                )}
              </div>
              <div className="text-xs font-medium text-gray-500">
                Page <span className="font-bold text-emerald-600">{currentPage}</span> of{' '}
                <span className="font-bold text-slate-700">{totalPages}</span>
              </div>
            </div>
          </div>

          <InventoryTable 
            items={currentItems} 
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
          <InventoryCardList 
            items={currentItems} 
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs font-medium text-gray-400">
            <div className="text-sm">
              <span className="font-semibold text-slate-700">{filteredItems.length}</span> products found
              {searchQuery && ` for "${searchQuery}"`}
            </div>
            
            <div className="flex items-center bg-white border border-gray-100 rounded-xl p-1 shadow-sm text-slate-700">
              {/* Previous Button */}
              <button 
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-2.5 py-1.5 rounded-lg transition-colors ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-slate-50'}`}
              >
                ◀
              </button>
              
              {/* Page Numbers */}
              {getPageNumbers().map((pageNum, index) => (
                <React.Fragment key={index}>
                  {pageNum === '...' ? (
                    <span className="px-2 text-gray-300">...</span>
                  ) : (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-3 py-1.5 rounded-lg transition-colors ${
                        currentPage === pageNum
                          ? 'text-emerald-600 font-bold bg-emerald-50'
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  )}
                </React.Fragment>
              ))}
              
              {/* Next Button */}
              <button 
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-2.5 py-1.5 rounded-lg transition-colors ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-slate-50'}`}
              >
                ▶
              </button>
            </div>
          </div>

        </main>
      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={showProductModal}
        onClose={handleCloseModal}
        onSave={handleSaveProduct}
        product={editingProduct}
      />
    </div>
  );
}