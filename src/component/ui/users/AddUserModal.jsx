import React, { useState } from 'react';
import { Users } from 'lucide-react';

import Modal from '../Modal';
import Input from './Input';
import Button from './Button';

import {
  USER_ROLES,
  STORES,
} from '../../../config/constants';

export default function AddUserModal({
  isOpen,
  onClose,
  onAdd,
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: 'CASHIER',
    store: 'Main Store',
    status: 'Active',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) return;

    onAdd(form);

    setForm({
      name: '',
      email: '',
      role: 'CASHIER',
      store: 'Main Store',
      status: 'Active',
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New User"
      icon={Users}
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <Input
          label="Full Name"
          required
          placeholder="e.g. Kelvin Otieno"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <Input
          label="Email Address"
          type="email"
          required
          placeholder="kelvin.otieno@cashflow.co.ke"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
              Role
            </label>

            <select
              value={form.role}
              onChange={(e) =>
                setForm({
                  ...form,
                  role: e.target.value,
                })
              }
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
            >
              {USER_ROLES.map((role) => (
                <option
                  key={role}
                  value={role}
                >
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
              Store Branch
            </label>

            <select
              value={form.store}
              onChange={(e) =>
                setForm({
                  ...form,
                  store: e.target.value,
                })
              }
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
            >
              {STORES.map((store) => (
                <option
                  key={store}
                  value={store}
                >
                  {store}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button type="submit">
            Save User
          </Button>
        </div>
      </form>
    </Modal>
  );
}