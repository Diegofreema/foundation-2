'use client';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

import React from 'react';
import Container from './Container';
import { BadgeCheck, Clover, Club, Feather, MoveRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';
import Image from 'next/image';

type Props = {};
const texts = ['Our', 'Projects'];
const MotionCard = motion(Card);
const services = [
  {
    imageUrl: '/food3.jpeg',
    title: 'Food Outreach',
    date: 'May 12, 2022',
    text: `
        Education equips girls with knowledge, skills, and self-confidence, empowering them to make informed choices about their lives. It enables them to participate actively in social, economic, and political spheres, contributing to their own well-being and that of their communities. On a global scale, investing in girl child education contributes to achieving the United Nations Sustainable Development Goals, particularly those related to quality education, gender equality, and poverty reduction.  `,
  },
  {
    imageUrl: '/food1.jpeg',
    title: 'Food Outreach',
    date: 'April 5, 2022',
    text: `Women empowerment refers to the process of granting women the knowledge, resources, and power to make choices and control their own lives. It involves eliminating gender-based discrimination and providing equal opportunities and rights to women in various spheres, including education, employment, healthcare, and participation in social and political decision-making. Empowered women have the ability to shape their destinies, challenge societal norms, and advocate for gender equality.`,
  },
  {
    imageUrl: '/food4.jpeg',
    title: 'Food Outreach',
    date: 'Dec 12, 2022',
    text: ` Good personal and menstrual Hygiene for the girl child.
    Hygiene is not only essential for the physical health of the girl child but also for her emotional well-being, confidence, education, and overall empowerment. Providing education and resources to support proper hygiene practices is crucial in promoting the well-being and dignity of girls.`,
  },
];
const Projects = (props: Props) => {
  return (
    <div className="min-h-screen bg-[#ebe9eb]">
      <Container>
        <div className="top">
          <div>
            {texts.map((item, index) => (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.3 }}
                key={index}
                className="text-9xl font-semibold  mb-1 tracking-wider text-yellow-400"
              >
                {item}
              </motion.p>
            ))}
          </div>
          <div className="flex justify-between sm:mt-16 mt-8">
            <div className="font-semibold">
              <Link href={'/projects'}>
                <Button
                  variant={'link'}
                  className="bg-yellow-400 py-2 px-3 rounded-lg text-white hover:bg-yellow-600  transition-all duration-500 no-underline hover:no-underline"
                >
                  All Projects
                </Button>
              </Link>
            </div>
            <div className="text-[#3E1273] text-2xl width-[50%]">
              <p>Follow step by step the development </p>
            </div>
          </div>
        </div>
        <div className="bottom grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3  mt-20 ">
          {services.map(({ imageUrl, title, text, date }, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.3, delay: (index + 1) * 0.3 },
              }}
              key={index}
              className="cursor-pointer p-4 group  hover:bg-yellow-400 rounded-md overflow-hidden group hover:!-translate-y-6 transition duration-300 relative w-full h-fit"
            >
              <div className="w-full h-full">
                <div className="w-full h-full mb-4 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt="food-outreach"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mb-16 pl-3">
                <h2 className="text-xl font-bold  text-purple-900 transition duration-500 group-hover:text-white">
                  {title}
                </h2>
                <h5 className="text-xl font-semibold text-purple-900 transition duration-500 group-hover:text-white">
                  {date}
                </h5>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
