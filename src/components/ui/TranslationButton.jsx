"use client";
import React, { useContext } from "react";
import { LanguageContext } from "../../Provider/Provider";
import i18n from "../../translation";

const TranslationButton = () => {
  const { lng, setLng } = useContext(LanguageContext);

  // Function to handle button click and update language
  const handleButtonClick = (lng) => {
    setLng(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-end space-x-4">
      <button
        onClick={() => handleButtonClick("en")}
        className={`px-4 py-2 rounded-lg shadow-lg ${
          lng === "en" ? "bg-slate-600" : "bg-primary hover:bg-slate-800"
        } text-light`}
      >
        En
      </button>
      <button
        onClick={() => handleButtonClick("hi")}
        className={`px-4 py-2 rounded-lg shadow-lg ${
          lng === "hi" ? "bg-slate-600" : "bg-primary hover:bg-slate-800"
        } text-light`}
      >
        Hi
      </button>
    </div>
  );
};

export default TranslationButton;
