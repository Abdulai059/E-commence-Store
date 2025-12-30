import AppDownloadCard from "./AppDownloadCard";
import PressmartLogo from "./Logo";

function Footer() {
  return (
    <footer className="w-full bg-[#424242] px-0 pt-10 text-sm text-slate-50/80 md:mt-40">
      <div className="mx-auto grid grid-cols-1 gap-8 px-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="">
           <PressmartLogo size="large" variant="green" />
          </a>

          <p className="mt-6 text-sm">
            Pressmart is an all-in-one online marketplace offering a diverse range of products,
            reliable delivery, and a smooth checkout experience to help you shop with confidence and
            convenience.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col lg:items-center lg:justify-start">
          <div className="flex flex-col space-y-2">
            <h6 className="text-lg font-semibold text-gray-100">Company</h6>
            <div className="mb-2 h-[3px] w-32 bg-gradient-to-l from-transparent to-green-600"></div>

            <div className="flex flex-col space-y-3 text-sm ">
              <a className="transition hover:text-slate-300" href="#">
                About us
              </a>

              <a className="flex items-center gap-2 transition hover:text-slate-300" href="#">
                Careers
                <span className="ml-2 rounded-md bg-green-600 px-2 py-0.5 text-xs text-white">
                  We're hiring!
                </span>
              </a>

              <a className="transition hover:text-slate-300" href="#">
                Contact us
              </a>
              <a className="transition hover:text-slate-300" href="#">
                Privacy policy
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:flex-col">
          <h6 className="mb-5 text-lg font-semibold text-slate-50">Subscribe to our newsletter</h6>

          <div className="max-w-sm space-y-6 text-sm">
            <p>The latest news, articles, and resources, sent to your inbox weekly.</p>

            <div className="flex items-center gap-2 rounded-md bg-indigo-50 p-2">
              <input
                className="w-full max-w-64 rounded px-2 py-2 text-base text-gray-600 ring-green-600 outline-none focus:ring-2"
                type="email"
                placeholder="Enter your email"
              />

              <button className="rounded bg-green-600 px-4 py-2 text-white">Subscribe</button>
            </div>
          </div>
        </div>

        <div>
          <AppDownloadCard />
        </div>
      </div>

      {/* Bottom copyright */}
      <p className="mx-auto mt-5 border-t border-gray-100/20 bg-[#323232] py-4 text-center text-xs text-slate-50">
        © 2025{" "}
        <a href="" className="text-slate-50 hover:underline">
          Pressmart
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
