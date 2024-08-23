import { Stack, CircularProgress, LinearProgress } from '@mui/material';

const MuiProgress = () => {
	return (
		<Stack spacing={2}>
			<CircularProgress />
			<CircularProgress
				variant='determinate'
				value={60}
			/>
			<CircularProgress color='success' />
			<LinearProgress />
			<LinearProgress color='error' />
			<LinearProgress
				variant='determinate'
				value={60}
			/>
		</Stack>
	);
};

export default MuiProgress;
