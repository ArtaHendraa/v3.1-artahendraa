/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContentLayout = (props) => {
  const { children } = props;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <main className="lg:max-w-[860px] transition-all duration-300 w-full lg:h-screen overflow-y-auto">
        <div className="p-8 mb-5 lg:mt-0" data-aos="fade-up">
          {children}
        </div>
      </main>
    </>
  );
};

export default ContentLayout;
