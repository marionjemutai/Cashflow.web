import { useMemo, useState } from 'react';
import { INITIAL_USERS } from '../config/constants';

export function useUsers() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const search = searchTerm.toLowerCase();

      const matchSearch =
        user.name.toLowerCase().includes(search) ||
        user.store.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search);

      const matchRole =
        roleFilter === 'All' ||
        user.role === roleFilter;

      return matchSearch && matchRole;
    });
  }, [users, searchTerm, roleFilter]);

  const addUser = (user) => {
    const addedUser = {
      id: `u${Date.now()}`,
      ...user,
      lastLogin: 'Never',
    };

    setUsers((currentUsers) => [
      addedUser,
      ...currentUsers,
    ]);
  };

  const deleteUser = (id) => {
    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.id !== id)
    );
  };

  return {
    users: filteredUsers,
    totalCount: users.length,
    searchTerm,
    setSearchTerm,
    roleFilter,
    setRoleFilter,
    addUser,
    deleteUser,
  };
}