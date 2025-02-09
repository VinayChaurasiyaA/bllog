"use client";
import React, { useContext } from "react";
import Underline from "./ui/underline";
import { useTranslation } from "react-i18next";

const insights = [
  "20+ Projects Completed",
  "3+ Years of Freelancing",
  "99% Client Satisfaction",
  "Authored In-Depth Course on Educative",
  "Contributed as a Technical Course Reviewer 📝",
  "Recipient of the Hackernoon Noonies Award 🏆",
];

const Footer = () => {
  const { t } = useTranslation();
  const insights = t("insights", {
    returnObjects: true, // Enables returning arrays
    defaultValue: [
      "20+ Projects Completed",
      "3+ Years of Freelancing",
      "99% Client Satisfaction",
      "Authored In-Depth Course on Educative",
      "Contributed as a Technical Course Reviewer 📝",
      "Recipient of the Hackernoon Noonies Award 🏆",
    ], // Fallback default values
  });
  return (
    <footer className="bg-black-500 text-light dark:text-light">
      <Underline />
      <div className="container mx-auto py-4 text-center text-lg">
        {t("Interesting Stories", "Interesting Stories")}
      </div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {insights.map((insight, index) => (
            <div key={index} className="text-lg font-medium">
              {insight}
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto py-4 text-center text-lg">
        {t(
          "© 2023 CodeBucks. All rights reserved.",
          "© 2023 CodeBucks. All rights reserved."
        )}
      </div>
    </footer>
  );
};

export default Footer;
