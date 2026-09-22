import React, { useState } from 'react';

import { Button } from './Button';

import {
  Smartphone,
  X,
} from 'lucide-react';

export function RegisterDeviceModal({
  isOpen,
  onClose,
  onRegister,
}) {
  const [name, setName] = useState('');
  const [store, setStore] = useState('Main Store');
  const [status, setStatus] = useState('Online');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    onRegister({
      name,
      store,
      status,
      lastSeen: 'Just now',
      linked: true,
    });

    setName('');
    setStore('Main Store');
    setStatus('Online');

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
        <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Smartphone
              className="text-emerald-600"
              size={20}
            />

            <h3 className="text-lg font-bold text-slate-900">
              Register Device
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
              Device Name
            </label>

            <input
              type="text"
              required
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="e.g. Westlands Terminal 02"
              className="w-full px-3.5 py-2 border rounded-xl text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
              Store Branch
            </label>

            <select
              value={store}
              onChange={(e) =>
                setStore(e.target.value)
              }
              className="w-full px-3.5 py-2 border rounded-xl text-sm"
            >
              <option value="Main Store">
                Main Store
              </option>

              <option value="Westlands Branch">
                Westlands Branch
              </option>

              <option value="Kisumu Branch">
                Kisumu Branch
              </option>

              <option value="Mombasa Branch">
                Mombasa Branch
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
              Status
            </label>

            <div className="grid grid-cols-2 gap-3">
              {['Online', 'Offline'].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() =>
                    setStatus(item)
                  }
                  className={`py-2 rounded-xl text-xs font-semibold border transition ${
                    status === item
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300 ring-2 ring-emerald-500/20'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="primary"
            >
              Register Device
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}