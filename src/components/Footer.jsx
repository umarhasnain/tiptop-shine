'use client'
import Image from "next/image";

export default function TiptopFooter() {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 lg:px-16 py-10 border-t-4 border-blue-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
        {/* Logo */}
        <div className="flex sm:block justify-center sm:justify-start mb-4 sm:mb-0">
          <Image 
            src="/images/animated logo.gif" 
            alt="Tiptop Logo" 
            width={250} 
            height={80} 
            className="object-contain w-60 sm:w-64 lg:w-72"
          />
        </div>

        {/* For Customer */}
        <div>
          <h4 className="font-bold mb-3 text-lg sm:text-xl">For Customer</h4>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            <li><a href="/services" className="hover:text-blue-400 transition-colors">Find A Professional</a></li>
            <li><a href="/how-it-work" className="hover:text-blue-400 transition-colors">How it Works</a></li>
            <li><a href="/login" className="hover:text-blue-400 transition-colors">Login</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Mobile App</a></li>
          </ul>
        </div>

        {/* For Professional */}
        <div>
          <h4 className="font-bold mb-3 text-lg sm:text-xl">For Professional</h4>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            <li><a href="/how-it-works" className="hover:text-blue-400 transition-colors">How it Works</a></li>
            <li><a href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
            <li><a href="/join-professional" className="hover:text-blue-400 transition-colors">Join As Professional</a></li>
            <li><a href="/help-center" className="hover:text-blue-400 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Mobile App</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-bold mb-3 text-lg sm:text-xl">About</h4>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            <li><a href="/about" className="hover:text-blue-400 transition-colors">About Tiptop Shine</a></li>
            <li><a href="/careers" className="hover:text-blue-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Affiliates</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Press</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="text-center sm:text-left lg:text-right">
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg text-sm sm:text-base font-semibold mb-4 w-full sm:w-auto transition-all">
            Contact Us
          </button>
          <div className="flex justify-center lg:justify-end space-x-4 mb-4">
            <Image src="/images/Clippathgroup.png" alt="Twitter" width={20} height={20} className="hover:opacity-80 transition" />
            <Image src="/images/Vecto(2).png" alt="Facebook" width={20} height={20} className="hover:opacity-80 transition" />
            <Image src="/images/Vector(3).png" alt="LinkedIn" width={20} height={20} className="hover:opacity-80 transition" />
          </div>
          <select className="bg-gray-800 text-white border border-gray-700 px-3 py-2 rounded text-sm sm:text-base w-full sm:w-auto">
            <option>🇺🇸 United States</option>
          </select>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-[12px] sm:text-sm mt-8">
        © {new Date().getFullYear()} All Rights Reserved. Tiptop Shine
      </div>
    </footer>
  );
}
