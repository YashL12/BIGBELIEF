import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({ title: "Cookie Policy | BigBelief Solutions", description: "Cookie use on the BigBelief Solutions website.", path: "/cookies" }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Cookie Policy">
      <h2>Current use</h2>
      <p>At present this website does not set advertising or analytics cookies. If analytics is added later, this page and a consent mechanism must be updated before it goes live.</p>
    </LegalPage>
  );
}
