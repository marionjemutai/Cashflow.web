import React, { useRef } from 'react';

export default function ReceiptModal({ isOpen, onClose, cart, total, tax, subtotal, onPrintComplete }) {
  const receiptRef = useRef(null);

  const handlePrint = () => {
    if (receiptRef.current) {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Receipt - CashFlow Gateway</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
            body {
              font-family: 'JetBrains Mono', monospace;
              margin: 0;
              padding: 20px;
              background: white;
              color: #000;
              font-size: 12px;
              line-height: 1.4;
            }
            .receipt {
              max-width: 300px;
              margin: 0 auto;
            }
            .header {
              text-align: center;
              margin-bottom: 15px;
              border-bottom: 1px dashed #000;
              padding-bottom: 10px;
            }
            .store-name {
              font-weight: 600;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .store-info {
              font-size: 10px;
              color: #666;
              margin-top: 2px;
            }
            .date-time {
              font-size: 10px;
              margin-top: 5px;
              color: #666;
            }
            .items-table {
              width: 100%;
              border-collapse: collapse;
              margin: 10px 0;
            }
            .items-table th {
              text-align: left;
              font-weight: 600;
              border-bottom: 1px solid #000;
              padding: 5px 0;
            }
            .items-table td {
              padding: 3px 0;
              border-bottom: 1px dotted #ddd;
            }
            .items-table .qty {
              text-align: center;
              width: 40px;
            }
            .items-table .price {
              text-align: right;
              width: 60px;
            }
            .items-table .total {
              text-align: right;
              width: 70px;
            }
            .summary {
              margin-top: 15px;
              border-top: 2px solid #000;
              padding-top: 10px;
            }
            .summary-row {
              display: flex;
              justify-content: space-between;
              margin: 3px 0;
            }
            .summary-row.total {
              font-weight: 600;
              font-size: 14px;
              margin-top: 8px;
              border-top: 1px solid #000;
              padding-top: 8px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 10px;
              color: #666;
              border-top: 1px dashed #000;
              padding-top: 10px;
            }
            .barcode {
              text-align: center;
              margin: 15px 0;
              font-family: monospace;
              letter-spacing: 1px;
            }
            .thank-you {
              text-align: center;
              margin-top: 15px;
              font-weight: 600;
            }
            @media print {
              body {
                padding: 0;
              }
              .no-print {
                display: none !important;
              }
            }
          </style>
        </head>
        <body>
          <div class="receipt">
            ${receiptRef.current.innerHTML}
          </div>
          <script>
            window.onload = function() {
              window.print();
              setTimeout(() => window.close(), 1000);
            };
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const formatDate = () => {
    const now = new Date();
    return now.toLocaleDateString('en-KE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const generateReceiptNumber = () => {
    return 'REC-' + Date.now().toString().slice(-8);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <h3 className="text-lg font-bold">Sales Receipt</h3>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 text-xl"
            >
              ×
            </button>
          </div>

          {/* Receipt Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <div ref={receiptRef} className="bg-white p-4 border border-gray-200 rounded-lg">
              {/* Store Header */}
              <div className="text-center mb-4 pb-3 border-b border-dashed border-gray-300">
                <div className="text-lg font-bold text-slate-900 uppercase tracking-wider">CASHFLOW GATEWAY</div>
                <div className="text-xs text-gray-600 mt-1">Main Store • Nairobi, Kenya</div>
                <div className="text-xs text-gray-600">Tel: +254 700 000 000</div>
                <div className="text-xs text-gray-500 mt-2">VAT No: P0512345678</div>
              </div>

              {/* Receipt Details */}
              <div className="text-xs text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Receipt No:</span>
                  <span className="font-semibold">{generateReceiptNumber()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date & Time:</span>
                  <span>{formatDate()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cashier:</span>
                  <span>Marion</span>
                </div>
                <div className="flex justify-between">
                  <span>Terminal:</span>
                  <span>POS-01</span>
                </div>
              </div>

              {/* Items Table */}
              <div className="border-t border-b border-gray-300 py-2">
                <div className="grid grid-cols-12 text-xs font-semibold text-gray-700 pb-1">
                  <div className="col-span-5">Item</div>
                  <div className="col-span-3 text-center">Qty</div>
                  <div className="col-span-2 text-right">Price</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>
                
                {cart.map((item, index) => (
                  <div key={index} className="grid grid-cols-12 text-xs py-1 border-t border-dashed border-gray-100">
                    <div className="col-span-5 truncate">{item.name}</div>
                    <div className="col-span-3 text-center">{item.quantity}</div>
                    <div className="col-span-2 text-right">KSh {item.price.toFixed(2)}</div>
                    <div className="col-span-2 text-right font-medium">KSh {(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-4 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">KSh {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">VAT (16%):</span>
                  <span className="font-medium">KSh {tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-300">
                  <span className="font-bold text-slate-900">Total:</span>
                  <span className="font-bold text-lg text-emerald-600">KSh {total.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mt-4 pt-3 border-t border-dashed border-gray-300">
                <div className="text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Payment Method:</span>
                    <span className="font-semibold">CASH</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Amount Tendered:</span>
                    <span className="font-semibold">KSh {total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Change:</span>
                    <span className="font-semibold">KSh 0.00</span>
                  </div>
                </div>
              </div>

              {/* Barcode */}
              <div className="mt-4 text-center">
                <div className="text-xs font-mono tracking-wider">
                  {generateReceiptNumber().replace('REC-', '')}
                </div>
                <div className="text-[8px] text-gray-500 mt-1">Transaction ID</div>
              </div>

              {/* Footer */}
              <div className="mt-6 text-center text-xs text-gray-500">
                <div>Thank you for shopping with us!</div>
                <div className="mt-1">Goods sold are not returnable</div>
                <div className="mt-2 text-[10px]">This is a computer generated receipt</div>
                <div className="text-[10px]">No signature required</div>
              </div>
            </div>

            {/* Print Instructions */}
            <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <div className="text-xs text-amber-800">
                <div className="font-semibold mb-1">💡 Printing Instructions:</div>
                <div>1. Click "Print Receipt" below</div>
                <div>2. A new window will open with the receipt</div>
                <div>3. Use your browser's print dialog (Ctrl+P)</div>
                <div>4. Select your receipt printer</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 border-t border-gray-200 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2.5 rounded-lg transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handlePrint}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg shadow-md shadow-emerald-600/20 transition-colors text-sm"
            >
              🖨️ Print Receipt
            </button>
          </div>
        </div>
      </div>
    </>
  );
}