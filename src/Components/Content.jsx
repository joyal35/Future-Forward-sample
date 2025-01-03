import React from "react";
import content1_img from "../../src/assets/content1.png";
import content2_img from "../../src/assets/content2.png";
import content3_img from "../../src/assets/content3.png";
import content4_img from "../../src/assets/content4.png";
import content5_img from "../../src/assets/content5.png";
import content6_img from "../../src/assets/content6.png";

function Content(){
  return (
    <div className="lg:mx-80">
      <div className="ml-14 sm:ml-16 mt-10">
        <h1 className="text-xl sm:text-4xl text-sky-950">Recent Reports & Testimonies</h1>
        <p className="text-sky-900 text-sm">
          Lorem Ipsum is simply dummy text of the printing and{" "}
          <span className="text-sky-500"> typesetting industry.</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 ">
        <div className="sm:mt-20">
          <img className="w-[19rem]" src={content1_img} alt="" />
          <p>
            U.S. Postal Service: Opportunities <br /> Exist to Strengthen Workforce
            Diversity <br /> Efforts
          </p>
          <p className="text-xs">Published: Dec 22, 2023 Publicly released: Dec 22, 2023</p>
        </div>
        <div className="sm:mt-20">
          <img className="w-[19rem]" src={content2_img} alt="" />
          <p>
            U.S. Postal Service: Opportunities <br /> Exist to Strengthen Workforce
            Diversity <br /> Efforts
          </p>
          <p className="text-xs">Published: Dec 22, 2023 Publicly released: Dec 22, 2023</p>
        </div>
        <div className="sm:mt-20">
          <img className="w-[19rem]" src={content3_img} alt="" />
          <p>
            U.S. Postal Service: Opportunities <br /> Exist to Strengthen Workforce
            Diversity <br /> Efforts
          </p>
          <p className="text-xs">Published: Dec 22, 2023 Publicly released: Dec 22, 2023</p>
        </div>
        <div className="sm:mt-20">
          <img className="w-[19rem]" src={content4_img} alt="" />
          <p>
            U.S. Postal Service: Opportunities <br /> Exist to Strengthen Workforce
            Diversity <br /> Efforts
          </p>
          <p className="text-xs">Published: Dec 22, 2023 Publicly released: Dec 22, 2023</p>
        </div>
        <div className="sm:mt-20">
          <img className="w-[19rem]" src={content5_img} alt="" />
          <p>
            U.S. Postal Service: Opportunities <br /> Exist to Strengthen Workforce
            Diversity <br /> Efforts
          </p>
          <p className="text-xs">Published: Dec 22, 2023 Publicly released: Dec 22, 2023</p>
        </div>
        <div className="sm:mt-20">
          <img className="w-[19rem]" src={content6_img} alt="" />
          <p>
            U.S. Postal Service: Opportunities <br /> Exist to Strengthen Workforce
            Diversity <br /> Efforts
          </p>
          <p className="text-xs">Published: Dec 22, 2023 Publicly released: Dec 22, 2023</p>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-32">
        <button className="border-2 border-sky-400 text-sky-950 px-8 py-2">View all</button>
      </div>
    </div>
  );
};

export default Content;