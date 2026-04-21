"use client";

export default function PrivacyPolicy() {
  const formatContent = (text: string) => {
    const lines = text.split("\n");

    return lines.map((line, index) => {
      const trimmed = line.trim();

      // Empty line
      if (!trimmed) return <br key={index} />;

      // Headings (exact match)
      const headings = [
        "Information We Collect and How We Collect It",
        "Information Collected Automatically.",
        "Do-Not-Track Signals",
        "How We Use Information",
        "Disclosure of Personal Information",
        "Your Rights and Choices",
        "Protecting Your Information",
        "Data Retention",
        "Links to Third-Party Sites",
        "International Users",
        "Children’s Privacy",
        "Updates to this Privacy Policy",
        "Contact Us",
      ];

      if (headings.includes(trimmed)) {
        return (
          <h2 key={index} className="text-xl font-bold mt-6 mb-2 text-gray-900">
            {trimmed}
          </h2>
        );
      }

      // Sub-headings
      if (trimmed.startsWith("Information You Provide")) {
        return (
          <p key={index} className="font-semibold mt-4">
            {trimmed}
          </p>
        );
      }

      // Bullet points
      if (trimmed.startsWith("●")) {
        return (
          <li key={index} className="ml-6 list-disc text-gray-700">
            {parseLinks(trimmed.replace("●", "").trim())}
          </li>
        );
      }

      // Normal paragraph
      return (
        <p key={index} className="text-gray-700 leading-relaxed">
          {parseLinks(trimmed)}
        </p>
      );
    });
  };

  // Convert URLs + email to clickable
  const parseLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;

    return text
      .split(urlRegex)
      .map((part, i) =>
        urlRegex.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            className="text-blue-600 underline"
          >
            {part}
          </a>
        ) : part
      )
      .map((part, i) =>
        typeof part === "string" && emailRegex.test(part) ? (
          <a
            key={i}
            href={`mailto:${part}`}
            className="text-blue-600 underline"
          >
            {part}
          </a>
        ) : (
          part
        )
      );
  };

  const content = `
This Privacy Policy describes the personal information that Landmark Demand d/b/a Claim Your Claims (hereinafter “Landmark Demand d/b/a Claim Your Claims”, “we”, “us”, or “our”) collects about you, how we use or disclose your information, your rights related to your personal information, and how we secure your information. This Privacy Policy applies to personal information collected, used, or shared by or on behalf of Landmark Demand d/b/a Claim Your Claims, including information collected through our website at https://www.claimyourclaims.com/ and mobile versions of the site (collectively, the “Site”), by email, by phone or other offline method, or anywhere else we display this Privacy Policy (collectively, the “Services”).

This Privacy Policy is supplemental to our Terms of Use. Do not use the Services if you do not agree with this Privacy Policy, the Terms of Use, or any other policies or terms that apply to the Services.

Information We Collect and How We Collect It

Personal information is information that directly or indirectly identifies you or can be used to
identify you as an individual; however, it does not include information we receive in our capacity as a processor or service provider. We collect information in the following ways:

Information You Provide. The personal information we may collect includes:

●	Contact information such as your name, mobile number, email address, physical address, general location, and any other information you may provide us with, either by phone, through a “Contact Us” form, or any other method. This may also include applicable interests and communication preferences.

●	Payment information, such as your name and credit or debit card number. Please note that we use third-party payment processors to process credit card payments made to us. As such, we do not retain any personally identifiable financial information in connection with credit card payments, such as credit card numbers. Rather, all such information is provided directly by you to our third-party processor. The payment processor’s use of your personal information is governed by its privacy notice.

Information Collected from Third Parties. We may receive the same categories of personal
information described above from the following third parties:

●	Social Media: When an individual interacts with the Services through various social media networks, such as when someone “Likes” us on Facebook, or follows us, or shared our content on Facebook or Instagram, we may receive some information about individuals that they permit the social network to share with third parties. The data we receive is dependent upon an individual’s privacy settings with the social network, and may include your profile information, profile picture, gender, username, user ID associated with your social media account, age range, language, country, and any other information you permit the social network to share with third parties. Individuals should always review and, if necessary, adjust their privacy settings on third-party websites and social media networks and services before sharing information, linking, or connecting to other services. We use this information to operate, maintain, and provide you with the features and functionality of the Services, as well as to communicate directly with you, such as to send you email messages about products and services that may be of interest to you.

●	Service Providers: Our service providers that perform services solely on our behalf, such as marketing providers and payment processors, collect personal information and often share some or all of this information with us. The information may include contact information, demographic information, payment information, information about your communications and related activities, and information about your appointments. We may use this information to administer and facilitate the Services, your appointments, and our marketing activities.

Information Collected Automatically.

We may also automatically collect certain personal information when you visit or use the
Services using pixels, cookies, or similar tools. A “cookie” is a small data file stored on your
browser if you visit the Site. We use pixels and cookies to collect information such as your
device type, browser type, and IP address. We also track the content you visit on the Site and the duration on specific pages of the Site to help us improve your access to the Site and enhance the Services. Cookies also enable us to track your general location and similar information that typically remains in aggregate form and does not identify you individually. If such information does identify you, we will treat it as personal information subject to this Privacy Policy. We may also use cookies or pixels to collect data with respect to confirmation that a message has been delivered to you, confirmation that you have read a message, and related information about our digital communications.

You can adjust your browser settings to disable or reject cookies, but if you disable all cookies, you may be unable to access all functionality of the Services. We do not permit third parties to track your online activities over time and across other websites based on your use of the Site.

The Site also uses analytics tools such as Google Analytics, a web analytics service provided by Google, Inc. that uses cookies to help us analyze how users navigate the Site. The information generated by this tool (including IP address) will be transmitted to and stored by Google in aggregate form and used to evaluate use of the Site, compile reports on Site activity, and other services relating to Site usage. You can learn more about Google Analytics and how to opt out here: https://tools.google.com/dlpage/gaoptout.

To learn more about interest-based advertising and how you may be able to opt out of some of this advertising, you may wish to visit the Digital Advertising Alliance’s (DAA) resources and/or the Network Advertising Initiative’s (NAI) online resources, at www.aboutads.info/choices or http://www.networkadvertising.org/choices/. You may also be able to limit interest-based advertising through the settings menu on your mobile device by selecting “limit ad tracking” (iOS) or “opt-out of interest-based ads” (Android). You may also be able to opt out of some, but not all, interest-based advertising served by mobile ad networks by visiting http://youradchoices.com/appchoices and downloading the mobile AppChoices app.

Please note that when you opt out of receiving interest-based advertisements, this does not
mean you will no longer see advertisements from us or on the Services. It means that the
online ads that you do see from DAA program participants should not be based on your
interests. We are not responsible for the effectiveness of, or compliance with, any third parties’ opt-out options or programs, or the accuracy of their statements regarding their programs. In addition, third parties may still use cookies to collect information about your use of the Services, including for analytics and fraud prevention, as well as any other purpose permitted under the DAA’s Principles.

Do-Not-Track Signals

The Site does not currently respond to browser-based “Do Not Track” signals.

How We Use Information

We use your personal information for our business and commercial purposes, including to:

●	Provide the Services and related customer service;

●	Manage the Services and Site;

●	Respond to questions or requests from you, deliver information about the Services, send you text messages (based on your indicated preferences), or otherwise communicate with you;

●	Enhance the Services and Site to address the needs and interests of our customers;

●	Prevent fraud and protect the security of our systems.

●	Conduct research and analysis related to our operations;

●	Identify and analyze how individuals use the Services;

●	To enforce our Terms and Conditions, to resolve disputes, to carry out our obligations and enforce our rights, and to protect our business interests and the interests and rights of third parties;

●	Prevent, investigate, or provide notice of fraud or unlawful or criminal activity;

●	Comply with contractual and legal obligations and requirements;

●	To fulfill any other purpose for which you provide personal information; and

●	Comply with law and law enforcement requirements, or to protect the legal rights, or
health or safety of our customers, employees, or others.

Disclosure of Personal Information

We do not rent or sell your personal information for profit, but when appropriate, may share the categories of your personal information noted above with:

●	Service providers that help us operate our business, including communications services, marketing and advertising providers, web-hosting services, and similar third-party providers.

●	Ad networks and advertising partners, such as social networks, to deliver advertising and personalized content to you on the Services, on other sites and services you may use, and across other devices you may use, as well as provide advertising-related services.

●	Analytics providers to better understand the demographics of our customers, and to personalize, enhance, and improve the Services.

●	A successor entity, to which we reserve the right to sell, rent, disclose, or transfer your personal information, in the event of a corporate merger, consolidation, sale of assets, or other corporate changes to Landmark Demand d/b/a Claim Your Claims.

●	Other third parties as necessary to protect your legal interests, rights, or property; to comply with or to satisfy any law, regulation, or governmental request; to avoid liability; as directed by you or upon your request; or to protect our rights or property or the health or safety of others.

Your Rights and Choices
 
You can choose not to provide us your personal information, but in some cases, we will not be able to provide the Services or respond to your questions or requests without certain information. You also have the following rights and choices with regard to your information and engagement with the Services:

●	Communication Preferences: You can adjust your communication preferences with us at any time by contacting us using the contact information at the bottom of this Privacy Policy. You can also request to be removed from our marketing emails by clicking the “unsubscribe” link in our email messages. You can adjust your preferences for push notifications in the App settings. You can also opt out of our text messaging program by replying “STOP,” “QUIT,” “END,” “CANCEL,” “UNSUBSCRIBE,” or “STOP ALL” to any mobile message from us, as further described in our Text Messaging Terms and Conditions.

●	Updates to Your Information: You can correct or update your information by contacting us using the contact information at the bottom of this Privacy Policy.


Protecting Your Information 

We use physical, administrative, and technical safeguards designed to protect your personal information from unauthorized access, use, or disclose. However, because no measure is ever 100% effective when transmitting information over the Internet, we do not guarantee that your information will be secure from theft, loss, or unauthorized access.

Data Retention

We will usually store the personal information we collected about you for no longer than
necessary to fulfill the purposes for which it was collected, and in accordance with our business interests and applicable law. However, if necessary, we may retain personal information for longer periods of time, until set retention periods expire, for instance, where we are required to do so in accordance with legal, tax, and accounting requirements set forth by law, regulators, or other government authorities.

Links to Third-Party Sites

The Site may include links to third-party websites we think may be of interest to you. Please
note that these websites are independent from the Site and we are not responsible for the
content or privacy practices of such other sites or services. Your use of such third-party sites will be subject to the third-party’s privacy policies.

International Users

Landmark Demand d/b/a Claim Your Claims is located in India. However, the Services are targeted at individuals in the United States. If you are visiting the Services from outside the United States and provide us with personal information, please note that your information will be accessed, transferred, stored and processed by Landmark Demand d/b/a Claim Your Claims in India where the data protection laws may differ from those in the country where you are located. By doing business with us or interacting with the Services, you acknowledge and agree to the transfer of your personal information to India, and understand that such information will be stored and processed in accordance with this Privacy Policy and the laws of the India.

Children’s Privacy

The Services are intended for adults over the age of 16 and are not intended for use by persons under the age of 16. If we learn that we have inadvertently collected personal information from anyone under the age of 16, we will delete it. If you believe that we have collected personal information from anyone under the age of 16, please contact us using one of the methods indicated in the “Contact Us” section below.

Updates to this Privacy Policy

We reserve the right to modify this Privacy Policy at any time, so please review it frequently.
Any updates to this Privacy Policy will be posted on the Services, and we will indicate the last updated date of the changes at the top of the Privacy Policy. Your continued use of the Services means you accept those changes as of the last updated date.

Contact Us

If you have any questions about this Privacy Policy, please email us at help@claimyourclaims.com 

`; // 👈 paste your FULL content here

  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 lg:px-16 mt-[95px]">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg border space-y-3">

          <h1 className="text-3xl font-bold text-gray-900">
            Privacy Policy
          </h1>

          <p className="font-medium">Last Updated Date: 21 April 2026</p>

          <div className="space-y-2 text-sm md:text-base">
            {formatContent(content)}
          </div>

        </div>
      </div>
    </section>
  );
}