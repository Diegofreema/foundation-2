'use client';

import React, { useState } from 'react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ChevronDown, Heart, Menu } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { LinksGroup } from './Navlinks';

const MotionLink = motion(Link);
const link = [
  {
    label: 'About Us',

    links: [
      {
        label: 'Our Team',
        link: '/our-team',
      },
      {
        label: 'Become a Volunteer',
        link: '/become-a-volunteer',
      },
      {
        label: 'Our priorities',
        link: '/our-priorities',
      },
    ],
  },
  {
    label: 'Events',
    link: '/events',
  },
  {
    label: 'BMWF Projects',
    link: '/bmwf-projects',
  },
  {
    label: 'Services',

    links: [
      {
        label: 'Girl Child Education',
        link: '/girl-child-education',
      },
      {
        label: 'Empowerment',
        link: '/empowerment',
      },
      {
        label: 'Operation Feed The Hungry',
        link: '/operation-feed-the-hungry',
      },
      {
        label: 'Good Health For Women',
        link: '/good-health-for-women',
      },
    ],
  },
  {
    label: 'Gallery',
    link: '/gallery',
  },
  {
    label: 'FAQ',
    link: '/faq',
  },
  {
    label: 'Articles',
    link: '/articles',
  },
];
const MobileMenu = () => {
  const navLink = link.map((item) => <LinksGroup key={item.label} {...item} />);
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="flex justify-center items-center flex-col space-y-5">
                <ul className="flex flex-col text-white">
                  {link?.map((link) => (
                    <motion.div
                      key={link.label}
                      className=" mr-4 group peer relative cursor-pointer "
                    >
                      {navLink}
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
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
