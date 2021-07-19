export default function calculateFinalInterest(props) {
	dayCalculator(props);
}


function dayCalculator(props) {
	let {startDate, endDate} = props;
	let startDateFormat = new Date(startDate);
	let endDateFormat = new Date(endDate);

	let startyear = startDateFormat.getUTCFullYear();
	let startmonth = startDateFormat.getUTCMonth() + 1;
	let startday = startDateFormat.getUTCDate() + 1;


	let endyear = endDateFormat.getUTCFullYear();
	let endmonth = endDateFormat.getUTCMonth() + 1;
	let endday = endDateFormat.getUTCDate() + 1;

	let years = 0;
	let months = 0;
	let days = 0;

	if (endday >= startday) {
		days = endday - startday;
	} else {
		endday = 30 + endday;
		days = endday - startday
		endmonth = endmonth - 1;
	}

	if (endmonth >= startmonth) {
		months = endmonth - startmonth;
	} else {
		endmonth = 12 + endmonth;
		months = endmonth - startmonth;
		endyear = endyear - 1;
	}

	years = endyear - startyear;
	calculateInterest(props, {years, months, days})
}

function calculateInterest(props, daysDiff) {
	let { amount, interestRate, startDate, endDate, interestSelectType, onCalculationClick} = props;
	let {years, months, days} = daysDiff;

	amount = Number(amount.replace(/,/g, ''));

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
	let interestData = [];
	if (interestSelectType == 'compound interest') {
		if (years < 1) {
			i1x = (amount * interestRate) / 100;
			i1m = (i1x * months);
			i1d = (i1x * days) / 30;
			i1 = i1m + i1d;
			interestData.push(i1);
		} else if (years == 1) {
			if (months > 1) {
				i1x = (amount * interestRate) / 100;
				i1 = i1x * 12;
				interestData.push(i1);
				p1 = amount + i1;
				i2x = (p1 * interestRate) / 100;
				i2m = i2x * months;
				i2d = (i2x * days) / 30;
				i2 = i2m + i2d;
				interestData.push(i2);
			} else {
				i1x = (amount * interestRate) / 100;
				i1 = i1x * 12;
				interestData.push(i1);
				i2x = (amount * interestRate) / 100;
				i2m = i2x * months;
				i2d = (i2x * days) / 30;
				i2 = i2m + i2d;
				interestData.push(i2);
			}
		} else if (years == 2) {
			if (months > 1) {
				i1x = (amount * interestRate) / 100;
				i1 = i1x * 12;
				interestData.push(i1);
				p1 = amount + i1;
				i2x = (p1 * interestRate) / 100;
				i2 = i2x * 12;
				interestData.push(i2);
				p2 = amount + i1 + i2;
				i3x = (p2 * interestRate) / 100;
				i3m = i3x * months;
				i3d = (i3x * days) / 30;
				i3 = i3m + i3d;
				interestData.push(i3);
			} else {
				i1x = (amount * interestRate) / 100;
				i1 = i1x * 12;
				interestData.push(i1);
				p1 = amount + i1;
				i2x = (p1 * interestRate) / 100;
				i2 = i2x * 12;
				interestData.push(i2);
				i3x = (p1 * interestRate) / 100;
				i3m = i3x * months;
				i3d = (i3x * days) / 30;
				i3 = i3m + i3d;
				interestData.push(i3);
			}
		} else if (years == 3) {
			i1x = (amount * interestRate) / 100;
			i1 = i1x * 12;
			interestData.push(i1);
			p1 = amount + i1;
			i2x = (p1 * interestRate) / 100;
			i2 = i2x * 12;
			interestData.push(i2);
			p2 = amount + i1 + i2;
			i3x = (p2 * interestRate) / 100;
			i3 = i3x * 12;
			i4x = (p2 * interestRate) / 100;
			i4m = i4x * months;
			i4d = (i4x * days) / 30;
			i3 = i3 + i4m + i4d;
			interestData.push(i3);
		} else {
			ry = years - 3;
			rm = ry * 12;
			rf = rm + months;
			i1x = (amount * interestRate) / 100;
			i1 = i1x * 12;
			interestData.push(i1);
			p1 = amount + i1;
			i2x = (p1 * interestRate) / 100;
			i2 = i2x * 12;
			interestData.push(i2);
			p2 = amount + i1 + i2;
			i3x = (p2 * interestRate) / 100;
			i3 = i3x * 12;
			i4x = (p2 * interestRate) / 100;
			i4m = i4x * rf;
			i4d = (i4x * days) / 30;
			i3 = i3 + i4m + i4d;
			interestData.push(i3);
		}

	} else {
		if (years < 1) {
			i1x = (amount * interestRate) / 100;
			i1m = (i1x * months);
			i1d = (i1x * days) / 30;
			i1 = i1m + i1d;
			interestData.push(i1);
		} else if (years == 1) {
			if (months > 1) {
				i1x = (amount * interestRate) / 100;
				i1 = i1x * 12;
				interestData.push(i1);
				i2x = (amount * interestRate) / 100;
				i2m = i2x * months;
				i2d = (i2x * days) / 30;
				i2 = i2m + i2d;
				interestData.push(i2);
			} else {
				i1x = (amount * interestRate) / 100;
				i1 = i1x * 12;
				interestData.push(i1);
				i2x = (amount * interestRate) / 100;
				i2m = i2x * months;
				i2d = (i2x * days) / 30;
				i2 = i2m + i2d;
				interestData.push(i2);
			}
		} else if (years == 2) {
			if (months > 1) {
				i1x = (amount * interestRate) / 100;
				i1 = i1x * 12;
				interestData.push(i1);
				i2x = (amount * interestRate) / 100;
				i2 = i2x * 12;
				interestData.push(i2);
				i3x = (amount * interestRate) / 100;
				i3m = i3x * months;
				i3d = (i3x * days) / 30;
				i3 = i3m + i3d;
				interestData.push(i3);
			} else {
				i1x = (amount * interestRate) / 100;
				i1 = i1x * 12;
				interestData.push(i1);
				i2x = (amount * interestRate) / 100;
				i2 = i2x * 12;
				interestData.push(i2);
				i3x = (amount * interestRate) / 100;
				i3m = i3x * months;
				i3d = (i3x * days) / 30;
				i3 = i3m + i3d;
				interestData.push(i3);
			}
		} else if (years == 3) {
			i1x = (amount * interestRate) / 100;
			i1 = i1x * 12;
			interestData.push(i1);
			i2x = (amount * interestRate) / 100;
			i2 = i2x * 12;
			interestData.push(i2);
			i3x = (amount * interestRate) / 100;
			i3 = i3x * 12;
			i4x = (amount * interestRate) / 100;
			i4m = i4x * months;
			i4d = (i4x * days) / 30;
			i3 = i3 + i4m + i4d;
			interestData.push(i3);
		} else {
			ry = years - 3;
			rm = ry * 12;
			rf = rm + months;
			i1x = (amount * interestRate) / 100;
			i1 = i1x * 12;
			interestData.push(i1);
			i2x = (amount * interestRate) / 100;
			i2 = i2x * 12;
			interestData.push(i2);
			i3x = (amount * interestRate) / 100;
			i3 = i3x * 12;
			i4x = (amount * interestRate) / 100;
			i4m = i4x * rf;
			i4d = (i4x * days) / 30;
			i3 = i3 + i4m + i4d;
			interestData.push(i3);
		}
	}
	let interestArray = []; 
	let count = 1;
	for (let i = 0; i < interestData.length; i++) {
		interestArray.push({ name: 'interest for ' + count + 'year(s)', value: interestData[i] });
		count++;
	}

	let totalInterest = i1 + i2 + i3;
	totalAmount = totalInterest + amount;

	let startDateFormat = new Date(startDate);
	let endDateFormat = new Date(endDate);

	let startyear = startDateFormat.getUTCFullYear();
	let startmonth = startDateFormat.getUTCMonth() + 1;
	let startday = startDateFormat.getUTCDate() + 1;


	let endyear = endDateFormat.getUTCFullYear();
	let endmonth = endDateFormat.getUTCMonth() + 1;
	let endday = endDateFormat.getUTCDate() + 1;

	const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");

	let properties = [
		{ name: 'Start Date', value: startyear + '/' + startmonth + '/' + startday },
		{ name: 'End Date', value: endyear + '/' + endmonth +'/' + endday },
		{ name: 'Total Years', value: years },
		{ name: 'Total Months', value: months },
		{ name: 'Total Days', value: days },
		{ name: 'Amount', value: addCommas(removeNonNumeric(amount)) },
		{ name: 'Interest Rate', value: interestRate },
		{ name: 'Interests', value: interestArray },
		{ name: 'Total Interest', value: Math.round(totalInterest) },
		{ name: 'Total Amount', value: addCommas(removeNonNumeric(Math.round(totalAmount))) },

	]
	onCalculationClick(properties);
}