'use client';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

import React from 'react';
import Container from './Container';
import { BadgeCheck, Clover, Club, Feather, MoveRight } from 'lucide-react';
import Link from 'next/link';

type Props = {};
const texts = ['Our', 'Priorities'];
const MotionCard = motion(Card);
const services = [
  {
    Icon: Feather,
    title: 'Girl child education',
    text: `
        Education equips girls with knowledge, skills, and self-confidence, empowering them to make informed choices about their lives. It enables them to participate actively in social, economic, and political spheres, contributing to their own well-being and that of their communities. On a global scale, investing in girl child education contributes to achieving the United Nations Sustainable Development Goals, particularly those related to quality education, gender equality, and poverty reduction.  `,
  },
  {
    Icon: Clover,
    title: 'Women and Youth Empowerment',
    text: `Women empowerment refers to the process of granting women the knowledge, resources, and power to make choices and control their own lives. It involves eliminating gender-based discrimination and providing equal opportunities and rights to women in various spheres, including education, employment, healthcare, and participation in social and political decision-making. Empowered women have the ability to shape their destinies, challenge societal norms, and advocate for gender equality.`,
  },
  {
    Icon: Club,
    title: 'Clean Healthy and Confident girl',
    text: ` Good personal and menstrual Hygiene for the girl child.
    Hygiene is not only essential for the physical health of the girl child but also for her emotional well-being, confidence, education, and overall empowerment. Providing education and resources to support proper hygiene practices is crucial in promoting the well-being and dignity of girls.`,
  },
  {
    Icon: BadgeCheck,
    title:
      'Food outreach to elderly women , widows, abandoned pregnant teenagers and single mothers',
    text: `Food outreach to elderly women, pregnant teenagers, single mothers and widows without income is very important. Many elderly women and widows have been abandoned by their families, so they
    struggle to access nutritious meals regularly. Food outreach programs help ensure they receive essential nutrients to maintain their health and well-being. These individuals may face social isolation, and food outreach can provide them with regular contact with volunteers or community members, reducing loneliness and offering emotional support.`,
  },
];
const Mission = (props: Props) => {
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
          <div className="flex items-center mt-20 justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-black font-medium ">Check Out</p>

              <p className="text-black font-medium ">Our Priorities</p>
            </motion.div>

            <div>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#3E1273]  text-2xl "
              >
                BEHIND MARYGIFT WALLS FOUNDATION,
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#3E1273]  text-2xl "
              >
                A Reason To Help Teenage Girls And Women
              </motion.p>
            </div>
          </div>
        </div>
        <div className="bottom grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 mt-20 gap-3 ">
          {services.map(({ Icon, title, text }, index) => (
            <MotionCard
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.3, delay: (index + 1) * 0.3 },
              }}
              key={index}
              className="cursor-pointer group hover:!-translate-y-6 transition duration-300 relative"
            >
              <CardHeader className="flex justify-center">
                <div className="w-full mb-4">
                  <Icon size={30} />
                </div>
                <CardTitle>
                  {title.length > 40 ? title.slice(0, 50) + '...' : title}
                </CardTitle>
              </CardHeader>
              <CardContent className="mb-16">
                <p>{text.slice(0, 100)}...</p>
              </CardContent>
              <CardFooter className="absolute bottom-0">
                <MoveRight
                  size={15}
                  className="-translate-x-4 group-hover:translate-x-0 duration-200 transition"
                />
                <Link
                  href={'/'}
                  className="translate-x-4 group-hover:translate-x-0 duration-200 transition opacity-0 group-hover:opacity-100"
                >
                  Learn more
                </Link>
              </CardFooter>
            </MotionCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Mission;
