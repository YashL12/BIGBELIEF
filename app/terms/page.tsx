import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({ title: "Terms | BigBelief Solutions", description: "Terms of use for the BigBelief Solutions website.", path: "/terms" }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Terms of Use">
      <h2>Use of this website</h2>
      <p>The content on this website is provided for general information about BigBelief Solutions and its products. Product interfaces shown use demo data and are illustrative.</p>
      <h2>No warranty</h2>
      <p>This draft is a placeholder. Final terms, including liability and governing law, must be written with legal counsel.</p>
    </LegalPage>
  );
}
