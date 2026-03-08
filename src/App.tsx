import React from 'react';
import { 
  Phone, Star, HardHat, FileText, SwatchBook, Ruler, 
  MapPin, Mail, ChevronDown, Play, Wrench, Home, ChevronRight
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Navbar & Hero */}
      <div className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
            alt="Handyman working" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        </div>

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between px-8 py-6 text-white max-w-7xl mx-auto w-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-8 h-8 text-[#FFC527]">
              <Home size={32} strokeWidth={1.5} />
              <Wrench size={14} className="absolute mt-1" />
            </div>
            <span className="text-2xl font-bold tracking-tight">FixItPro</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#" className="text-[#FFC527] flex items-center gap-1">Home <ChevronDown size={16} /></a>
            <a href="#" className="hover:text-[#FFC527] transition-colors">About Us</a>
            <a href="#" className="hover:text-[#FFC527] transition-colors flex items-center gap-1">Shop <ChevronDown size={16} /></a>
            <a href="#" className="hover:text-[#FFC527] transition-colors flex items-center gap-1">Blogs <ChevronDown size={16} /></a>
            <a href="#" className="hover:text-[#FFC527] transition-colors flex items-center gap-1">Pages <ChevronDown size={16} /></a>
            <a href="#" className="hover:text-[#FFC527] transition-colors">Contact</a>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-300">Need Help? Talk to an expert</span>
                <span className="font-bold">(+00) 123 456789</span>
              </div>
            </div>
            <button className="bg-[#FFC527] hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-colors">
              Get A Quote
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <div className="text-sm font-bold tracking-[0.2em] text-gray-300 uppercase mb-4">
              Let's get to work
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Honest, Trustworthy, And Does Good Work.
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
              Eget mi proin sed libero. Egestas sed sed risus pretium quam vulputate dignissim. Tincidunt vitae semper quis lectus nulla at volutpat diam.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button className="bg-[#FFC527] hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full transition-colors">
                Get A Quote
              </button>
              <button className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 rounded-full transition-colors">
                Learn More
              </button>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <img src="https://i.pravatar.cc/100?img=11" alt="User" className="w-12 h-12 rounded-full border-2 border-black object-cover" />
                <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-12 h-12 rounded-full border-2 border-black object-cover" />
                <img src="https://i.pravatar.cc/100?img=13" alt="User" className="w-12 h-12 rounded-full border-2 border-black object-cover" />
                <img src="https://i.pravatar.cc/100?img=14" alt="User" className="w-12 h-12 rounded-full border-2 border-black object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#FFC527] mb-1">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <div className="text-white font-medium text-sm">
                  4.k Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services/Features Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images & Stats */}
          <div className="relative w-full aspect-square max-w-lg mx-auto lg:mx-0">
            {/* Left Tall Image */}
            <div className="absolute left-0 top-10 bottom-10 w-[45%] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop" 
                alt="Electrician" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Top Right Image */}
            <div className="absolute right-0 top-0 w-[50%] h-[45%] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
                alt="Plumbing" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom Right Image */}
            <div className="absolute right-0 bottom-0 w-[50%] h-[45%] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1607472586893-edb57cb31328?q=80&w=1974&auto=format&fit=crop" 
                alt="Handyman" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Box */}
            <div className="absolute left-[45%] top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFC527] rounded-2xl p-8 z-10 flex flex-col items-center justify-center shadow-2xl min-w-[160px]">
              <div className="text-4xl font-bold text-black mb-1">560+</div>
              <div className="text-sm font-semibold text-black/80 mb-6">Projects Done</div>
              <div className="w-full h-px bg-black/10 mb-6"></div>
              <div className="text-4xl font-bold text-black mb-1">180+</div>
              <div className="text-sm font-semibold text-black/80">Technicians</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">
              24/7 Hassle-Free
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Home And Businesses<br />Installation Services
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Imperdiet massa tincidunt nunc pulvinar sapien. Sit amet facilisis magna etiam odio mollis mollis. Integer lacus ligula, imperdiet vel massa in, maximus suscipit turpis. Mauris ac risus sed quam semper auctor. Nam tempus volutpat ipsum, non viverra.
            </p>

            <div className="space-y-8 mb-12">
              {/* Feature 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                  <HardHat size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Earliest Consultation</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Aenean vel elit scelerisque mauris pellentesque consectetur adipiscing elit pulvinar.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                  <FileText size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customized Solution</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Purus gravida quis blandit turpis. Dolor sit amet consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                  <SwatchBook size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Pricing</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Quis vel eros donec ac odio tempor. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Suspendisse interdum consectetur.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                  <Ruler size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">All-In-One Service</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Pellentesque id nibh tortor id. Quis vel eros donec ac odio tempor orci. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <button className="bg-[#222222] hover:bg-black text-white font-semibold px-8 py-4 rounded-full transition-colors">
                Read More
              </button>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-[#FFC527]">
                  <Phone size={24} fill="currentColor" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">000 123 456 789</div>
                  <div className="text-sm text-gray-500 font-medium">Call For Booking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white pt-20 pb-8 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Col 1: Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="relative flex items-center justify-center w-8 h-8 text-[#FFC527]">
                  <Home size={32} strokeWidth={1.5} />
                  <Wrench size={14} className="absolute mt-1" />
                </div>
                <span className="text-2xl font-bold tracking-tight">FixItPro</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Duis ultricies libero sit amet aliquam fermentum. Nunc tincidunt mollis dui in tempor. Maecenas ut leo vitae purus condimentum dignissim.
              </p>
              <div className="flex flex-col gap-3">
                <button className="bg-black border border-gray-700 rounded-lg px-4 py-2 flex items-center gap-3 hover:border-gray-500 transition-colors w-fit">
                  <Play size={24} className="text-white" />
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 uppercase">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
                <button className="bg-black border border-gray-700 rounded-lg px-4 py-2 flex items-center gap-3 hover:border-gray-500 transition-colors w-fit">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5"></path></svg>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 uppercase">Available on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Col 2: Information */}
            <div>
              <h4 className="text-[#FFC527] font-semibold text-lg mb-6">Information</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Request Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial Plumbing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#" className="hover:text-white transition-colors">What We Do</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
              </ul>
            </div>

            {/* Col 3: Support */}
            <div>
              <h4 className="text-[#FFC527] font-semibold text-lg mb-6">Support</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms Of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Col 4: Quick Contact */}
            <div>
              <h4 className="text-[#FFC527] font-semibold text-lg mb-6">Quick Contact</h4>
              <ul className="space-y-6 text-gray-400 text-sm">
                <li className="flex gap-3">
                  <MapPin size={20} className="text-[#FFC527] flex-shrink-0" />
                  <span>No: 58 A, East Madison Street,<br />Baltimore, MD, USA 4508</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone size={20} className="text-[#FFC527] flex-shrink-0" />
                  <span>+000 123 456 789</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail size={20} className="text-[#FFC527] flex-shrink-0" />
                  <span>info@example.com</span>
                </li>
              </ul>
              <div className="mt-6 text-sm text-gray-400">
                Follow Us - YT / FB / TW
              </div>
            </div>

            {/* Col 5: Newsletter */}
            <div>
              <h4 className="text-[#FFC527] font-semibold text-lg mb-6">Newsletter</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Sunc tincidunt mollis dui in tempor. Duis ultricies libero sit amet.
              </p>
              <form className="flex mb-4">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Id" 
                  className="bg-transparent border border-gray-700 rounded-l-lg px-4 py-3 w-full text-sm focus:outline-none focus:border-[#FFC527] text-white"
                />
                <button 
                  type="submit" 
                  className="bg-[#FFC527] text-black px-4 py-3 rounded-r-lg hover:bg-yellow-500 transition-colors flex items-center justify-center"
                >
                  <ChevronRight size={20} />
                </button>
              </form>
              <p className="text-xs text-gray-500">
                We don't spam. Unsubscription any time.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div>
              © WedesignTech All rights Reserved.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>-</span>
              <a href="#" className="hover:text-white transition-colors">Terms & Condition</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
