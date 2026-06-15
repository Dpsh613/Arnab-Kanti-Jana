import SEO from "../components/seo/SEO";

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Arnab Kanti Jana"
        description="Privacy policy for the official website of Arnab Kanti Jana."
        url="https://arnab-kanti-jana.vercel.app/privacy-policy"
      />

      <section className="bg-theme-black min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-16">
            <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4">
              Website Information
            </p>

            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">
              Privacy Policy
            </h1>

            <p className="text-theme-neutral-light max-w-2xl leading-relaxed">
              Transparency regarding analytics, data collection, and visitor
              privacy on the official website of Arnab Kanti Jana.
            </p>

            <p className="text-theme-neutral mt-4 text-sm">
              Last Updated: June 2026
            </p>
          </div>

          <div className="space-y-12">
            <div className="border-t border-theme-accent/20 pt-8">
              <h2 className="text-2xl text-theme-heading mb-4">
                1. Introduction
              </h2>

              <p className="text-theme-neutral-light leading-relaxed">
                This website serves as the official academic portfolio of Arnab
                Kanti Jana and is intended to present research, publications,
                scientific collaborations, and experimental activities in
                condensed matter physics.
              </p>
            </div>

            <div className="border-t border-theme-accent/20 pt-8">
              <h2 className="text-2xl text-theme-heading mb-4">
                2. Information Collected
              </h2>

              <p className="text-theme-neutral-light leading-relaxed">
                This website does not provide account registration, user
                profiles, payment processing, comment sections, or contact
                forms.
              </p>

              <p className="text-theme-neutral-light leading-relaxed mt-4">
                No personally identifiable information such as names, email
                addresses, phone numbers, or payment information is
                intentionally collected through this website.
              </p>
            </div>

            <div className="border-t border-theme-accent/20 pt-8">
              <h2 className="text-2xl text-theme-heading mb-4">
                3. Analytics Services
              </h2>

              <p className="text-theme-neutral-light leading-relaxed">
                This website uses privacy-focused analytics services, including
                Vercel Analytics and Umami Analytics, to understand website
                performance and visitor engagement.
              </p>

              <ul className="list-disc pl-6 mt-4 text-theme-neutral-light space-y-2">
                <li>Visited pages</li>
                <li>Browser and device information</li>
                <li>Country or region-level location data</li>
                <li>Referring websites</li>
                <li>Performance and usage metrics</li>
              </ul>

              <p className="text-theme-neutral-light leading-relaxed mt-4">
                These analytics are used solely to improve website performance,
                content organization, and user experience.
              </p>
            </div>

            <div className="border-t border-theme-accent/20 pt-8">
              <h2 className="text-2xl text-theme-heading mb-4">4. Cookies</h2>

              <p className="text-theme-neutral-light leading-relaxed">
                This website does not intentionally use advertising, profiling,
                or marketing cookies.
              </p>

              <p className="text-theme-neutral-light leading-relaxed mt-4">
                Some third-party services may use technical mechanisms necessary
                for providing analytics and website functionality.
              </p>
            </div>

            <div className="border-t border-theme-accent/20 pt-8">
              <h2 className="text-2xl text-theme-heading mb-4">
                5. Third-Party Links
              </h2>

              <p className="text-theme-neutral-light leading-relaxed">
                This website contains links to external resources, including
                scientific publications, research facilities, Google Scholar,
                ResearchGate, and other academic services.
              </p>

              <p className="text-theme-neutral-light leading-relaxed mt-4">
                These third-party websites operate under their own privacy
                policies and terms of service.
              </p>
            </div>

            <div className="border-t border-theme-accent/20 pt-8">
              <h2 className="text-2xl text-theme-heading mb-4">
                6. Data Security
              </h2>

              <p className="text-theme-neutral-light leading-relaxed">
                Reasonable measures are taken to maintain website security and
                protect collected analytics information.
              </p>
            </div>

            <div className="border-t border-theme-accent/20 pt-8">
              <h2 className="text-2xl text-white mb-4">7. Contact</h2>

              <p className="text-theme-neutral-light leading-relaxed">
                Questions regarding this Privacy Policy may be directed through
                the professional contact channels referenced on this website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PrivacyPolicyPage;
