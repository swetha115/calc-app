
import './App.css';
import React, { useEffect, useState } from 'react';
import Calculator from './calculator';
import Result from './result';

function App() {

    let [isCalculated, setIsCalculated] = useState(false);
    let [allProps, setAllProperties] = useState([]);


    function handleCalculateResult(values) {
        setIsCalculated(true);
        setAllProperties(values);
    }

    function handleBackClick(e) {
        setIsCalculated(false);
    }

    return (
        <div class="main-screen">
            <div className="app-container">
                {!isCalculated ? <Calculator onCalculationClick={handleCalculateResult} />
                    : <Result onBackClick={handleBackClick} allProps={allProps} />}
            </div>
        </div>
    );
}

export default App;

{/* <BrowserRouter>
      <Switch history={history}>
          <Redirect exact from="/" to="/calculator" />
        {routing.map((route, i) => (
          <RouteWithSubroutes key={i} {...route} />
        ))}
      </Switch>
    </BrowserRouter> */}




// import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';

// function App() {
//     let [startYear, setStartYear] = useState(0);
//     let [startMonth, setStartMonth] = useState(0);
//     let [startDay, setStartDay] = useState(0);
//     let [endYear, setEndYear] = useState(0);
//     let [endMonth, setEndMonth] = useState(0);
//     let [endDay, setEndDay] = useState(0);
//     let [interestRate, setInterestRate] = useState(0);
//     let [yearDiff, setYearDiff] = useState(0);
//     let [monthDiff, setMonthDiff] = useState(0);
//     let [DayDiff, setDayDiff] = useState(0);
//     let [buttonDisabled, isButtonDisabled] = useState(false);
//     function calculate() {
//         let start = startYear + '-' + startMonth + '-' + startDay;
//         let end = endYear + '-' + endMonth + '-' + endDay;
//         let dt1 = new Date(start);
//         let dt2 = new Date(end);
//         console.log(start);
//         console.log(end);
//         dateDiff(dt1, dt2);
//     }
//     function dateDiff(d1, d2) {
//         var Months = d2.getMonth() - d1.getMonth();
//         var Years = d2.getFullYear() - d1.getFullYear();
//         var Days = d2.getDate() - d1.getDate();
//         Months =
//             d2.getMonth() +
//             12 * d2.getFullYear() -
//             (d1.getMonth() + 12 * d1.getFullYear());
//         var MonthOverFlow = 0;
//         if (Months - Years * 12 < 0) MonthOverFlow = -1;
//         else MonthOverFlow = 1;
//         if (MonthOverFlow < 0) Years = Years - 1;
//         Months = Months - Years * 12;
//         var LastDayOfMonth = new Date(
//             d2.getFullYear(),
//             d2.getMonth() + 1,
//             0,
//             23,
//             59,
//             59
//         );
//         LastDayOfMonth = LastDayOfMonth.getDate();
//         if (MonthOverFlow < 0 && d1.getDate() > d2.getDate()) {
//             Days = LastDayOfMonth + (d2.getDate() - d1.getDate()) - 1;
//         } else Days = d2.getDate() - d1.getDate();
//         if (Days < 0) Months = Months - 1;
//         var l = new Date(d2.getFullYear(), d2.getMonth(), 0);
//         var l1 = new Date(d1.getFullYear(), d1.getMonth() + 1, 0);
//         if (Days < 0) {
//             if (l1 > l) Days = l1.getDate() + Days;
//             else Days = l.getDate() + Days;
//         }
//         console.log(Years + 'Year(s), ' + Months + ' Month(s), ' + Days + 'Day(s)');
//         setYearDiff(Years);
//         setMonthDiff(Months);
//         setDayDiff(Days);
//         calculateInterest(Years, Months, Days);
//     }
//     function calculateInterest(years, months, days) {
//         if (years > 5 || months > 12 || days > 31) {
//             alert("please check start and end dates");
//             return;
//         }
//     }
//     function changeStartYear(e) {
//         setStartYear(e.target.value);
//     }
//     function changeStartMonth(e) {
//         setStartMonth(e.target.value);
//     }
//     function changeStartDay(e) {
//         setStartDay(e.target.value);
//     }
//     function changeEndYear(e) {
//         setEndYear(e.target.value);
//     }
//     function changeEndMonth(e) {
//         setEndMonth(e.target.value);
//     }
//     function changeEndDay(e) {
//         setEndDay(e.target.value);
//     }
//     function changeInterestRate(e) {
//         setInterestRate(e.target.value);
//     }
//     return (
//         <div class="app-container">
//             <div class="display-flex">
//                 <form className="formStyle mb-20">
//                     <h2> Start Date </h2>
//                     <div>
//                         <label className="labelStyle">Start Year</label>
//                         <input
//                             type="text"
//                             className="inputStyle"
//                             onChange={changeStartYear}
//                         />
//                     </div>
//                     <div>
//                         <label className="labelStyle">Start Month</label>
//                         <input
//                             type="text"
//                             className="inputStyle"
//                             onChange={changeStartMonth}
//                         />
//                     </div>
//                     <div>
//                         <label className="labelStyle">Start Day</label>
//                         <input
//                             type="text"
//                             className="inputStyle"
//                             onChange={changeStartDay}
//                         />
//                     </div>
//                     <div />
//                 </form>
//                 <form className="formStyle mb-20">
//                     <h2> End date </h2>
//                     <div>
//                         <label className="labelStyle">End Year</label>
//                         <input
//                             type="text"
//                             className="inputStyle"
//                             onChange={changeEndYear}
//                         />
//                     </div>
//                     <div>
//                         <label className="labelStyle">End Month</label>
//                         <input
//                             type="text"
//                             className="inputStyle"
//                             onChange={changeEndMonth}
//                         />
//                     </div>
//                     <div>
//                         <label className="labelStyle">End Day</label>
//                         <input type="text" className="inputStyle" onChange={changeEndDay} />
//                     </div>
//                     <div />
//                 </form>
//             </div>
//             <form className="formStyle">
//                 <div>
//                     <label className="labelStyle">Amount</label>
//                     <input
//                         type="text"
//                         className="inputStyle"
//                         onChange={changeInterestRate}
//                     />
//                 </div>
//                 <div>
//                     <label className="labelStyle">Interest Rate</label>
//                     <input
//                         type="text"
//                         className="inputStyle"
//                         onChange={changeInterestRate}
//                     />
//                 </div>
//                 Year(s): {yearDiff}<br />
//                 Month(s): {monthDiff}<br />
//                 Day(s): {DayDiff}<br />
//                 <input type="button" onClick={calculate} value="Calculate"
//                 className={ buttonDisabled ? 'submitStyle button-disabled' : 'submitStyle button-enabled'} />


//             </form>
//         </div>
//     );
// }
