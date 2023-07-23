import { useState } from "react";
import "../../App.css";
import "../calculator-form/calculatorFormContainer.css";
import { useLocation, useNavigate } from "react-router-dom";
import Switch from "react-switch";
import * as config from "../../shared/config/CalculatorFormConfig";

function Result() {
  const location = useLocation();
  let navigate = useNavigate();
  const props = location.state;
  const [switchValue, setSwitchValue] = useState(false);

  function onBackClick() {
    navigate("/");
  }

  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  const openPopup = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="calcultorFormMainContainer">
        <div className="homeContainer">
          <div className="headerTextStyle">Interest Calculator</div>
          <div className="switchContainer">
            <Switch
              onChange={toggleSwitch}
              checked={switchValue}
              onColor="#81b0ff"
              offColor="#767577"
              className="switchToggle"
              checkedIcon=""
              uncheckedIcon=""
            />
          </div>
          <div onClick={openPopup} className="homeDiv">
            <config.homeSvg />
          </div>
        </div>
        <div className={
            switchValue
              ? "calcultorFormContainer calcultorFormContainer-black"
              : "calcultorFormContainer calcultorFormContainer-white"
          }>
          <div className="imageContainer">
            <config.resultSvg />
          </div>
          <div className="formContainer">
            <div className="formStyle">
              <div className="table-view">
                <form>
                  <table className="viewdata">
                    <tbody>
                      <tr>
                        <th key="0">Type</th>
                        <th key="1">Value</th>
                      </tr>

                      {props?.allProps?.map((prop, i) =>
                        prop.name == "Interests" && prop.value.length > 0 ? (
                          prop.value.map((propValue, j) => (
                            <tr>
                              <td key={i + j}>{propValue.name}</td>
                              <td key={i + j}>{Math.round(propValue.value)}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td key={i}>{prop.name}</td>
                            <td key={i}>{prop.value}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>

                  {/* <input
                    type="button"
                    className="submitStyle table-back-button button-enabled"
                    onClick={onBackClick}
                    value="Back to calculator"
                  /> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
