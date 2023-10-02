import React from 'react';

type Props = {};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto py-16">
      {children}
    </div>
  );
};

export default Container;
