import { ChangeEvent, useState } from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';

const MuiSwitch = () => {
	const [checked, setChecked] = useState(false);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	console.log({ checked });

	return (
		<Box>
			<FormControlLabel
				label='Dark mode'
				control={
					<Switch
						checked={checked}
						onChange={handleChange}
						size='small'
						color='success'
					/>
				}
			/>
		</Box>
	);
};

export default MuiSwitch;
