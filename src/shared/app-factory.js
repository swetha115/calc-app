import React, { useState } from 'react';

function isValidation(props) {

	let { amount, interestRate, startDate, endDate } = props;


	let startDateFormat = new Date(startDate);
	let endDateFormat = new Date(endDate);

	let startyear = startDateFormat.getFullYear();
	let startmonth = startDateFormat.getMonth() + 1;
	let startday = startDateFormat.getDate();

	let endyear = endDateFormat.getFullYear();
	let endmonth = endDateFormat.getMonth() + 1;
	let endday = endDateFormat.getDate();

	if (amount === '0' || interestRate === '0' || startDate === null || endDate === null ||
		amount === '' || interestRate === '') {
		return "All fields are manditory"
	}

	if ((startyear > endyear) ||
		(startyear == endyear && startmonth > endmonth) ||
		(startmonth == endmonth && startday > endday)) {
		return "Please check dates entered";
	}

	if(startmonth > 12 || endmonth > 12 || startday > 31 ||endday > 31 ) {
		return "Please check dates entered";
	}

	let { years, months, days } = getStartAndEndDetails({ startyear, startmonth, startday, endyear, endmonth, endday });

	if (years === 0 && months === 0 && days === 0) {
		return "Please check dates entered"
	} else if (amount <= 0) {
		return "Amount sould be greater than '0'";
	} else if (interestRate <= 0) {
		return "Interest rate sould be greater than '0'";
	}

	return '';
}

export function isCalculateButtonDisabled(props) {
	let { amount, interestRate, startDate, endDate } = props;
	let startDateFormat = new Date(startDate);
	let endDateFormat = new Date(endDate);

	let startyear = startDateFormat.getFullYear();
	let startmonth = startDateFormat.getMonth() + 1;
	let startday = startDateFormat.getDate();

	let endyear = endDateFormat.getFullYear();
	let endmonth = endDateFormat.getMonth() + 1;
	let endday = endDateFormat.getDate();

	let { years, months, days } = getStartAndEndDetails({ startyear, startmonth, startday, endyear, endmonth, endday });

	if (amount === '0' || interestRate === '0' || startDate === null || endDate === null ||
		amount === '' || interestRate === '') {
		return true;
	}

	
	if ((startyear > endyear) ||
		(startyear == endyear && startmonth > endmonth) ||
		(startmonth == endmonth && startday > endday)) {
		return true;
	}

	if(startmonth > 12 || endmonth > 12 || startday > 31 ||endday > 31 ) {
		return true;
	}

	if (years === 0 && months === 0 && days === 0) {
		return true;
	} else if (amount <= 0) {
		return true;
	} else if (interestRate <= 0) {
		return true;
	}

	return false;
}

function getStartAndEndDetails(props) {
	let { startyear, startmonth, startday, endyear, endmonth, endday } = props;


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

	return { years, months, days };
}

export default isValidation;


