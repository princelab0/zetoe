import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our commitment to your privacy",
};
export default function Privacy() {
  return (
    <div className='min-h-screen py-12 pt-[72px] px-4 sm:px-6 lg:px-8 bg-[var(--background)] '>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-xl md:text-3xl font-bold text-gray-600 text-center mb-8 w-full text center'>
          Zetoe Privacy Policy
        </h1>
        <hr className=' px-1 my-3' />
        <div className='bg-[var(--card)] shadow-sm rounded-lg overflow-hidden'>
          <div className='px-4 py-5 sm:p-6 space-y-6'>
            <section>
              <p className='text-gray-500'>
                This privacy notice has been drafted in accordance with the
                provisions of the General Data Protection Regulation –
                Regulation (EU) 2016/679 (the “GDPR”) and applies in all
                instances when Prince Lab acts as a controller of personal data
                relating users of Our website. For the purposes of this privacy
                notice, the terms “Us”, “We” and “Our” refer to Prince Lab. The
                terms “you” and “your” refer to the data subject, being the
                person in relation to whom We have all personally identifiable
                information.
              </p>
            </section>
            <section>
              <h2 className='text-2xl font-semibold text-gray-600 mb-2'>
                Applicability of Privacy Notice
              </h2>
              <p className='text-gray-500'>
                This privacy notice has been drafted in accordance with the
                provisions of the General Data Protection Regulation –
                Regulation (EU) 2016/679 (the “GDPR”) and applies in all
                instances when Prince Lab acts as a controller of personal data
                relating users of Our website. For the purposes of this privacy
                notice, the terms “Us”, “We” and “Our” refer to Prince Lab. The
                terms “you” and “your” refer to the data subject, being the
                person in relation to whom We have all personally identifiable
                information
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-gray-600 mb-2'>
                Alterations
              </h2>
              <p className='text-gray-500'>
                We can make changes to this privacy notice from time to time.
                The changes we make on this page will be identified first. We
                will send a notice to you, in circumstances where a change will
                materially change the way in which We collect or use your
                personal information or data via emails or texts and you shall
                have a right to object to any such update and/or amendment or
                withdraw your consent.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-gray-600 mb-2'>
                Personal Data
              </h2>
              <p className='text-gray-500'>
                The terms “personal data” or “personal information” mean any
                information about an individual for which that person can be
                identified. It does not include data where the identity has been
                removed (anonymous data). We may collect and process personal
                data that you voluntarily give Us when you use Our website. For
                example, you may use this Website to contact Us with questions
                and comments. When you fill out the contact Us form on Our
                website, you provide Us with personal information such as your
                name and email address or phone number.In addition to the
                information you provide when you use Our website, We may use
                technology to collect aggregated data such as statistical data.
                Aggregated data may be derived from your personal data but is
                not considered personal data in law as this data does not
                directly or indirectly reveal your identity. For example, We may
                aggregate your usage of Our website to calculate the percentage
                of users accessing a specific website feature. However, if We
                combine or connect aggregated data with your personal data so
                that it can directly or indirectly identify you, We treat the
                combined data as personal data which will be used in accordance
                with this notice.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-gray-600 mb-2'>
                How we use your data
              </h2>
              <p className='text-gray-500'>
                When you fill the contact Us form on this website, We use the
                personal information submitted in the form only to respond to
                your message or act on your request. This personal information
                will not be kept longer than necessary and will be deleted once
                the feedback requirement is met. The provision of your personal
                data is not a statutory or contractual requirement. You are not
                obliged to provide Us any personal data and it is your choice
                whether to provide Us. Only minimal personal data is collected
                when you fill the contact Us form on this website, namely your
                name and email address. Without provision of such personal data,
                We will not be in a position to respond to your message or act
                on your request. You may withdraw your consent to the processing
                of your personal data at any time. Such withdrawal does not
                affect the legality of any processing based on your consent
                prior withdrawal.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-gray-600 mb-2'>
                How we use your data
              </h2>
              <p className='text-gray-500'>
                Third party links This website may include links to third-party
                websites, plug-ins and applications. It is important to note
                that clicking on those links or enabling those connections may
                allow third parties to collect or share data about you. We do
                not control these third-party websites and are not responsible
                for their privacy policies.
              </p>
            </section>
            <section>
              <h2 className='text-2xl font-semibold text-gray-600 mb-2'>
                Third party links
              </h2>
              <p className='text-gray-500'>
                This website may include links to third-party websites, plug-ins
                and applications. It is important to note that clicking on those
                links or enabling those connections may allow third parties to
                collect or share data about you. We do not control these
                third-party websites and are not responsible for their privacy
                policies.
              </p>
            </section>
            <section>
              <h2 className='text-2xl font-semibold text-gray-600 mb-2'>
                Use of Cookies
              </h2>
              <p className='text-gray-500'>
                Zetoe uses cookies to give you the best online experience.
                By using our website you agree to our use of cookies in
                accordance with our cookie policy.
              </p>
            </section>
            <section>
              <h2 className='text-2xl font-semibold text-gray-600 mb-2'>
                Information Sharing{" "}
              </h2>
              <p className='text-gray-500'>
                As a general rule, any information gathered through the use of
                Our website is used solely by Us and, save as otherwise
                permitted herein and/or required by law, will not be transferred
                to third parties. We may, however, have to share your personal
                data with the parties set out below:
                <ol role='list' type='1' className='!list-decimal !ml-8'>
                  <li className='mb-3'>
                    Selected individuals within Our company;
                  </li>

                  <li className='mb-3'>
                    Our intra-group companies and affiliates;
                  </li>
                  <li className='mb-3'>
                    Our agents and third parties that provide services to Us.
                  </li>
                </ol>
                We require all third parties to respect the security of your
                personal data and to treat it in accordance with the law. We do
                not allow Our third-party service providers to use your personal
                data for their own purposes and only permit them to process your
                personal data for specified purposes and in accordance with Our
                instructions.
              </p>
            </section>
            <section>
              <h2 className='text-2xl font-semibold text-gray-600 mb-2'>
                Location Tracking
              </h2>
              <p className='text-gray-500'>
                In February of 2015, the Federal Trade Commission (FTC) expanded
                their guidelines for mobile app developers who create apps that
                collect user data, specifically user location data. This
                expansion builds upon the original guidance published by the FTC
                in February of 2013 in their report "Mobile Privacy Disclosures:
                Building Trust through Transparency". A recently settled lawsuit
                initiated by the FTC shows that these guidelines should not be
                disregarded by app developers without the risk of being charged
                with deceptive practices. However, the main reasons why WE track
                users are to gain insights about how they use our site, to
                provide a personalized online experience, and to monetize the
                user by showing them targeted adverts.
              </p>
            </section>
            <section>
              <h2 className='text-2xl font-semibold text-gray-600 mb-2'>
                Your Rights
              </h2>
              <p className='text-gray-500'>
                For as long as We retain your personal data, you have certain
                rights in relation to your personal data including:
                <ol role='list' type='1' className='list-decimal ml-8'>
                  <li className='pl-2 mb-3'>
                    Right of access – you have the right to access the personal
                    data We hold about you and to receive a copy of such
                    personal data.
                  </li>
                  <li className='pl-2 mb-3'>
                    Right to complain – you have the right to lodge a complaint
                    regarding the processing of your personal data with the
                    supervisory authority for data protection matters.
                  </li>
                  <li className='pl-2 mb-3'>
                    Right to Erasure – In certain circumstances you may request
                    that We delete the personal data that We hold about you.
                  </li>
                  <li className='pl-2 mb-3'>
                    Right to Object – you have a right to object and request
                    that We cease the processing of your personal data where We
                    rely on Our, or a third party’s legitimate interest for
                    processing your personal data.
                  </li>
                  <li className='pl-2 mb-3'>
                    Right to Rectification – you have the right to update or
                    correct any inaccurate personal data which We hold about
                    you.
                  </li>
                  <li className='pl-2 mb-3'>
                    Right to Restriction – you have the right to request that We
                    stop using your personal data in certain circumstances,
                    including if you believe that We are unlawfully processing
                    your personal data or the personal data that We hold about
                    you is inaccurate.
                  </li>
                  <li className='pl-2 mb-3'>
                    Right to withdraw your consent – where Our processing is
                    based on your consent, you have the right to withdraw your
                    consent. Withdrawal of your consent shall not affect the
                    lawfulness of the processing based on your consent prior to
                    the withdrawal of your consent.
                  </li>
                  <li className='pl-2 mb-3'>
                    Right to be informed of the source – where the personal data
                    We hold about you was not provided to Us directly by you,
                    you may also have the right to be informed of the source
                    from which your personal data originates.
                  </li>
                </ol>
              </p>
            </section>
            <section>
              <p className='text-gray-500'>
                Please note that in terms of the applicable laws, your rights in
                relation to your personal data are not absolute. You may
                exercise the rights indicated in this section by contacting Us
                directly. Given that the legal basis for Our processing of your
                personal information is consent, you have the right to withdraw
                that consent at any time by sending an e-mail to
                labprince18@gmail.com. Withdrawal will not affect the lawfulness
                of processing before the withdrawal. If you consider that Our
                processing of your personal information infringes data
                protection laws, you have a legal right to lodge a complaint
                with a supervisory authority responsible for data protection. If
                you have any queries,you can drop us an email at :
                <Link href='mailto:contactus@zetoe.com'>
                  contactus@zetoe.com
                </Link>
              </p>
            </section>
            <h1 className='text-xl font-semibold text-gray-600 text-center w-full'>
              Thank you!
            </h1>
          </div>
        </div>
        <p className='m-4 text-center text-sm text-gray-500'>
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
