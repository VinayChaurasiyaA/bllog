import React from "react";
import Underline from "./ui/underline";

const insights = [
  "20+ Projects Completed",
  "3+ Years of Freelancing",
  "99% Client Satisfaction",
  "Authored In-Depth Course on Educative",
  "Contributed as a Technical Course Reviewer 📝",
  "Recipient of the Hackernoon Noonies Award 🏆",
];

const Footer = () => {
  return (
    <div className="bg-black-500 text-light dark:text-light">
      <Underline />
      <div className="container mx-auto py-4 text-center text-lg">
        Interesting Stories | Updates | Guides
      </div>
      <div className="container mx-auto py-4 text-center text-lg m-auto">
        <div className="grid grid-cols-6 gap-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="col-span-8 sm:col-span-6 md:col-span-4 lg:col-span-3"
            >
              {insight}
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto py-4 text-center text-lg">
        © 2023 CodeBucks. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
