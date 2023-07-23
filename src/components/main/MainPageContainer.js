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
        
      >
        <div className="imageContainer" onClick={goToSimpleInterestCalculator}>
          <config.intCalculatorSvg />
        </div>
        <div className="labelContainer" onClick={goToSimpleInterestCalculator}>
          <div className="textContainer">Simple Interest</div>
        </div>
      </div>
      <div
        className="viewMainContainer viewMainSubContainerRight"
       
      >
        <div className="imageContainer"  onClick={goToCompoundInterestCalculator}>
          <config.compoundInterest />
        </div>
        <div className="labelContainer"  onClick={goToCompoundInterestCalculator}>
          <div className="textContainer">Compound Interest</div>
        </div>
      </div>
    </div>
  );
};

export default MainPageContainer;
