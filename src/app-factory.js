import React, { useState } from 'react';

export default function isValidation(props) {
	let { totalYears, totalMonths, totalDays, amount, interestRate} = props;

	if( totalYears === '0' || totalMonths === '0' || totalDays === '0' || amount === '0' || interestRate === '0' ||
		totalYears === '' ||  totalMonths === '' || totalDays === '' || amount === '' || interestRate === '' ) {
		return "All fields are manditory"
	} else if(totalYears <= 0 || totalYears > 5) {
		return "Total years sould be greater than '0' and less than '5'";
	} else if(amount <= 0 ) {
		return "Amount sould be greater than '0'";
	} else if(interestRate <= 0 ) {
		return "Interest rate sould be greater than '0'";
	} 

	return '';
}

