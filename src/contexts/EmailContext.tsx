import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface Email {
  id: string;
  to: string;
  subject: string;
  body: string;
  status: 'sent' | 'pending' | 'failed';
  sentAt: Date;
}

interface EmailContextType {
  emails: Email[];
  addEmail: (email: Omit<Email, 'id' | 'sentAt'>) => void;
  stats: {
    total: number;
    sent: number;
    pending: number;
    failed: number;
  };
}

const EmailContext = createContext<EmailContextType | undefined>(undefined);

export function EmailProvider({ children }: { children: ReactNode }) {
  const [emails, setEmails] = useState<Email[]>(() => {
    const saved = localStorage.getItem('sentEmails');
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.map((e: Email) => ({ ...e, sentAt: new Date(e.sentAt) }));
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('sentEmails', JSON.stringify(emails));
  }, [emails]);

  const addEmail = (emailData: Omit<Email, 'id' | 'sentAt'>) => {
    const newEmail: Email = {
      ...emailData,
      id: crypto.randomUUID(),
      sentAt: new Date(),
    };
    setEmails((prev) => [newEmail, ...prev]);
  };

  const stats = {
    total: emails.length,
    sent: emails.filter((e) => e.status === 'sent').length,
    pending: emails.filter((e) => e.status === 'pending').length,
    failed: emails.filter((e) => e.status === 'failed').length,
  };

  return (
    <EmailContext.Provider value={{ emails, addEmail, stats }}>
      {children}
    </EmailContext.Provider>
  );
}

export function useEmails() {
  const context = useContext(EmailContext);
  if (context === undefined) {
    throw new Error('useEmails must be used within an EmailProvider');
  }
  return context;
}
