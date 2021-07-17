import React, { useState } from 'react';

export default function isValidation(props) {
	let { totalYears, totalMonths, totalDays,} = props;
	if(totalYears <= 0 || totalYears > 5) {
		return "Total years sould be greater than '0' and less than '5'";
	} else if(totalMonths <= 0 || totalMonths > 12) {
		return "Total months sould be greater than '0' and less than 12";
	} else if(totalDays <= 0 || totalDays > 30) {
		return "Total days sould be greater than '0' and less than 30";
	}

	return '';
}

