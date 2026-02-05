import React from 'react';
import StatsCards from '@/components/dashboard/StatsCards';
import RecentEmails from '@/components/dashboard/RecentEmails';
import { useAuth } from '@/contexts/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Welcome back, {user?.name?.split(' ')[0]}!</h1>
        <p className="text-muted-foreground mt-1">Here's an overview of your email activity</p>
      </div>

      <StatsCards />

      <RecentEmails />
    </div>
  );
}
