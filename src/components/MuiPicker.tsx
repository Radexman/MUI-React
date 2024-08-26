import { useState } from 'react';
import { Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

const MuiPicker = () => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	const date = new Date();

	return (
		<Stack
			spacing={4}
			sx={{ width: '250px' }}
		>
			<DatePicker
				label='Date Picker'
				value={date}
			/>
		</Stack>
	);
};

export default MuiPicker;
