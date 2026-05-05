"use client";

import InfoPageLayout from "@/components/InfoPageLayout";

export default function FindProfessionalPage() {
  return (
    <InfoPageLayout
      title="Find Trusted Professionals"
      subtitle="Connect with verified experts near you in minutes"
    >
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          TipTop Shine helps you connect with background-checked and verified professionals
          for all your home and business needs.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Fast matching with local experts</li>
          <li>Verified & trusted professionals</li>
          <li>Free quotes in minutes</li>
          <li>No hidden charges</li>
        </ul>
      </div>
    </InfoPageLayout>
  );
}