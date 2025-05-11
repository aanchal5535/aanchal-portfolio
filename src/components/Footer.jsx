import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const sections = [
  {
    title: "About Us",
    items: ["Our Story", "Media", "Partner"],
  },
  
  {
    title: "About The Site",
    items: ["User Agreement", "Terms Of Service", "Privacy Policy"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
   {
    title:"Contact Us",
    items: ["(977)9842605922", "aanchalsubedi005@gmail.com"],
  }
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
  return (
    <div  data-aos="fade-up" className="w-full  bg-slate-900 text-gray-300 px-2 md:flex-col">
      <div className="max-w-full mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-y-6 gap-x-4 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-semibold text-base md:text-lg uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 px-0 text-gray-500 text-sm leading-7 hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row w-full">
            <input
              className="w-full p-4 sm:w-2/3 sm:mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between px-2 py-4 text-gray-500">
        <p className="py-4 flex"><FaRegCopyright className="mt-1"/>2025 by Aanchal. All rights reserved.</p>
        <div className="flex space-x-4 justify-end sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => {
            <a href={x.link} target="_blank" rel="noreferrer" key={index} aria-label={x.name}>
              <x.icon  className="hover:text-black" />
              </a>

          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;