import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { IoArrowForwardOutline } from "react-icons/io5";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

const Hero = () => {
  const loadingRef = useRef(null);
  const counterContainerRef = useRef(null);
  const comp = useRef(null);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedBefore");
    if (!hasVisited) {
      setIsFirstVisit(true);
      sessionStorage.setItem("hasVisitedBefore", "true");
    } else {
      setIsFirstVisit(false);
      if (loadingRef.current) {
        gsap.set(loadingRef.current, { display: "none" });
      }
    }
  }, []);

  useLayoutEffect(() => {
    // A more robust way to select elements for GSAP
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: isFirstVisit ? 0.3 : 0, // Only delay if first visit
        defaults: {
          ease: "hop",
        },
      });

      if (isFirstVisit) {
        const counts = gsap.utils.toArray(counterContainerRef.current.children);
        counts.forEach((count, index) => {
          const digits = count.querySelectorAll(".digit h1");

          tl.to(digits, { y: "0%", duration: 1, stagger: 0.075 }, index * 1);
          tl.to(
            digits,
            { y: "-100%", duration: 1, stagger: 0.075 },
            index * 1 + 1
          );
        });

        tl.to(".spinner", { opacity: 0, duration: 0.5 });
        tl.to(".word h1", { y: "0%", duration: 1 }, "<");
        tl.to("#word-1 h1", { y: "120%", duration: 0.9, delay: 0.3 });
        tl.to("#word-2 h1", { y: "-120%", duration: 0.9 }, "<");

        tl.to(".block", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.75,
          onStart: () =>
            gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" }),
        });
      } else {
        gsap.set(".hero-img", { scale: 1 });
        gsap.set(".block", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        });
      }

      tl.to(
        [".nav", ".line h1", ".line p"],
        {
          y: "0%",
          duration: isFirstVisit ? 1.5 : 0.8,
          stagger: isFirstVisit ? 0.2 : 0.1,
        },
        isFirstVisit ? "<" : "0"
      );
      tl.to(
        [".cta", ".cta-icon"],
        {
          scale: 1,
          duration: isFirstVisit ? 1.5 : 0.8,
          stagger: isFirstVisit ? 0.75 : 0.3,
          delay: isFirstVisit ? 0.75 : 0,
        },
        "<"
      );
      tl.to(
        ".cta-label p",
        {
          y: "0%",
          duration: isFirstVisit ? 1.5 : 0.8,
          delay: isFirstVisit ? 0.5 : 0,
        },
        "<"
      );
    }, comp);

    return () => ctx.revert();
  }, [isFirstVisit]);

  const counterValues = ["00","27", "65", "98", "99"];

  return (
    <main ref={comp} className="w-screen h-dvh overflow-hidden font-gilroy">
      {isFirstVisit && (
        <div
          ref={loadingRef}
          className="loading fixed top-0 left-0 w-screen h-dvh overflow-hidden z-[2] pointer-events-none"
        >
          <div className="overlay absolute top-0 w-full h-full flex pointer-events-none">
            <div className="block w-full h-full bg-brand-dark [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]"></div>
            <div className="block w-full h-full bg-brand-dark [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]"></div>
          </div>

          <div className="intro-logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-[0.25em]">
            <div className="word overflow-hidden" id="word-1">
              <h1 className="text-white text-[2rem] font-medium -translate-y-[120%]">
                <span className="font-editorial italic text-[2.8rem] pr-[0.25rem]">
                  komal
                </span>
              </h1>
            </div>
            <div className="word overflow-hidden" id="word-2">
              <h1 className="text-white text-[2.8rem] font-medium translate-y-[120%]">
                pandey
              </h1>
            </div>
          </div>

          <div className="spinner-container absolute bottom-[10%] left-1/2 -translate-x-1/2">
            <div className="spinner w-[50px] h-[50px] border-[1.4px] border-white rounded-full border-t-[rgba(255,255,255,0.125)] animate-spin"></div>
          </div>

          <div
            ref={counterContainerRef}
            className="counter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
          >
            {counterValues.map((value, idx) => (
              <div
                key={idx}
                className="count absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex"
              >
                <div className="digit overflow-hidden pt-4">
                  <h1 className="font-editorial text-[15rem] text-white font-normal translate-y-[120%]">
                    {value[0]}
                  </h1>
                </div>
                <div className="digit overflow-hidden pt-4">
                  <h1 className="font-editorial text-[15rem] text-white font-normal translate-y-[120%]">
                    {value[1]}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MAIN CONTAINER */}
      <div className="container w-screen h-svh overflow-hidden">
        <div className="hero-img absolute top-0 w-full h-dvh -z-[1] scale-[1.5]">
          <img
            src="https://i.pinimg.com/1200x/d5/9d/cc/d59dccc37428341ad247de54d78465cb.jpg"
            alt="Packaging Background"
            className="w-full h-full object-cover filter brightness-75 object-[0%_35%]"
          />
        </div>

        <Nav />

        <header className="header w-full flex flex-col items-center gap-[1.5em] absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="hero-copy w-full flex flex-col items-center justify-center ">
            <div className="line overflow-hidden">
              <h1 className="text-white text-[1.5rem] text-center lg:text-[5rem] font-medium leading-none -translate-y-[120%]">
                <span className="text-center font-editorial italic text-[2.7rem] lg:text-[5.5rem] pr-[1rem]">
                  Fashion
                </span>
                that empowers.
              </h1>
            </div>
            <div className="line overflow-hidden mt-3 lg:mt-0">
              <h1 className="text-white text-[1.3rem] text-center lg:text-[5rem] font-medium leading-none -translate-y-[120%]">
                Built for the{" "}
                <span className="font-editorial italic text-[2.7rem] lg:text-[5.5rem] pr-[0.7rem]">
                  unapologetic.
                </span>
              </h1>
            </div>
          </div>
          <div className="line overflow-hidden">
            <p className="text-white text-[0.9rem] font-medium uppercase text-center translate-y-[120%]">
              Where style becomes storytelling — dress to express, not impress.
            </p>
          </div>
        </header>

        <div className="cta absolute left-1/2 bottom-[3.5em] w-[90%] lg:w-1/2 h-[60px] p-[0.3rem] flex justify-end bg-white rounded-full scale-0 -translate-x-1/2">
          <div className="cta-label absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <NavLink
              to="/products"
              className="text-black  text-xs font-medium uppercase translate-y-[120%] "
            >
              EXPLORE MY LOOKS
            </NavLink>
          </div>
          <div className="cta-icon h-full aspect-square flex items-center justify-center text-white bg-brand-dark rounded-full cursor-pointer scale-0">
            <IoArrowForwardOutline />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
