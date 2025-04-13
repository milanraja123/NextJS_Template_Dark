"use client";
import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";

import { IoMenu } from "react-icons/io5";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { RxCross1 } from "react-icons/rx";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-500">
        <div className="container max-w-5xl mx-auto">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 items-center px-4">
              <div>
                <Image
                  src={logoImage}
                  alt="Layers logo"
                  className="h-9 md:h-auto w-auto"
                />
              </div>
              <div className="lg:flex justify-center items-center hidden">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end gap-4">
                <IoMenu
                  color={"#fff"}
                  className={twMerge("mr-2 md:hidden", isOpen && "hidden")}
                  size={22}
                  onClick={() => setIsOpen(true)}
                />
                <RxCross1
                  color={"#fff"}
                  className={twMerge("mr-2 md:hidden", !isOpen && "hidden")}
                  size={22}
                  onClick={() => setIsOpen(false)}
                />
                <Button
                  variant="secondary"
                  className="hidden md:inline-flex items-center"
                >
                  Log In
                </Button>
                <Button
                  variant="primary"
                  className="hidden md:inline-flex items-center"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 pb-5 ">
                    {navLinks.map((link) => (
                      <a href={link.href} key={link.label} className="">
                        {link.label}
                      </a>
                    ))}
                    <Button variant="secondary">Log In</Button>
                    <Button variant="primary">Sign Up</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[86px] md:pb-[98px] lg:pb-[106px]"></div>
    </>
  );
}
