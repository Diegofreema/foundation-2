'use client';
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';
import { ChevronDown, Heart } from 'lucide-react';
import Link from 'next/link';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
export const links = [
  {
    label: 'About Us',
    href: '/about-us',
    items: [
      {
        label: 'Our Team',
        href: '/our-team',
      },
      {
        label: 'Become a Volunteer',
        href: '/become-a-volunteer',
      },
      {
        label: 'Our priorities',
        href: '/our-priorities',
      },
    ],
  },
  {
    label: 'Events',
    href: '/events',
  },
  {
    label: 'BMWF Projects',
    href: '/bmwf-projects',
  },
  {
    label: 'Services',
    href: '/services',
    items: [
      {
        label: 'Girl Child Education',
        href: '/girl-child-education',
      },
      {
        label: 'Empowerment',
        href: '/empowerment',
      },
      {
        label: 'Operation Feed The Hungry',
        href: '/operation-feed-the-hungry',
      },
      {
        label: 'Good Health For Women',
        href: '/good-health-for-women',
      },
    ],
  },
  {
    label: 'Gallery',
    href: '/gallery',
  },
  {
    label: 'FAQ',
    href: '/faq',
  },
  {
    label: 'Articles',
    href: '/articles',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut', type: 'tween' },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: 'easeInOut', type: 'tween' },
    },
  };
  const MotionLink = motion(Link);
  return (
    <div className=" bg-purple-900 fixed inset-x-0 top-0  text-white z-30 ">
      <nav className="w-[95%] mx-auto md:w-[90%]  pb-3 pt-2 flex items-center justify-between  ">
        <Link
          href={'/'}
          className="h-[80px] w-[80px] lg:w-[100px] relative lg:h-[100px]"
        >
          <Image src={'/bmw.png'} fill priority alt="logo" />
        </Link>
        <div className="ld:hidden block">
          <MobileMenu />
        </div>
        <div className="ld:flex items-center hidden space-x-5">
          <ul className="flex">
            {links?.map((link) => (
              <motion.div
                key={link.label}
                className=" mr-4 group peer relative cursor-pointer "
              >
                <div className="flex items-center  space-x-1 cursor-pointe py-4">
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="font-medium peer  hover:text-yellow-400 transition duration-500 text-sm "
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <motion.p className="font-medium  text-sm peer  hover:text-yellow-400 transition duration-500 ">
                      {link.label}
                    </motion.p>
                  )}
                  {link?.items && (
                    <ChevronDown
                      className="text-white transition duration-500 peer-hover:text-yellow-400"
                      size={15}
                    />
                  )}
                </div>
                <motion.ul className=" z-30 absolute   inset-x-0   top-16 group-hover:opacity-100 opacity-0 -translate-y-4 group-hover:translate-y-0  duration-300 transition flex flex-col space-y-2 ">
                  {link?.items?.map((item) => (
                    <MotionLink
                      className="whitespace-nowrap  font-semibold text-lg self-start hover:text-yellow-400 transition duration-300"
                      key={item.label}
                      href={item.href}
                    >
                      {item.label}
                    </MotionLink>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </ul>
          <Button className="bg-yellow-400 z-30 group !py-4 !px-8 rounded-full hover:bg-yellow-500  hover:text-white">
            <span className="group-hover:text-black text-white transition duration-300">
              Support Us
            </span>
            <Heart
              size={15}
              className="ml-2 fill-white group-hover:fill-black transition duration-300 text-white group-hover:text-black "
            />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
