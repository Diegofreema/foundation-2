import React from 'react';
import Container from './Container';
import Image from 'next/image';

type Props = {};

const d = (props: Props) => {
  return (
    <div className="min-h-screen">
      <Container>
        <div className="flex space-x-6 ">
          <div className="md:basis-[50%] basis-[100%] bg-black relative md:w-[300px] w-[200px] rounded-md shadow-orange-50 shadow-md overflow-hidden h-[700px]">
            <Image
              src={'/mission.png'}
              alt="mission-imag"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:basis-[50%] basis-[100%] space-y-8">
            <div>
              <h2 className="text-[#3E1273] font-semibold text-center text-lg mb-3">
                About Us
              </h2>
              <p>
                About us Behind MaryGift Walls foundation is about teaching and
                guiding women to embrace their challenges that represent walls
                on life’s journey, to see those walls as roadblocks; instead,
                see them as opportunities for growth, resilience, and
                transformation. To know with determination and effort, they can
                find ways to overcome any barrier.
              </p>
            </div>
            <div>
              <h2 className="text-[#3E1273] font-semibold text-center text-lg mb-3">
                Our Mission
              </h2>
              <p>
                Our mission is to empower women and girls across rural
                communities in Africa by providing them with the tools,
                resources, and opportunities they need to lead lives of dignity,
                equality, confidence, self esteem and self-reliance. We are
                committed to breaking down barriers, fostering education,
                promoting health and well-being, and championing gender equality
                to create a brighter future for all female gender through well
                tailored programs and sponsorships.
              </p>
            </div>
            <div>
              <h2 className="text-[#3E1273] font-semibold text-center text-lg mb-3">
                Our Vision
              </h2>
              <p>
                To create a future where every woman and girl in Africa has the
                knowledge, skills, and confidence to pursue her dreams and
                aspirations without fear of discrimination or inequality. We
                envision a continent where gender equality is not just a goal
                but a lived reality, where women and girls are at the forefront
                of positive change , can use their voices in different levels in
                their own community and beyond.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default d;
