import React from "react";

const FooterLanding = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Foodio</h4>
            <p className="text-sm text-gray-400">
              Your go-to platform for discovering and ordering the best food in your city. Savor, click, and enjoy!
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Restaurants</a></li>
              <li><a href="#" className="hover:text-white">Order Online</a></li>
              <li><a href="#" className="hover:text-white">Cuisines</a></li>
              <li><a href="#" className="hover:text-white">Offers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              For inquiries, email us at: <a href="mailto:support@foodio.com" className="hover:text-white">support@foodio.com</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Foodio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterLanding;