import { useState } from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

function MuiTextField() {
	const [value, setValue] = useState('');

	return (
		<Stack spacing={4}>
			<Stack
				direction='row'
				spacing={2}
			>
				<TextField
					label='Name'
					variant='outlined'
				/>
				<TextField
					label='Name'
					variant='filled'
				/>
				<TextField
					label='Name'
					variant='standard'
				/>
			</Stack>
			<Stack
				direction='row'
				spacing={2}
			>
				<TextField
					label='Small secondary'
					size='small'
					color='secondary'
				/>
			</Stack>
			<Stack
				direction='row'
				spacing={2}
			>
				<TextField
					label='Form Input'
					size='small'
					value={value}
					onChange={(event) => setValue(event.target.value)}
					color='secondary'
					required
					error={!value}
					helperText={!value ? 'Required' : 'Do not share you password with anyone'}
				/>
				<TextField
					label='Password'
					type='password'
					size='small'
					color='secondary'
					helperText='Do nat share password with anyone'
					disabled
				/>
				<TextField
					label='Read only'
					InputProps={{ readOnly: true }}
				/>
			</Stack>
			<Stack
				direction='row'
				spacing={2}
			>
				<TextField
					label='Amount'
					InputProps={{
						startAdornment: <InputAdornment position='start'>$</InputAdornment>,
					}}
				/>
				<TextField
					label='Weight'
					InputProps={{
						endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
					}}
				/>
				<TextField
					label='Password'
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<VisibilityIcon />
							</InputAdornment>
						),
					}}
				/>
			</Stack>
		</Stack>
	);
}

export default MuiTextField;
