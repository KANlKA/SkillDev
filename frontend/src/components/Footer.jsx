import React from 'react';
function Footer() {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} SkillDev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;