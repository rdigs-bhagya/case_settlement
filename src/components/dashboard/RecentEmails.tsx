import React from 'react';
import { useEmails, Email } from '@/contexts/EmailContext';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';
import { format } from 'date-fns';

const statusConfig = {
  sent: { icon: CheckCircle2, label: 'Sent', className: 'text-stat-sent bg-stat-sent/10' },
  pending: { icon: Clock, label: 'Pending', className: 'text-stat-pending bg-stat-pending/10' },
  failed: { icon: XCircle, label: 'Failed', className: 'text-stat-failed bg-stat-failed/10' },
};

export default function RecentEmails() {
  const { emails } = useEmails();
  const recentEmails = emails.slice(0, 5);

  if (recentEmails.length === 0) {
    return (
      <div className="bg-card rounded-xl border border-border p-8 text-center">
        <p className="text-muted-foreground">No emails sent yet. Start by composing one!</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold">Recent Emails</h3>
      </div>
      <div className="divide-y divide-border">
        {recentEmails.map((email) => {
          const status = statusConfig[email.status];
          const StatusIcon = status.icon;

          return (
            <div key={email.id} className="email-row p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{email.subject}</p>
                  <p className="text-sm text-muted-foreground truncate">To: {email.to}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.className}`}>
                    <StatusIcon className="w-3.5 h-3.5" />
                    {status.label}
                  </span>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {format(email.sentAt, 'MMM d, h:mm a')}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
