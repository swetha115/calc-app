import React from "react";

import "./MainPageContainer.css";
import * as config from "../../shared/config/CalculatorFormConfig";
import { useNavigate } from "react-router-dom";

const MainPageContainer = () => {
  let navigate = useNavigate();

  const goToCompoundInterestCalculator = () => {
    navigate("calculator", {
      state: {
        interestType: "compound interest",
      },
    });
  };

  const goToSimpleInterestCalculator = () => {
    navigate("calculator", {
      state: {
        interestType: "simple interest",
      },
    });
  };

  return (
    <div className="viewContainer">
      <div
        className="viewMainContainer viewMainSubContainerLeft"
        onClick={goToSimpleInterestCalculator}
      >
        <div className="imageContainer">
          <config.intCalculatorSvg />
        </div>
        <div className="labelContainer">
          <div className="textContainer">Simple Interest</div>
        </div>
      </div>
      <div
        className="viewMainContainer viewMainSubContainerRight"
        onClick={goToCompoundInterestCalculator}
      >
        <div className="imageContainer">
          <config.compoundInterest />
        </div>
        <div className="labelContainer">
          <div className="textContainer">Compound Interest</div>
        </div>
      </div>
    </div>
  );
};

export default MainPageContainer;
