import { Metadata } from "next";
import BackButton from "./BackButton";

export const metadata: Metadata = {
  title: "Privacy Policy | Projectory",
  description: "Learn how Projectory collects and uses your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="relative bg-white text-gray-800 py-16 px-6 sm:px-12 lg:px-32 max-w-5xl mx-auto">
      <BackButton />

      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last Updated: April 22, 2025</p>

      <section className="space-y-6 leading-relaxed">
        <p>
          We value your privacy at <strong>Projectory</strong>. This document outlines what information we collect,
          how we use it, and the choices you have.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
          <p>
            We may collect your name, email address, and any details you share about your project when you contact us or use our services.
            Cookies may be used to gather website usage data for improving user experience.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Respond to inquiries</li>
            <li>Provide development services</li>
            <li>Improve our site and services</li>
          </ul>
          <p className="mt-2">
            We do not sell or share your information with third parties, except when necessary to operate our platform (e.g., web hosting or email services).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Security</h2>
          <p>
            We take reasonable steps to protect your information. However, no method of transmission or storage is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Your Choices</h2>
          <p>
            You may request access to, correction of, or deletion of your data by emailing us at <a className="text-blue-600 underline" href="mailto:projectorysolutions@gmail.com">projectorysolutions@gmail.com</a>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
          <p>
            We use cookies to remember preferences and understand how users interact with our site.
            You can disable cookies in your browser settings.
          </p>
        </div>
      </section>
    </main>
  );
}