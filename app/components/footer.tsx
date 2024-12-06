import Image from "next/image";
import Logo from "../../public/apple-touch-icon.png";

const Footer = () => (
  <section className="py-16 px-4  flex flex-col items-center justify-center">
    {/* Footer Header */}
    <div className="text-3xl font-semibold text-gray-900 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
      <h2 className="text-center sm:text-left">
        Welcome to Portfolio Maker
      </h2>
      <div className="h-12 w-12">
        <Image src={Logo} alt="Logo" quality={100} height={48} width={48} priority />
      </div>
    </div>

    {/* Footer Description */}
    <div className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto text-justify">
      <p>
        This is a powerful API with comprehensive documentation, designed to make it easy for you to create scalable and custom websites.
        Explore the potential of integrating this API into your projects for seamless and dynamic web development.
      </p>
    </div>

    {/* Footer Footer */}
    <div className="mt-8 text-sm text-gray-500">
      <p>&copy; 2024 Portfolio Maker. All rights reserved.</p>
    </div>
  </section>
);

export default Footer;
