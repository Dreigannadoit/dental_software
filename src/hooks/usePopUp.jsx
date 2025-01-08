import { useState } from "react";

const usePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [popupData, setPopupData] = useState(null);

  const openPopup = (data) => {
    console.log("Pop Up Open")
    setPopupData(data);
    setIsVisible(true);

    setTimeout(() => {
      setIsExiting(false);
    }, 100);
  };

  const closePopup = () => {
    setIsExiting(true);

    setTimeout(() => {
      setIsVisible(false);
      setPopupData(null);
    }, 500);
  };

  return { isVisible, isExiting, popupData, openPopup, closePopup };
};

export default usePopup;
