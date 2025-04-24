import { Metadata } from "next";
import BackButton from "./BackButton1";

export const metadata: Metadata = {
  title: "Terms of Service | Projectory",
  description: "Understand the terms of using Projectory's services.",
};

export default function TermsOfService() {
  return (
    <main className="relative bg-white text-gray-800 py-16 px-6 sm:px-12 lg:px-32 max-w-5xl mx-auto">
      <BackButton />

      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-10">Last Updated: April 22, 2025</p>

      <section className="space-y-6 leading-relaxed">
        <p>By using Projectory’s services or website, you agree to the following terms.</p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <p>
            Projectory offers custom software solutions, app development, AI/ML consulting, and other technical services
            tailored for students, startups, and businesses.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Your Responsibilities</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide accurate and complete information</li>
            <li>Use our services lawfully</li>
            <li>Refrain from misuse of our platform</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Payments & Refunds</h2>
          <p>
            Pricing is communicated upfront. Due to the custom nature of our services, refunds are typically not available
            once work has started—unless pre-agreed in writing.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Ownership</h2>
          <p>
            You retain full ownership of the final deliverables. With your consent, we may feature your project in our portfolio.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Confidentiality</h2>
          <p>
            Any project files, documents, or ideas shared with us are kept confidential and are never disclosed without your consent.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Liability</h2>
          <p>
            While we strive to deliver high-quality work, Projectory is not responsible for indirect damages or third-party technical failures.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Changes to These Terms</h2>
          <p>
            We may revise these terms periodically. The latest version will always be available on our website.
          </p>
        </div>
      </section>
    </main>
  );
}