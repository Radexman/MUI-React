import { ChangeEvent, useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

const Select = () => {
	const [countries, setCountries] = useState<string[]>([]);

	console.log(countries);

	function handleChangeCountry(event: ChangeEvent<HTMLInputElement>) {
		const value = event.target.value;
		setCountries(typeof value === 'string' ? value.split(',') : value);
	}

	return (
		<Box width='250px'>
			<TextField
				onChange={handleChangeCountry}
				value={countries}
				fullWidth
				SelectProps={{
					multiple: true,
				}}
				label='Select country'
				select
				size='small'
				color='secondary'
				helperText='Please select your country'
				error
			>
				<MenuItem value='IN'>India</MenuItem>
				<MenuItem value='US'>USA</MenuItem>
				<MenuItem value='AU'>Australia</MenuItem>
			</TextField>
		</Box>
	);
};

export default Select;
