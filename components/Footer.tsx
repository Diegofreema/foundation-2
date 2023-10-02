'use client';
import Image from 'next/image';
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Heart, MoveRight } from 'lucide-react';
import Link from 'next/link';
import SocialButtons from './SocialButtons';
import { links } from './Header';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-purple-900 pt-16 sm:px-6 md:px-8 px-4">
      <div className="topp flex">
        <div className="right basis-[30%]">
          <Image
            src={'/bmw.png'}
            width={200}
            height={200}
            priority
            alt="image"
          />
        </div>
        <div className="left grid gap-8 grid-cols-1 md:grid-cols-2 basis-[60%]">
          <Card className="bg-transparent border-none">
            <CardHeader>
              <CardTitle className="text-white">In Short</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white">
                The Foundation aims to promote growth and wellbeing of the girl
                child, single mothers and widows
              </p>
            </CardContent>
            <CardFooter>
              <Button className="bg-yellow-400 z-30 group !py-4 !px-8 rounded-full hover:bg-yellow-500  hover:text-white">
                <span className="group-hover:text-black text-white transition duration-300">
                  Support Us
                </span>
                <Heart
                  size={15}
                  className="ml-2 fill-white group-hover:fill-black transition duration-300 text-white group-hover:text-black "
                />
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-transparent border-none">
            <CardHeader>
              <CardTitle className="text-white">Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white">Find us at,</p>
              <p className="text-white">No 71A, Issele Azagba road,</p>
              <p className="text-white">Ogwashi-Uku, Delta State.</p>
            </CardContent>
            <CardFooter>
              <Link href={'/contact'}>
                <Button className="bg-yellow-400 z-30 group !py-4 !px-8 rounded-full hover:bg-yellow-500  hover:text-white">
                  <span className="group-hover:text-black text-white transition duration-300">
                    Contact
                  </span>
                  <MoveRight
                    size={15}
                    className="ml-2 fill-white group-hover:fill-black transition duration-300 text-white group-hover:text-black "
                  />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="top mt-8 ">
        <div className="semiTop flex justify-between">
          <div className="left space-y-4">
            <div>
              <p className="text-white">Social networks of </p>
              <p className="text-white">BEHIND MARYGIFT WALLS FOUNDATION</p>
            </div>
            <SocialButtons />
          </div>
          <div className="right flex flex-col w-full basis-[60%] space-y-4">
            {links?.slice(0, 3)?.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className=" w-full block relative "
              >
                <p className=" text-yellow-400 !w-full text-bold text-3xl">
                  {link.label}
                </p>
                <div className="absolute w-full h-[2px] inset-x-0 bg-yellow-400 -bottom-1 " />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom flex justify-between mt-8 pb-4 text-white sm:mt-16">
        <p>© {year} All rights reserved.</p>
        <p>BEHIND MARYGIFT WALLS FOUNDATION</p>
      </div>
    </div>
  );
};

export default Footer;
