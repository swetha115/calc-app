import React, { useState } from 'react';

export default function isValidation(props) {
	let { totalYears, totalMonths, totalDays, amount, interestRate, startDate, endDate} = props;

	if( amount === '0' || interestRate === '0' || startDate === '0' || endDate === '0' || 
	amount === '' || interestRate === '' || startDate === '' || endDate === '') {
		return "All fields are manditory"
	}
	if( totalYears === '0' && totalMonths === '0' && totalDays === '0'  ) {
		return "Please check dates entered"
	} else if(amount <= 0 ) {
		return "Amount sould be greater than '0'";
	} else if(interestRate <= 0 ) {
		return "Interest rate sould be greater than '0'";
	} 

	return '';
}

