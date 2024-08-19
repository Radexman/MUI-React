import { Snackbar, Button, Alert, AlertProps } from '@mui/material';
import { SyntheticEvent, useState, forwardRef } from 'react';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(function SnackbarAlert(props, ref) {
	return (
		<Alert
			elevation={6}
			{...props}
		/>
	);
});

const MuiSnackbar = () => {
	const [open, setOpen] = useState(false);

	const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	return (
		<>
			<Button onClick={() => setOpen(true)}>Submit</Button>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
			>
				<SnackbarAlert
					severity='success'
					onClose={handleClose}
				>
					Form submitted successfully!
				</SnackbarAlert>
			</Snackbar>
			{/* <Snackbar
				message='Form submitted successfully!'
				autoHideDuration={4000}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
			/> */}
		</>
	);
};

export default MuiSnackbar;
