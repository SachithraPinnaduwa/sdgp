import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16  lg:px-4 lg:py-4">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
           
            <h2 className="font-heading mb-4 font-bold tracking-tight  text-white text-3xl sm:text-5xl">
              Contact Us
            </h2>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-400">
              Encountering a technical issue? Have feedback regarding a our features? We're all ears. Let us know.
              </p>
              <ul className="mb-6 md:mb-0">
                
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-rose-500 text-gray-50">
                    <FaPhoneAlt />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white">Contact</h3>
                    <p className="text-gray-400">Mobile: (+94) *******</p>
                    <p className="text-gray-400">Mail: iit.ac.lk</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-rose-500 text-gray-50">
                    <FaRegClock />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white">Working hours</h3>
                    <p className="text-gray-400">Monday - Friday: 08:00 - 17:00</p>
                    <p className="text-gray-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0" name="name" />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0" name="email" />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full bg-rose-500 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
