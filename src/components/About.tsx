import infoPng from "../../public/info.png";
import visionPng from "../../public/vision.png";
import targetPng from "../../public/target.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import "../css/main.css";

export default function About() {
  const [members, setMembers] = useState(0);
  const [events, setEvents] = useState(0);
  const [mentors, setMentors] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (members < 500) {
        setMembers(members + 1);
      }
    }, 4); // Adjust the duration of each increment as needed (total of 2000ms for 50 increments)

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, [members]);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      if (events < 50) {
        setEvents(events + 1);
      }
    }, 40); // Adjust the duration of each increment as needed (total of 2000ms for 10 increments)

    // Cleanup function to clear the timer
    return () => clearTimeout(timer2);
  }, [events]);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      if (mentors < 10) {
        setMentors(mentors + 1);
      }
    }, 200); // Adjust the duration of each increment as needed (total of 2000ms for 10 increments)

    // Cleanup function to clear the timer
    return () => clearTimeout(timer3);
  }, [mentors]);

  return (
    <div  className="h-max   relative z-0 text-[#1a202c] mx-auto sm:mx-8  px-4  flex flex-col items-center  font-montserrat">
      <div
        style={{ fontSize: "30px", fontWeight: "bolder" }}
        className="font-medium  text-center fader"
      >
        <h2>Institute of Electrical and Electronics Engineers</h2>
      </div>
      <div
        style={{ fontSize: "16px", fontWeight: "bolder" }}
        className="text-2xl p-0 m-0 text-center font-medium  text-[#631357] fader "
      >
        <h2>Advancing technology for the benefit of humanity.</h2>
      </div>
      <div className="w-32 my-2 py-2">
        <hr style={{ borderWidth: "1px", borderColor: "#631357" }} />
      </div>

      <div className="text-center ext-base leading-6 text-gray-500 my-2 fader">
        IEEE is the world's largest technical professional organization
        dedicated to advancing technology for the benefit of humanity.
      </div>
      <div className="flex items-center justify-center text-base my-2 mb-12">
        <div className="text-center text-base leading-6 text-gray-500">
          IEEE and its members inspire a global community to innovate for a
          better tomorrow through its more than 400,000 members in over 160
          countries, and its highly cited publications, conferences, technology
          standards, and professional and educational activities. IEEE is the
          trusted “voice” for engineering, computing, and technology information
          around the globe.
        </div>
      </div>
      <hr style={{ width: "-webkit-fill-available" }} />
      <div className="bg-white py-6 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-start items-center ">
                <div className="mr-4 h-20 w-20 rounded-full  bg-[#f2cbf7]  flex items-center justify-center">
                  <div className="bg-[#DC84F3] w-16 h-16 opacity-100 rounded-full flex justify-center items-center">
                    <Image className="w-6 h-6" src={infoPng} alt="info" />
                  </div>
                </div>
                <h3
                  style={{ fontSize: "20px", fontWeight: "100" }}
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  About Us
                </h3>
              </div>

              <p className="text-start mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing ealit, sed
                diaim nonummy nibsih euismod tincidiunt laorieet doloire magna.
              </p>
            </div>
            <div>
              <div className="flex justify-start items-center ">
                <div className="mr-4 h-20 w-20 rounded-full  bg-[#f2cbf7]  flex items-center justify-center">
                  <div className="bg-[#DC84F3] w-16 h-16 opacity-100 rounded-full flex justify-center items-center">
                    <Image className="w-6 h-6" src={visionPng} alt="info" />
                  </div>
                </div>
                <h3
                  style={{ fontSize: "20px", fontWeight: "100" }}
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Our Vision
                </h3>
              </div>

              <p className="text-start mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing ealit, sed
                diaim nonummy nibsih euismod tincidiunt laorieet doloire magna.
              </p>
            </div>
            <div>
              <div className="flex justify-start items-center ">
                <div className="mr-4 h-20 w-20 rounded-full  bg-[#f2cbf7]  flex items-center justify-center">
                  <div className="bg-[#DC84F3] w-16 h-16 opacity-100 rounded-full flex justify-center items-center">
                    <Image className="w-6 h-6" src={targetPng} alt="info" />
                  </div>
                </div>
                <h3
                  style={{ fontSize: "20px", fontWeight: "100" }}
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Our Mission
                </h3>
              </div>

              <p className="text-start mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing ealit, sed
                diaim nonummy nibsih euismod tincidiunt laorieet doloire magna.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "-webkit-fill-available" }} />

      <div
        style={{ width: "-webkit-fill-available" }}
        className="flex sm:space-x-28 space-x-12 h-44 mb-10  items-center justify-center font-montserrat  "
      >
        <div className="flex flex-col justify-center items-center">
          <p style={{ fontSize: "18px" }}>{members >= 500 ? '500+' : members}</p>
          <div className="w-4 my-1   ">
            <hr style={{ borderWidth: "1px", borderColor: "#631357" }} />
          </div>
          <p className="font-semibold italic">Members</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p style={{ fontSize: "18px" }}>{events >= 50 ? '50+' : events}</p>
          <div className="w-4 my-1  ">
            <hr style={{ borderWidth: "1px", borderColor: "#631357" }} />
          </div>
          <p className="font-semibold italic">Events</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p style={{ fontSize: "18px" }}>{mentors >= 10 ? '10+' : mentors}</p>
          <div className="w-4 my-1  ">
            <hr style={{ borderWidth: "1px", borderColor: "#631357" }} />
          </div>
          <p className="font-semibold italic">Mentors</p>
        </div>
      </div>
    </div>
  );
}
