import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Loader2, Mail, Link, AlertCircle } from 'lucide-react';
import { useEmails } from '@/contexts/EmailContext';
import { toast } from 'sonner';

const FROM_EMAIL = "help@claimyourclaims.com";

export default function ComposeEmail() {
  const [toEmail, setToEmail] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [links, setLinks] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingLinks, setIsLoadingLinks] = useState(true);
  const [status, setStatus] = useState('');
  const { addEmail } = useEmails();
  const navigate = useNavigate();

  // Load allowed links from backend
  useEffect(() => {
    fetch("https://case-9w55.onrender.com/sendMail/links")
      .then((res) => res.json())
      .then((data) => {
        setLinks(data);
        setIsLoadingLinks(false);
      })
      .catch(() => {
        setIsLoadingLinks(false);
        toast.error('Failed to load website links');
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');

    if (!toEmail.includes("@")) {
      setStatus("❌ Invalid Email Address");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    if (!websiteLink) {
      setStatus("❌ Please select a website link");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(
        "https://rm97455zj6.execute-api.us-east-1.amazonaws.com/dev/api/v1/sendEmail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ toEmail, websiteLink }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setStatus("❌ " + data.message);
        addEmail({
          to: toEmail,
          subject: `Website Link: ${websiteLink}`,
          body: `Sent website link to ${toEmail}`,
          status: 'failed',
        });
      } else {
        setStatus("✅ " + data.message);
        addEmail({
          to: toEmail,
          subject: `Website Link: ${websiteLink}`,
          body: `Sent website link to ${toEmail}`,
          status: 'sent',
        });
        toast.success('Email sent successfully!');
        
        // Reset form
        setToEmail('');
        setWebsiteLink('');
      }
    } catch (error) {
      setStatus("❌ Failed to send email");
      addEmail({
        to: toEmail,
        subject: `Website Link: ${websiteLink}`,
        body: `Sent website link to ${toEmail}`,
        status: 'failed',
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="max-w-3xl animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Send Email</h1>
        <p className="text-muted-foreground mt-1">Send website links to users</p>
      </div>

      {/* Status Alert */}
      {status && (
        <div className={`flex items-center gap-2 p-4 rounded-lg mb-6 ${
          status.startsWith('✅') 
            ? 'bg-stat-sent/10 text-stat-sent' 
            : 'bg-destructive/10 text-destructive'
        }`}>
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="font-medium">{status}</span>
        </div>
      )}

      <div className="bg-card rounded-xl border border-border p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* From Email (Display Only) */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              Send From
            </label>
            <div className="form-input bg-muted text-muted-foreground cursor-not-allowed">
              {FROM_EMAIL}
            </div>
          </div>

          {/* To Email */}
          <div className="space-y-2">
            <label htmlFor="toEmail" className="text-sm font-medium flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              Send To (User Email)
            </label>
            <input
              id="toEmail"
              type="email"
              value={toEmail}
              onChange={(e) => setToEmail(e.target.value)}
              className="form-input"
              placeholder="recipient@example.com"
              required
            />
          </div>

          {/* Website Link Select */}
          <div className="space-y-2">
            <label htmlFor="websiteLink" className="text-sm font-medium flex items-center gap-2">
              <Link className="w-4 h-4 text-muted-foreground" />
              Select Website Link
            </label>
            {isLoadingLinks ? (
              <div className="form-input flex items-center gap-2 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                Loading links...
              </div>
            ) : (
              <select
                id="websiteLink"
                value={websiteLink}
                onChange={(e) => setWebsiteLink(e.target.value)}
                className="form-input"
                required
              >
                <option value="">-- Select Website Link --</option>
                {links.map((link) => (
                  <option key={link} value={link}>
                    {link}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={isLoading || isLoadingLinks}
              className="btn-primary flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Email
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
