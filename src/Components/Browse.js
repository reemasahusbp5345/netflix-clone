import React from "react";
import Header from "./Header";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import { useSelector } from "react-redux";
import GptContainer from "./GptContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptContainer />
      ) : (
        <>
          <MainComponent />
          <SecondaryComponent />
        </>
      )}
    </div>
  );
};

export default Browse;
