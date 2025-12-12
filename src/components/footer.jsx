export function Footer() {
  return (
    <footer className="px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-20">
          <div>
            <div className="text-2xl flex items-center gap-2">
              <img
                src="/images/flag.png"
                alt="AIOPS icon"
                className="w-5 h-5 object-contain"
              />
              <span className="font-bold text-black">AIOPS</span>
            </div>
            <p className="text-muted-foreground text-center gap-20">
              Integrated Platform for Airport Operations.
            </p>
          </div>
          <div className="flex justify-center gap-2 mb-4">
            <ul class="no-bullets space-y-2">
              <li>
                <h3 className="font-bold text-black mb-3">Quick Links</h3>
              </li>
              <li>
                <a
                  href="#overview"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#modules"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Modules
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center gap-2 mb-4">
            <ul class="no-bullets space-y-2">
              <li>
                <h3 className="font-bold text-black mb-3">Contact</h3>
              </li>
              <li>
                <a
                  href="#overview"
                  className="text-gray-700 hover:text-blue-600"
                >
                  info@iops.aero
                </a>
              </li>
              <li>
                <a
                  href="#modules"
                  className="text-gray-700 hover:text-blue-600"
                >
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 AIOPS. All rights reserved. Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
