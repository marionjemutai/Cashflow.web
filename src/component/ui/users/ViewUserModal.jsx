import React from 'react';
import Modal from '../Modal';
import Button from './Button';

export default function ViewUserModal({
  user,
  onClose,
}) {
  if (!user) return null;

  return (
    <Modal
      isOpen={Boolean(user)}
      onClose={onClose}
      title="User Profile Details"
    >
      <div className="space-y-3 text-sm">
        <InfoRow
          label="Full Name"
          value={user.name}
        />

        <InfoRow
          label="Email"
          value={user.email}
        />

        <InfoRow
          label="Role"
          value={user.role}
        />

        <InfoRow
          label="Assigned Branch"
          value={user.store}
        />

        <InfoRow
          label="Last Login"
          value={user.lastLogin}
        />
      </div>

      <div className="pt-4 flex justify-end">
        <Button
          variant="dark"
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4 p-3 bg-slate-50 rounded-xl">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-semibold text-slate-800 text-right">
        {value}
      </span>
    </div>
  );
}