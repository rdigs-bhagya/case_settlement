import React from 'react';
import { Send, Clock, AlertTriangle, Mail } from 'lucide-react';
import { useEmails } from '@/contexts/EmailContext';

const stats = [
  { key: 'total', label: 'Total Emails', icon: Mail, color: 'text-primary' },
  { key: 'sent', label: 'Sent', icon: Send, color: 'text-stat-sent' },
  { key: 'pending', label: 'Pending', icon: Clock, color: 'text-stat-pending' },
  { key: 'failed', label: 'Failed', icon: AlertTriangle, color: 'text-stat-failed' },
] as const;

export default function StatsCards() {
  const { stats: emailStats } = useEmails();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.key}
          className="stat-card animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-3xl font-bold mt-1">{emailStats[stat.key]}</p>
            </div>
            <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
