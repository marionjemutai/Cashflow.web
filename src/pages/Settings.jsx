import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../component/ui/layouts/Sidebar';
import TopHeader from '../component/ui/layouts/TopHeader';

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const [businessInfo, setBusinessInfo] = useState({
    name: 'Cashflow Retail Solutions',
    email: 'info@cashflow.com',
    phone: '+254 712 345 678',
    address: '123 Business Street, Nairobi, Kenya',
    taxId: 'A123456789X',
    currency: 'KES',
    timezone: 'Africa/Nairobi'
  });

  const [notifications, setNotifications] = useState({
    emailSales: true,
    emailLowStock: true,
    pushSales: false,
    pushAlerts: true,
    weeklyReport: true
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    sessionTimeout: 30,
    ipWhitelist: []
  });

  const [display, setDisplay] = useState({
    theme: 'light',
    language: 'en',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '12h'
  });

  const handleBusinessInfoChange = (field, value) => {
    setBusinessInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field) => {
    setNotifications(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSecurityChange = (field, value) => {
    setSecurity(prev => ({ ...prev, [field]: value }));
  };

  const handleDisplayChange = (field, value) => {
    setDisplay(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveBusinessInfo = () => {
    alert('Business information saved successfully!');
  };

  const handleSaveNotifications = () => {
    alert('Notification settings saved successfully!');
  };

  const handleSaveSecurity = () => {
    alert('Security settings saved successfully!');
  };

  const handleSaveDisplay = () => {
    alert('Display settings saved successfully!');
  };

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        <TopHeader setSidebarOpen={setSidebarOpen} />
        
        <main className="p-4 sm:p-6 max-w-6xl w-full mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage your business preferences and configurations
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-medium text-slate-600">Settings • All changes are saved automatically</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Business Information</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Update your business details and contact information
                    </p>
                  </div>
                  <button
                    onClick={handleSaveBusinessInfo}
                    className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      value={businessInfo.name}
                      onChange={(e) => handleBusinessInfoChange('name', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={businessInfo.email}
                      onChange={(e) => handleBusinessInfoChange('email', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={businessInfo.phone}
                      onChange={(e) => handleBusinessInfoChange('phone', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Currency
                    </label>
                    <select
                      value={businessInfo.currency}
                      onChange={(e) => handleBusinessInfoChange('currency', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    >
                      <option value="KES">KES (Kenyan Shilling)</option>
                      <option value="USD">USD (US Dollar)</option>
                      <option value="EUR">EUR (Euro)</option>
                      <option value="GBP">GBP (British Pound)</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Business Address
                    </label>
                    <textarea
                      value={businessInfo.address}
                      onChange={(e) => handleBusinessInfoChange('address', e.target.value)}
                      rows="2"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Notifications Card */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Notifications</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Configure how you receive alerts and updates
                    </p>
                  </div>
                  <button
                    onClick={handleSaveNotifications}
                    className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-slate-900">Email Sales Reports</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Receive daily sales reports via email
                      </p>
                    </div>
                    <button
                      onClick={() => handleNotificationChange('emailSales')}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${notifications.emailSales ? 'bg-emerald-600 justify-end' : 'bg-gray-300 justify-start'}`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-slate-900">Low Stock Alerts</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Get notified when inventory runs low
                      </p>
                    </div>
                    <button
                      onClick={() => handleNotificationChange('emailLowStock')}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${notifications.emailLowStock ? 'bg-emerald-600 justify-end' : 'bg-gray-300 justify-start'}`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-slate-900">Push Sales Notifications</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Get real-time sales notifications
                      </p>
                    </div>
                    <button
                      onClick={() => handleNotificationChange('pushSales')}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${notifications.pushSales ? 'bg-emerald-600 justify-end' : 'bg-gray-300 justify-start'}`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-slate-900">System Alerts</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Receive alerts for system issues and maintenance
                      </p>
                    </div>
                    <button
                      onClick={() => handleNotificationChange('pushAlerts')}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${notifications.pushAlerts ? 'bg-emerald-600 justify-end' : 'bg-gray-300 justify-start'}`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-slate-900">Weekly Reports</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Receive comprehensive weekly business reports
                      </p>
                    </div>
                    <button
                      onClick={() => handleNotificationChange('weeklyReport')}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${notifications.weeklyReport ? 'bg-emerald-600 justify-end' : 'bg-gray-300 justify-start'}`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Security</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Manage your account security settings
                    </p>
                  </div>
                  <button
                    onClick={handleSaveSecurity}
                    className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Save
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-slate-900">Two-Factor Authentication</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Add an extra layer of security
                      </p>
                    </div>
                    <button
                      onClick={() => handleSecurityChange('twoFactorAuth', !security.twoFactorAuth)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${security.twoFactorAuth ? 'bg-emerald-600 justify-end' : 'bg-gray-300 justify-start'}`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Session Timeout (minutes)
                    </label>
                    <select
                      value={security.sessionTimeout}
                      onChange={(e) => handleSecurityChange('sessionTimeout', parseInt(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    >
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="60">60 minutes</option>
                      <option value="120">120 minutes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Password Change
                    </label>
                    <button className="w-full px-4 py-2 text-sm font-medium text-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Display</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Customize your interface preferences
                    </p>
                  </div>
                  <button
                    onClick={handleSaveDisplay}
                    className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Save
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Theme
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDisplayChange('theme', 'light')}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${display.theme === 'light' ? 'bg-emerald-100 text-emerald-700 border-emerald-300' : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'}`}
                      >
                        Light
                      </button>
                      <button
                        onClick={() => handleDisplayChange('theme', 'dark')}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${display.theme === 'dark' ? 'bg-slate-800 text-white border-slate-700' : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'}`}
                      >
                        Dark
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Language
                    </label>
                    <select
                      value={display.language}
                      onChange={(e) => handleDisplayChange('language', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    >
                      <option value="en">English</option>
                      <option value="sw">Swahili</option>
                      <option value="fr">French</option>
                      <option value="es">Spanish</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Date Format
                    </label>
                    <select
                      value={display.dateFormat}
                      onChange={(e) => handleDisplayChange('dateFormat', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    >
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Time Format
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDisplayChange('timeFormat', '12h')}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${display.timeFormat === '12h' ? 'bg-emerald-100 text-emerald-700 border-emerald-300' : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'}`}
                      >
                        12-Hour
                      </button>
                      <button
                        onClick={() => handleDisplayChange('timeFormat', '24h')}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${display.timeFormat === '24h' ? 'bg-emerald-100 text-emerald-700 border-emerald-300' : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'}`}
                      >
                        24-Hour
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Export/Import Card */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Data Management</h3>
                
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 text-sm font-medium text-slate-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Export Data
                  </button>

                  <button className="w-full px-4 py-3 text-sm font-medium text-slate-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Import Data
                  </button>

                  <button className="w-full px-4 py-3 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors">
                    Reset All Settings
                  </button>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-medium text-slate-600">Settings Version: 2.1.0</span>
                <span className="text-gray-300">|</span>
                <span>Last updated: Today, 10:30 AM</span>
              </div>
              
              <div className="font-medium text-slate-500">
                Need help? Contact support@cashflow.com
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}