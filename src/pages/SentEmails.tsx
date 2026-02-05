import React, { useState } from 'react';
import { useEmails, Email } from '@/contexts/EmailContext';
import { CheckCircle2, Clock, XCircle, Search, Mail } from 'lucide-react';
import { format } from 'date-fns';

const statusConfig = {
  sent: { icon: CheckCircle2, label: 'Sent', className: 'text-stat-sent bg-stat-sent/10' },
  pending: { icon: Clock, label: 'Pending', className: 'text-stat-pending bg-stat-pending/10' },
  failed: { icon: XCircle, label: 'Failed', className: 'text-stat-failed bg-stat-failed/10' },
};

export default function SentEmails() {
  const { emails } = useEmails();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<Email['status'] | 'all'>('all');

  const filteredEmails = emails.filter((email) => {
    const matchesSearch =
      email.to.toLowerCase().includes(search.toLowerCase()) ||
      email.subject.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || email.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Sent Emails</h1>
        <p className="text-muted-foreground mt-1">View all your sent emails</p>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-input pl-10"
              placeholder="Search by recipient or subject..."
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as Email['status'] | 'all')}
            className="form-input w-full sm:w-40"
          >
            <option value="all">All Status</option>
            <option value="sent">Sent</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        {filteredEmails.length === 0 ? (
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
              <Mail className="w-6 h-6 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">
              {emails.length === 0
                ? 'No emails sent yet'
                : 'No emails match your search'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-table-header">
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                    Recipient
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                    Subject
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredEmails.map((email) => {
                  const status = statusConfig[email.status];
                  const StatusIcon = status.icon;

                  return (
                    <tr key={email.id} className="email-row">
                      <td className="px-4 py-3">
                        <span className="font-medium">{email.to}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-muted-foreground">{email.subject}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.className}`}
                        >
                          <StatusIcon className="w-3.5 h-3.5" />
                          {status.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground whitespace-nowrap">
                        {format(email.sentAt, 'MMM d, yyyy h:mm a')}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
