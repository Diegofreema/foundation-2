'use client';
import React from 'react';
import Container from './Container';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from './ui/card';
import Image from 'next/image';

type Props = {};
const texts = ['Our', 'Services'];

const services = [
  {
    imgUrl: '/girl.png',
    title: 'Girl Child Education',
  },
  {
    imgUrl: '/women.png',
    title: 'Empowerment',
  },
  {
    imgUrl: '/feed.png',
    title: 'Operation Feed The Hungry',
  },
  {
    imgUrl: '/woman.png',
    title: 'Good Health For Women',
  },
];
const MotionCard = motion(Card);
const Services = (props: Props) => {
  return (
    <div className="h-screen  ">
      <Container>
        <div className="top">
          <div>
            {texts.map((item, index) => (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.3 }}
                key={index}
                className="text-9xl font-semibold  mb-1 tracking-wider text-yellow-400"
              >
                {item}
              </motion.p>
            ))}
          </div>
          <div className="flex items-center mt-20 justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-black font-medium ">One Goal,</p>

              <p className="text-black font-medium ">Different Services</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#3E1273]  text-2xl "
            >
              BEHIND MARYGIFT WALLS FOUNDATION
            </motion.p>
          </div>
        </div>
        <div className="bottom grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 mt-20 gap-3 ">
          {services.map((item, index) => (
            <MotionCard
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 60,
                delay: (index + 1) * 0.3,
                ease: 'easeInOut',
              }}
              key={index}
              className="cursor-pointer hover:!-translate-y-6 transition duration-300"
            >
              <CardHeader className="flex justify-center">
                <div className=" flex justify-center">
                  <Image
                    alt="img"
                    src={item.imgUrl}
                    className="object-contain"
                    width={50}
                    height={50}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <h2 className="text-2xl font-bold text-center">{item.title}</h2>
              </CardContent>
            </MotionCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
