import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({ title: "Privacy Policy | BigBelief Solutions", description: "How BigBelief Solutions handles information submitted through this website.", path: "/privacy" }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <h2>Information we receive</h2>
      <p>When you contact us through the website, we receive the details you choose to submit: name, company, email, phone and your message.</p>
      <h2>How we use it</h2>
      <p>We use these details only to respond to your enquiry. This draft does not yet describe analytics, retention periods or processors; complete these before launch.</p>
    </LegalPage>
  );
}
