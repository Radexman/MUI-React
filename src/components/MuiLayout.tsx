import { Box } from '@mui/material';

const MuiLayout = () => {
	return (
		<>
			<Box
				sx={{
					backgroundClip: 'secondary.main',
					height: '100px',
					width: '100px',
					padding: '16px',
					'&:hover': {
						backgroundClip: 'secondary.light',
					},
				}}
			>
				Codevolution
			</Box>
			<Box
				display='flex'
				height='100px'
				width='100px'
				bgcolor='success.light'
				p={2}
			></Box>
		</>
	);
};

export default MuiLayout;
