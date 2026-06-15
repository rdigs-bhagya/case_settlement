import type { Metadata } from "next"
import { CalendarDays, User } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Legal Blogs & Resources | ClaimYourClaims",
  description: "Read our latest blog posts and legal resources about injury claims, settlements, and your rights. Expert insights to help you make informed decisions.",
}


const posts = [
  {
    date: 'July 16, 2024',
    title: 'Missouri Trial Begins: Abbott Faces Allegations Over Infant Formula and NEC Risk',
    excerpt:
      'The first trial against Abbott Laboratories, the manufacturer of Similac baby formula, commenced in St. Louis state court...',
    author: 'Legal Claim Assistance',
    image: '/blog/BLOG-1-CYC.png',
  },
  {
    date: 'May 13, 2024',
    title: 'Johnson & Johnson’s $6.48B Talc Lawsuit Shake-Up: Will It Hold Up?',
    excerpt:
      'Johnson & Johnson has rolled out a $6.48 billion bankruptcy plan aimed at settling talc lawsuits, drawing immediate resistance...',
    author: 'Legal Claim Assistance',
    image: '/blog/BLOG-2-CYC.png',
  },
  {
    date: 'May 13, 2024',
    title: 'Fraudulent Claims Spike in Class Actions and Mass Torts',
    excerpt:
      'Fraudulent activity is on the rise in class action and mass tort claims, despite the growing prevalence of digital payments...',
    author: 'Legal Claim Assistance',
    image: '/blog/BLOG-3-CYC.png',
  },
  {
    date: 'May 13, 2024',
    title: 'Judge Appoints Four Co-Lead Counsel in Ozempic Litigation, Expands Plaintiff Leadership Team',
    excerpt:
      'Judge Pratter appointed new co-lead counsels in one of the most significant pharmaceutical injury cases against diabetes drug makers...',
    author: 'Legal Claim Assistance',
    image: '/images/blog4.jpg',
  },
  {
    date: 'May 5, 2024',
    title: 'Suboxone Litigation Update & Purdue Pharma Bankruptcy Developments',
    excerpt:
      'The JPML has ordered the consolidation of Suboxone dental injury lawsuits in the Northern District of Ohio under Judge Calabrese...',
    author: 'Legal Claim Assistance',
    image: '/images/blog5.jpg',
  },
  {
    date: 'May 5, 2024',
    title: 'Pennsylvania Judge Grants Final Approval to Philips CPAP Settlement',
    excerpt:
      'A federal judge approved a settlement valued at up to $600M concerning recalled Philips CPAP devices that caused economic damages...',
    author: 'Legal Claim Assistance',
    image: '/images/blog6.jpg',
  },
];

export default function BlogPage() {
  return (
    <section className="bg-gray-50">
      {/* Hero Section - Clean & Minimal */}
      <div className="bg-white py-5 text-center border-b border-gray-200 mt-[130px]">
        <div className="max-w-3xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-2xl">
              ⚖️
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold text-primary">
            Legal Claim Assistance Blog
          </h1>
          <p className="mt-4 text-lg text-black">
            Stay updated with the latest news, trials, and settlements in
            class actions and mass torts.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-6 lg:px-16 py-5 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center text-gray-500 text-sm mb-3 gap-4">
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" /> {post.author}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-900 hover:text-primary transition">
                {post.title}
              </h2>
              <p className="mt-1 text-gray-600 flex-1">{post.excerpt}</p>

              <div className="mt-3">
                <a
                  href="#"
                  className="inline-block text-blue-600 font-semibold hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
