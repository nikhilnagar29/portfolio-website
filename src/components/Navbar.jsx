import React, { useEffect, useState } from "react";
import { Link } from "react-scroll"; // Import react-scroll
import logoName from "../assets/logo-name.png";
import menu from "../assets/menu.svg";
import close from "../assets/cross.svg";

const Navbar = () => {
  const [active, setActive] = useState(""); // Track the active section
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Highlight current section
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const offsetTop = section.offsetTop - 100; // Adjust for navbar height
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollTop >= offsetTop && scrollTop < offsetBottom) {
          setActive(section.id); // Update active section
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    // { id: "tech", title: "Tech" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav
      className={`w-full flex items-center h-[75px] fixed top-0 z-20 bg-white/60 duration-300 ${
        scrolled ? "bg-primary shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* Logo Section */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logoName} // Replace with your logo path
            alt="logo"
            className=" h-[110px] object-contain" // Updated size
          />
          <p className="text-white text-[18px] font-bold flex">
            &nbsp;
            <span className="sm:block hidden"></span>
          </p>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-[16px] font-medium cursor-pointer ${
                active === nav.id ? "text-[#BE959F]" : "text-gray-400"
              } hover:text-[#BE959F]`}
            >
              <Link
                to={nav.id} // The ID matches the Element's name
                smooth={true}
                duration={800}
                offset={-75} // Adjust for navbar height
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu} // Replace with your menu/close icons
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gray-200/50 absolute top-12 right-0 min-w-[100px] mr-[25px] mt-[13px] z-20 rounded-lg backdrop-blur-md`}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-[#BE959F]" : "text-gray-500"
                  }`}
                  onClick={() => {
                    setToggle(false); // Close menu on link click
                    setActive(nav.id); // Set active link
                  }}
                >
                  <Link
                    to={nav.id}
                    smooth={true}
                    duration={800}
                    offset={-75} // Adjust for navbar height
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
