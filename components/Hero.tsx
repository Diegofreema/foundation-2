'use client';
import { Variants, motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import Carousel from 'nuka-carousel';

import { MoveLeft, MoveRight } from 'lucide-react';
import { Button } from './ui/button';

const text = ['BEHIND', ' MARYGIFT', 'WALLS', 'FOUNDATION'];
const MotionCard = motion(Card);
const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.06,
    },
  },
};
const singleWord: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const Hero = () => {
  const images = [
    {
      imgUrl: '/foundation1.jpeg',
      title: 'SANITIZE THE GIRL CHILD',
      text: 'Good Sanitation and Hygiene Practice.',
    },
    {
      imgUrl: '/foundation1.jpeg',
      title: 'FROM THE STREET TO THE CLASSROOM',
      text: 'Every Girl Child Deserves a Good Education.',
    },
    {
      imgUrl: '/foundation2.jpeg',
      title: 'REACHING OUT TO RURAL COMMUNITIES',

      text: 'Operation Feed One For All',
    },
  ];
  return (
    <div className=" pt-[100px] min-h-screen pb-[100px] overflow-hidden w-full text-white">
      <Carousel
        autoplayInterval={5000}
        className="!h-[100vh]"
        autoplay
        wrapAround
        renderCenterLeftControls={({ previousSlide }) => (
          <Button
            onClick={() => previousSlide()}
            className="bg-white p-2 sm:ml-4 ml-2 rounded-full h-10 w-10 flex items-center group hover:bg-purple-900 hover:text-white transition justify-center"
          >
            <MoveLeft
              size={30}
              className="group-hover:text-white text-purple-900 transition"
            />
          </Button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <Button
            onClick={() => nextSlide()}
            className="bg-white p-2 sm:mr-4 mr-2 rounded-full h-10 w-10 flex items-center group hover:bg-purple-900 hover:text-white transition justify-center"
          >
            <MoveRight
              size={30}
              className="group-hover:text-white text-purple-900 transition"
            />
          </Button>
        )}
      >
        {images.map((item) => (
          <div key={item.imgUrl} className="w-full !h-[100vh] relative">
            <>
              <div className="w-full h-full absolute inset-0 bg-black/80"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imgUrl}
                alt="img"
                width={'100%'}
                height={'100%'}
                className="w-full h-full object-cover"
              />
              <div className="absolute !top-[50%] !left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: 'spring',
                    damping: 30,
                    delay: 0.5,
                  }}
                  className="text-xl md:text-7xl text-center mb-4 sm:mb-8 md:mb-16 sm:text-4xl font-bold"
                >
                  {item.title}
                </motion.h1>
                <motion.h3
                  variants={quote}
                  initial="initial"
                  animate="animate"
                  className=" text-purple-500 text-xl md:text-5xl text-center font-bold"
                >
                  {item.text.split(' ').map((item, index) => (
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: 'spring',
                        damping: 50,
                        delay: index * 0.5,
                        mass: 0.5,
                      }}
                      key={index}
                    >
                      {item}&nbsp;
                    </motion.span>
                  ))}
                </motion.h3>
              </div>
            </>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
