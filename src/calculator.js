import './App.css';
import React, { useEffect, useState } from 'react';
import isValidation, { isCalculateButtonDisabled } from './app-factory';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calculateFinalInterest from './cal';
import 'font-awesome/css/font-awesome.min.css';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

const Calculator = (props) => {
	let { onCalculationClick } = props;
	let [interestRate, setInterestRate] = useState('0');
	let [amount, setAmount] = useState('0');
	let [startDate, setStartDate] = useState(null);
	let [endDate, setEndDate] = useState(null);
	let [interestSelectType, setInterestType] = useState('');
	let [errorMsg, setErrorMsg] = useState('');
	let [isButtonDisabled, setIsButtonDiabled] = useState(true);
	let [initialRender, setInitialRender] = useState(true);

	let interestType = [
		{ name: 'Please select interest', value: '' },
		{ name: 'simple interest', value: 'simple interest' },
		{ name: 'compound interest', value: 'compound interest' }
	];

	useEffect(() => {
		checkForButtonDisabling();
		if (initialRender) {
			setInitialRender(false);
			return;
		}
		isValidate();
	}, [amount, interestRate, startDate, endDate, interestSelectType]);

	function calculateInterest() {
		let props = {
			amount,
			interestRate,
			startDate,
			endDate,
			interestSelectType,
			onCalculationClick
		}
		calculateFinalInterest(props);
	}

	function changeInterestRate(e) {
		let value = e.currentTarget.value === '' ? '0' : Number(e.currentTarget.value);
		if(Number(e.currentTarget.value) < 0) {
			value = "1";
			document.getElementById('interest').value = value;
			setInterestRate(value);
			checkForButtonDisabling();
			isValidate();	
		} else {
			setInterestRate(value);
		}
	}

	function changeAmount(e) {

		let value = e.currentTarget.value === '' ? '0' : Number(e.currentTarget.value);

		if(Number(e.currentTarget.value) < 0) {
			value = "1";
			document.getElementById('amount').value = value;
			setAmount(value);
			checkForButtonDisabling();
			isValidate();	
		} else {
			setAmount(value);
		}
		

		// let value = e.currentTarget.value != '' ? Number(e.currentTarget.value.replace(/,/g, '')) : e.currentTarget.value
		// if (value != '') {
		// 	var x = value;
		// 	x = x.toString();
		// 	var lastThree = x.substring(x.length - 3);
		// 	var otherNumbers = x.substring(0, x.length - 3);
		// 	if (otherNumbers != '')
		// 		lastThree = ',' + lastThree;
		// 	value = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
		// }
	}

	function changeStartDate(e) {
		setStartDate(e);
	}

	function changeEndDate(e) {
		setEndDate(e);
	}

	function changeInterestType(e) {
		setInterestType(e.currentTarget.value);
	}

	function checkForButtonDisabling() {

		let props = {
			amount,
			interestRate,
			startDate,
			endDate,
			interestSelectType
		}
		let isDisabled = isCalculateButtonDisabled(props);
		setIsButtonDiabled(isDisabled);
	}


	function isValidate() {
		let props = {
			amount,
			interestRate,
			startDate,
			endDate,
			interestSelectType
		}
		let error_Msg = isValidation(props);
		setErrorMsg(error_Msg);
	}

	var  emailicon = <faEnvelopeOpen  size={10}  />;

	return (

		<div>


			<form className="formStyle mb-20">

				<h2 className="text-align"> Interest Calculator </h2>
				<div className={errorMsg != '' ? 'c-red' : ''}>
					{errorMsg != '' ? errorMsg : ''}
				</div>

				<div>
					<label className="display-block">Start Date(dd/mm/yyyy) *</label>
					<DatePicker
						selected={startDate}
						onChange={changeStartDate}
						dateFormat="dd/MM/yyyy"
						peekNextMonth
						showMonthDropdown
						showYearDropdown
						dropdownMode="select"
						placeholderText='dd/mm/yyyy &#xf073;'
						className="datepicker_placeholder"
					/>
					<i class="far fa-calendar-alt"></i>
				</div>

				<div>
					<label className="display-block">End Date(dd/mm/yyyy) *</label>
					<DatePicker
						selected={endDate}
						onChange={changeEndDate}
						dateFormat="dd/MM/yyyy"
						peekNextMonth
						showMonthDropdown
						showYearDropdown
						dropdownMode="select"
						placeholderText='&#xf073;'
						className="datepicker_placeholder"
					/>

					
				</div>

				<div class="amount">
					<label className="labelStyle">Amount *</label>
					<input id="amount"
						type="number"
						className="inputStyle input-icons" placeholder="&#xf156;" 
						onChange={changeAmount} min = "0" 
					/>
				</div>
				<div class="interest_rate">
					<label className="labelStyle">Interest Rate *</label>
					<input id="interest"
						type="number" placeholder="&#xf295;" className="datepicker_placeholder"
						className="inputStyle input-icons"
						onChange={changeInterestRate} min = "0" 
						
					/>
				</div>

				<div>
					<label className="labelStyle">Interest type *</label>
					<select  onChange={changeInterestType} value={interestSelectType}
						className={interestSelectType == '' ? 'my_class c-grey' : 'my_class'}>
						{interestType.map((e, key) => {
							return <option key={key} value={e.value} disabled ={e.name == 'Please select interest'}>{e.name}</option>
						})}
					</select>
				</div>

				<input type="button" onClick={calculateInterest} value="Calculate"
					className={isButtonDisabled ? 'submitStyle button-disabled w-100' : 'submitStyle button-enabled w-100'} />

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


// for (let i = 0; i <= 10; i++) {
// 	totYears.push({ 'name': i, 'value': i })
// }

// for (let i = 0; i <= 12; i++) {
// 	totMonths.push({ 'name': i, 'value': i })
// }

// for (let i = 0; i <= 29; i++) {
// 	totDays.push({ 'name': i, 'value': i })
// }
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

{/* <div>
<label className="labelStyle">Total Years *</label>
<div className="select">
	<select name="slct" id="slct" onChange={changeTotalYears}>
		{totYears.map((e, key) => {
			return <option key={key} value={e.value}>{e.name}</option>
		})}
	</select>
</div>
</div>


<div>
<label className="labelStyle">Total Months *</label>
<div className="select">
	<select name="slct" id="slct1" onChange={changeTotalMonths}>
		{totMonths.map((e, key) => {
			return <option key={key} value={e.value}>{e.name}</option>
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
</div> */}
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