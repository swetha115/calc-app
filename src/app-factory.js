import React, { useState } from 'react';

export default function isValidation(props) {
	let { totalYears, totalMonths, totalDays,} = props;

	if( totalYears === '' || totalMonths === '' || totalDays === '') {
		return "All fields are manditory"
	}
	else if(totalYears <= 0 || totalYears > 5) {
		return "Total years sould be greater than '0' and less than '5'";
	} 
	return '';
}

