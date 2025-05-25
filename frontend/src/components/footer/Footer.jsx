import React from "react";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import telegram from "../../assets/telegram.png";

const Footer = () => {
  return (
    <footer className="bg-[#8a5baf] text-white py-5 text-center">
      <div className="max-w-screen-xl mx-auto px-4">
        <p className="text-sm mb-2">
          &copy; Saraswati Vidya Foundation. All rights reserved.
        </p>

        <div className="text-sm space-y-1">
          <p>
            📞 <span className="font-medium">Phone:</span>{" "}
            <a href="tel:9569927027" className="underline hover:text-gray-200">
              9569927027
            </a>
          </p>
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:saraswatividyaf@gmail.com"
              className="underline hover:text-gray-200"
            >
              saraswatividyaf@gmail.com
            </a>
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mt-4">
          <a
            href="https://www.instagram.com/saraswatividyafoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-[30px] h-[30px] hover:opacity-80 transition"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="w-full h-full object-contain"
            />
          </a>
          <a
            href="https://www.facebook.com/share/1DdTP3aAtk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-[30px] h-[30px] hover:opacity-80 transition"
          >
            <img
              src={facebook}
              alt="Facebook"
              className="w-full h-full object-contain"
            />
          </a>
          <a
            href="https://x.com/Saraswatividyaf?t=YZ4SemNhLkYwcBC6rLwfXA&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-[30px] h-[30px] hover:opacity-80 transition"
          >
            <img
              src={twitter}
              alt="Twitter"
              className="w-full h-full object-contain"
            />
          </a>
          <a
            href="https://t.me/saraswatividyafoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-[30px] h-[30px] hover:opacity-80 transition"
          >
            <img
              src={telegram}
              alt="Telegram"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
