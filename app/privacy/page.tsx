import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <SectionWrapper className="bg-background">
      <div className="container-custom max-w-2xl">
        <h1 className="text-3xl font-bold text-text">Privacy Policy</h1>
        <p className="mt-6 text-text-muted">
          Privacy policy content placeholder. Replace with your legal copy before
          launch.
        </p>
      </div>
    </SectionWrapper>
  );
}
