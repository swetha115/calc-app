import './App.css';
import React, { useEffect, useState } from 'react';
import isValidation from './app-factory';
import { history } from './shared/helpers/history';

const Calculator = (props) => {
    let [totalYears, setTotalYear] = useState('0');
    let [totalMonths, setTotalMonth] = useState('0');
    let [totalDays, setTotalDay] = useState('0');
    let [interestRate, setInterestRate] = useState('0');
    let [amount, setAmount] = useState('0');
    let [startDate, setStartDate] = useState('0');
    let [endDate, setEndDate] = useState('0');
    let [interestSelectType, setInterestType] = useState('compound interest');
    let [errorMsg, setErrorMsg] = useState('');
    let [initialRender, setInitialRender] = useState(true);
    let totalInterest = 0;

    let i1x = 0;
    let i1 = 0;
    let i1m = 0;
    let i1d = 0;
    let i2x = 0;
    let i2 = 0;
    let i2m = 0;
    let i2d = 0;
    let i3x = 0;
    let i4x = 0;
    let i4m = 0;
    let i4d = 0;
    let i3 = 0;
    let i3m = 0;
    let i3d = 0;
    let ry = 0;
    let rm = 0;
    let rf = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let totalAmount = 0;

    let totYears = [];
    let totMonths = [];
    let totDays = [];

    let interestType = [
        { name: 'simple interest', value: 'simple interest' },
        { name: 'compound interest', value: 'compound interest' }
    ];

    for (let i = 0; i <= 10; i++) {
        totYears.push({ 'name': i, 'value': i })
    }

    for (let i = 0; i <= 12; i++) {
        totMonths.push({ 'name': i, 'value': i })
    }

    for (let i = 0; i <= 29; i++) {
        totDays.push({ 'name': i, 'value': i })
    }

    function calculateInterest() {
        totalDays = Number(totalDays);
        totalYears = Number(totalYears);
        totalMonths = Number(totalMonths);

        if (interestSelectType == 'compound interest') {
            if (totalYears < 1) {
                 i1x = (amount * interestRate) / 100;
                 i1m = (i1x * totalMonths);
                 i1d = (i1x * totalDays) / 30;
                 i1 = i1m + i1d;
            } else if (totalYears == 1) {
                if (totalMonths > 1) {
                     i1x = (amount * interestRate) / 100;
                     i1 = i1x * 12;
                     p1 = amount + i1;
                     i2x = (p1 * interestRate) / 100;
                     i2m = i2x * totalMonths;
                     i2d = (i2x * totalDays) / 30;
                     i2 = i2m + i2d;
                } else {
                     i1x = (amount * interestRate) / 100;
                     i1 = i1x * 12;
                     i2x = (amount * interestRate) / 100;
                     i2m = i2x * totalMonths;
                     i2d = (i2x * totalDays) / 30;
                     i2 = i2m + i2d;
                }
            } else if (totalYears == 2) {
                if (totalMonths > 1) {
                     i1x = (amount * interestRate) / 100;
                     i1 = i1x * 12;
                     p1 = amount + i1;
                     i2x = (p1 * interestRate) / 100;
                     i2 = i2x * 12;
                     p2 = amount + i1 + i2;
                     i3x = (p2 * interestRate) / 100;
                     i3m = i3x * totalMonths;
                     i3d = (i3x * totalDays) / 30;
                     i3 = i3m + i3d;
                } else {
                     i1x = (amount * interestRate) / 100;
                     i1 = i1x * 12;
                     p1 = amount + i1;
                     i2x = (p1 * interestRate) / 100;
                     i2 = i2x * 12;
                     i3x = (p1 * interestRate) / 100;
                     i3m = i3x * totalMonths;
                     i3d = (i3x * totalDays) / 30;
                     i3 = i3m + i3d;
                }
            } else if (totalYears == 3) {
                 i1x = (amount * interestRate) / 100;
                 i1 = i1x * 12;
                 p1 = amount + i1;
                 i2x = (p1 * interestRate) / 100;
                 i2 = i2x * 12;
                 p2 = amount + i1 + i2;
                 i3x = (p2 * interestRate) / 100;
                 i3 = i3x * 12;
                 i4x = (p2 * interestRate) / 100;
                 i4m = i4x * totalMonths;
                 i4d = (i4x * totalDays) / 30;
                i3 = i3 + i4m + i4d;
            } else {
                 ry = totalYears - 3;
                 rm = ry * 12;
                 rf = rm + totalMonths;
                 i1x = (amount * interestRate) / 100;
                 i1 = i1x * 12;
                 p1 = amount + i1;
                 i2x = (p1 * interestRate) / 100;
                 i2 = i2x * 12;
                 p2 = amount + i1 + i2;
                 i3x = (p2 * interestRate) / 100;
                 i3 = i3x * 12;
                 i4x = (p2 * interestRate) / 100;
                 i4m = i4x * rf;
                 i4d = (i4x * totalDays) / 30;
                i3 = i3 + i4m + i4d;
            }

        } else {
            if (totalYears < 1) {
                 i1x = (amount * interestRate) / 100;
                 i1m = (i1x * totalMonths);
                 i1d = (i1x * totalDays) / 30;
                 i1 = i1m + i1d;
            } else if (totalYears == 1) {
                if (totalMonths > 1) {
                     i1x = (amount * interestRate) / 100;
                     i1 = i1x * 12;
                     i2x = (amount * interestRate) / 100;
                     i2m = i2x * totalMonths;
                     i2d = (i2x * totalDays) / 30;
                     i2 = i2m + i2d;
                } else {
                     i1x = (amount * interestRate) / 100;
                     i1 = i1x * 12;
                     i2x = (amount * interestRate) / 100;
                     i2m = i2x * totalMonths;
                     i2d = (i2x * totalDays) / 30;
                     i2 = i2m + i2d;
                }
            } else if (totalYears == 2) {
                if (totalMonths > 1) {
                     i1x = (amount * interestRate) / 100;
                     i1 = i1x * 12;
                     i2x = (amount * interestRate) / 100;
                     i2 = i2x * 12;
                     i3x = (amount * interestRate) / 100;
                     i3m = i3x * totalMonths;
                     i3d = (i3x * totalDays) / 30;
                     i3 = i3m + i3d;
                } else {
                     i1x = (amount * interestRate) / 100;
                     i1 = i1x * 12;
                     i2x = (amount * interestRate) / 100;
                     i2 = i2x * 12;
                     i3x = (amount * interestRate) / 100;
                     i3m = i3x * totalMonths;
                     i3d = (i3x * totalDays) / 30;
                     i3 = i3m + i3d;
                }
            } else if (totalYears == 3) {
                 i1x = (amount * interestRate) / 100;
                 i1 = i1x * 12;
                 i2x = (amount * interestRate) / 100;
                 i2 = i2x * 12;
                 i3x = (amount * interestRate) / 100;
                 i3 = i3x * 12;
                 i4x = (amount * interestRate) / 100;
                 i4m = i4x * totalMonths;
                 i4d = (i4x * totalDays) / 30;
                i3 = i3 + i4m + i4d;
            } else {
                 ry = totalYears - 3;
                 rm = ry * 12;
                 rf = rm + totalMonths;
                 i1x = (amount * interestRate) / 100;
                 i1 = i1x * 12;
                 i2x = (amount * interestRate) / 100;
                 i2 = i2x * 12;
                 i3x = (amount * interestRate) / 100;
                 i3 = i3x * 12;
                 i4x = (amount * interestRate) / 100;
                 i4m = i4x * rf;
                 i4d = (i4x * totalDays) / 30;
                i3 = i3 + i4m + i4d;
            }

        }
         totalInterest = i1 + i2 + i3;
         totalAmount = totalInterest + amount;
		 history.push('/result');
    }

    useEffect(() => {
        if (initialRender) {
            setInitialRender(false);
            return;
        }
        isValidate();
    }, [totalYears, totalMonths, totalDays, amount, interestRate, startDate, endDate])

    function changeTotalYears(e) {
        let value = e.currentTarget.value === '' ? '0' : Number(e.currentTarget.value);
        setTotalYear(e.currentTarget.value);
    }

    function changeTotalMonths(e) {
        let value = e.currentTarget.value === '' ? '0' : Number(e.currentTarget.value);
        setTotalMonth(e.currentTarget.value);
    }

    function changeTotalDays(e) {
        let value = e.currentTarget.value === '' ? '0' : Number(e.currentTarget.value);
        setTotalDay(e.currentTarget.value);
    }

    function changeInterestRate(e) {
        let value = e.currentTarget.value === '' ? '0' : Number(e.currentTarget.value);
        setInterestRate(value);
    }

    function changeAmount(e) {
        let value = e.currentTarget.value === '' ? '0' : Number(e.currentTarget.value);
        setAmount(value);
    }

    function changeStartDate(e) {
        setStartDate(e.currentTarget.value);
    }

    function changeEndDate(e) {
        setEndDate(e.currentTarget.value);
    }

    function changeInterestType(e) {
        setInterestType(e.currentTarget.value);
    }

    function isValidate() {
        let props = {
            totalYears,
            totalMonths,
            totalDays,
            amount,
            interestRate,
            startDate,
            endDate
        }
        let error_Msg = isValidation(props);
        setErrorMsg(error_Msg);
    }

    return (
        
            <div className="display-flex">


                <form className="formStyle mb-20">

                    <h2 className="text-align"> Interest Calculator </h2>
                    <div className={errorMsg != '' ? 'c-red' : ''}>
                        {errorMsg != '' ? errorMsg : ''}
                    </div>

                    <div>
                        <label className="labelStyle">Start year *</label>
                        <input
                            type="text" placeholder="yyyy-mm-dd"
                            className="inputStyle"
                            onChange={changeStartDate}
                        />
                    </div>

                    <div>
                        <label className="labelStyle">End year *</label>
                        <input
                            type="text" placeholder="yyyy-mm-dd"
                            className="inputStyle"
                            onChange={changeEndDate}
                        />
                    </div>

                    <div>
                        <label className="labelStyle">Total Years *</label>
                        <div className="select">
                            <select name="slct" id="slct" onChange={changeTotalYears}>
                                {totYears.map((e, key) => {
                                    return <option  key={key} value={e.value}>{e.name}</option>
                                })}
                            </select>
                        </div>
                    </div>


                    <div>
                        <label className="labelStyle">Total Months *</label>
                        <div className="select">
                            <select name="slct" id="slct1" onChange={changeTotalMonths}>
                                {totMonths.map((e, key) => {
                                    return <option  key={key} value={e.value}>{e.name}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="labelStyle">Total Days *</label>
                        <div className="select">
                            <select name="slct" id="slct2" onChange={changeTotalDays}>
                                {totDays.map((e, key) => {
                                    return <option key={key} value={e.value}>{e.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="labelStyle">Amount *</label>
                        <input
                            type="number"
                            className="inputStyle"
                            onChange={changeAmount}
                        />
                    </div>
                    <div>
                        <label className="labelStyle">Interest Rate *</label>
                        <input
                            type="number"
                            className="inputStyle"
                            onChange={changeInterestRate}
                        />
                    </div>

                    <div>
                        <label className="labelStyle">Interest type *</label>
                        <div className="select">
                            <select name="slct" id="slct3" onChange={changeInterestType} value={interestSelectType}>
                                {interestType.map((e, key) => {
                                    return <option key={key} value={e.value}>{e.name}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <input type="button" onClick={calculateInterest, props.onCalculationClick} value="Calculate"
                        className={errorMsg != '' ? 'submitStyle button-disabled' : 'submitStyle button-enabled'} />

                </form>

            </div>
    );
}

export default Calculator;




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

// export default App;