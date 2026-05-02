'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  gdprConsent: boolean;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  source?: string;
  userAgent?: string;
  ip?: string;
  notes?: string;
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}

interface PaginationData {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [pagination, setPagination] = useState<PaginationData>({
    page: 1,
    limit: 20,
    total: 0,
    pages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [serviceFilter, setServiceFilter] = useState<string>('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editingStatus, setEditingStatus] = useState<string>('');
  const [editingNotes, setEditingNotes] = useState('');

  // Fetch leads
  const fetchLeads = useCallback(async () => {
    try {
      setLoading(true);
      const apiKey = localStorage.getItem('adminApiKey');
      
      if (!apiKey) {
        setError('Please enter your API key');
        setLoading(false);
        return;
      }

      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        ...(statusFilter && { status: statusFilter }),
        ...(serviceFilter && { service: serviceFilter }),
        ...(search && { search: search }),
      });

      const response = await fetch(`/api/admin/leads?${params}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setLeads(data.data);
        setPagination(data.pagination);
        setError(null);
      } else {
        setError(data.error || 'Failed to fetch leads');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [pagination.page, statusFilter, serviceFilter, search]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  // Update lead status
  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      const apiKey = localStorage.getItem('adminApiKey');
      
      const response = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          id: leadId,
          status: newStatus,
        }),
      });

      if (response.ok) {
        fetchLeads();
        setSelectedLead(null);
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to update status');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to update status');
    }
  };

  // Delete lead
  const deleteLead = async (leadId: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;

    try {
      const apiKey = localStorage.getItem('adminApiKey');
      
      const response = await fetch(`/api/admin/leads?id=${leadId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (response.ok) {
        fetchLeads();
        setSelectedLead(null);
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to delete lead');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to delete lead');
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Service', 'Status', 'Date'];
    const rows = leads.map(lead => [
      lead.name,
      lead.email,
      lead.phone,
      lead.company || '',
      lead.service,
      lead.status,
      new Date(lead.createdAt).toLocaleDateString(),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  // Status badge colors
  const statusColors: Record<string, string> = {
    new: 'bg-blue-100 text-blue-800',
    contacted: 'bg-yellow-100 text-yellow-800',
    qualified: 'bg-purple-100 text-purple-800',
    converted: 'bg-green-100 text-green-800',
    lost: 'bg-red-100 text-red-800',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Lead Management Dashboard</h1>
            <button
              onClick={exportToCSV}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Export CSV
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Name, email, phone..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status Filter
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="converted">Converted</option>
                <option value="lost">Lost</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Filter
              </label>
              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Services</option>
                <option value="MLM Software Development">MLM Software</option>
                <option value="Blockchain Development">Blockchain</option>
                <option value="AI Services">AI Services</option>
                <option value="Mobile App Development">Mobile Apps</option>
                <option value="Web Development">Web Development</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={fetchLeads}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {['new', 'contacted', 'qualified', 'converted', 'lost'].map((status) => (
            <motion.div
              key={status}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg shadow ${statusColors[status]}`}
            >
              <div className="text-2xl font-bold">
                {leads.filter(l => l.status === status).length}
              </div>
              <div className="text-sm capitalize">{status}</div>
            </motion.div>
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Leads Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center">
                      <div className="text-gray-500">Loading leads...</div>
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                      No leads found
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr
                      key={lead._id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        setSelectedLead(lead);
                        setEditingStatus(lead.status);
                        setEditingNotes(lead.notes || '');
                      }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{lead.name}</div>
                        {lead.company && (
                          <div className="text-sm text-gray-500">{lead.company}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{lead.email}</div>
                        <div className="text-sm text-gray-500">{lead.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{lead.service}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            statusColors[lead.status]
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLead(lead);
                            setEditingStatus(lead.status);
                            setEditingNotes(lead.notes || '');
                          }}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          View
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteLead(lead._id);
                          }}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {pagination.pages > 1 && (
            <div className="px-6 py-4 border-t flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing {((pagination.page - 1) * pagination.limit) + 1} to{' '}
                {Math.min(pagination.page * pagination.limit, pagination.total)} of{' '}
                {pagination.total} results
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setPagination(prev => ({ ...prev, page: prev.page - 1 }));
                  }}
                  disabled={pagination.page === 1}
                  className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => {
                    setPagination(prev => ({ ...prev, page: prev.page + 1 }));
                  }}
                  disabled={pagination.page === pagination.pages}
                  className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Lead Details</h2>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Name</label>
                  <div className="text-lg text-gray-900">{selectedLead.name}</div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <div className="text-lg text-gray-900">
                    <a href={`mailto:${selectedLead.email}`} className="text-blue-600 hover:underline">
                      {selectedLead.email}
                    </a>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Phone</label>
                  <div className="text-lg text-gray-900">
                    <a href={`tel:${selectedLead.phone}`} className="text-blue-600 hover:underline">
                      {selectedLead.phone}
                    </a>
                  </div>
                </div>

                {selectedLead.company && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Company</label>
                    <div className="text-lg text-gray-900">{selectedLead.company}</div>
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium text-gray-500">Service</label>
                  <div className="text-lg text-gray-900">{selectedLead.service}</div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Message</label>
                  <div className="text-gray-900 whitespace-pre-wrap">{selectedLead.message}</div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <select
                    value={editingStatus}
                    onChange={(e) => {
                      setEditingStatus(e.target.value);
                      updateLeadStatus(selectedLead._id, e.target.value);
                    }}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="converted">Converted</option>
                    <option value="lost">Lost</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Notes</label>
                  <textarea
                    value={editingNotes}
                    onChange={(e) => setEditingNotes(e.target.value)}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>

                <div className="text-sm text-gray-500">
                  <div>Submitted: {new Date(selectedLead.createdAt).toLocaleString()}</div>
                  {selectedLead.ip && <div>IP: {selectedLead.ip}</div>}
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => {
                    updateLeadStatus(selectedLead._id, editingStatus);
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
