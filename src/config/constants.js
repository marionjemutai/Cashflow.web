export const USER_ROLES = ['ADMIN', 'MANAGER', 'CASHIER'];

export const STORES = [
  'Main Store',
  'Westlands Branch',
  'Kisumu Branch',
  'Mombasa Branch',
];

export const INITIAL_USERS = [
  {
    id: 'u1',
    name: 'Marion Wanjiku',
    email: 'marion@cashflow.co.ke',
    role: 'ADMIN',
    store: 'Main Store',
    status: 'Active',
    lastLogin: 'Today, 9:42 AM',
  },
  {
    id: 'u2',
    name: 'Kelvin Otieno',
    email: 'kelvin.otieno@cashflow.co.ke',
    role: 'MANAGER',
    store: 'Westlands Branch',
    status: 'Active',
    lastLogin: 'Yesterday, 4:18 PM',
  },
  {
    id: 'u3',
    name: 'Aisha Njeri',
    email: 'aisha.njeri@cashflow.co.ke',
    role: 'CASHIER',
    store: 'Main Store',
    status: 'Active',
    lastLogin: 'Today, 8:05 AM',
  },
];
