import { useState, useMemo } from 'react';

const INITIAL_DATA = [
  {
    id: '1',
    name: 'Terminal 01',
    store: 'Main Store',
    status: 'Online',
    lastSeen: '2 mins ago',
    linked: true,
  },
  {
    id: '2',
    name: 'Terminal 02',
    store: 'Main Store',
    status: 'Offline',
    lastSeen: '2 hours ago',
    linked: true,
  },
  {
    id: '3',
    name: 'Westlands T01',
    store: 'Westlands Branch',
    status: 'Online',
    lastSeen: '5 mins ago',
    linked: true,
  },
  {
    id: '4',
    name: 'Kisumu T01',
    store: 'Kisumu Branch',
    status: 'Offline',
    lastSeen: '1 day ago',
    linked: false,
  },
  {
    id: '5',
    name: 'Mombasa T01',
    store: 'Mombasa Branch',
    status: 'Online',
    lastSeen: '10 mins ago',
    linked: true,
  },
];

export function useDevices() {
  const [devices, setDevices] = useState(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredDevices = useMemo(() => {
    return devices.filter((device) => {
      const matchesSearch =
        device.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        device.store
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === 'All' ||
        device.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [devices, searchTerm, statusFilter]);

  const addDevice = (newDevice) => {
    setDevices((prev) => [
      {
        ...newDevice,
        id: Date.now().toString(),
      },
      ...prev,
    ]);
  };

  const deleteDevice = (id) => {
    setDevices((prev) =>
      prev.filter((device) => device.id !== id)
    );
  };

  const toggleLinkDevice = (id) => {
    setDevices((prev) =>
      prev.map((device) =>
        device.id === id
          ? {
              ...device,
              linked: !device.linked,
            }
          : device
      )
    );
  };

  return {
    devices: filteredDevices,
    totalCount: devices.length,

    searchTerm,
    setSearchTerm,

    statusFilter,
    setStatusFilter,

    addDevice,
    deleteDevice,
    toggleLinkDevice,
  };
}