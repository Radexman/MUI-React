import { ChangeEvent, useState } from 'react';
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material';

const RadioButton = () => {
	const [value, setValue] = useState('0-2');

	function handleChangeExp(event: ChangeEvent<HTMLInputElement>) {
		setValue(event.target.value);
	}

	console.log({ value });

	return (
		<Box>
			<FormControl error>
				<FormLabel id='job-experience-group-label'>Years of experience</FormLabel>
				<RadioGroup
					value={value}
					onChange={handleChangeExp}
					name='job-experience-group'
					aria-labelledby='job-experience-group-label'
					row
				>
					<FormControlLabel
						control={
							<Radio
								size='small'
								color='secondary'
							/>
						}
						label='0-2'
						value='0-2'
					/>
					<FormControlLabel
						control={
							<Radio
								size='small'
								color='secondary'
							/>
						}
						label='3-5'
						value='3-5'
					/>
					<FormControlLabel
						control={
							<Radio
								size='small'
								color='secondary'
							/>
						}
						label='6-10'
						value='6-10'
					/>
				</RadioGroup>
				<FormHelperText>Invalid Selection</FormHelperText>
			</FormControl>
		</Box>
	);
};

export default RadioButton;
