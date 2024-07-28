import { Box, Stack, Divider, Grid, Paper } from '@mui/material';

const MuiLayout = () => {
	return (
		<Paper
			elevation={4}
			sx={{ padding: '32px' }}
		>
			<Stack
				direction='row'
				spacing={2}
				divider={
					<Divider
						orientation='vertical'
						flexItem
					/>
				}
				sx={{ border: '1px solid' }}
			>
				<Box
					sx={{
						backgroundColor: 'primary.main',
						height: '100px',
						width: '100px',
						padding: '16px',
						'&:hover': {
							backgroundColor: 'primary.light',
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
			</Stack>
			<Grid
				container
				my={4}
				rowSpacing={2}
				columnSpacing={1}
			>
				<Grid
					item
					xs={6}
				>
					<Box
						bgcolor='primary.light'
						p={5}
					>
						Item 1
					</Box>
				</Grid>
				<Grid
					item
					xs={6}
				>
					<Box
						bgcolor='primary.light'
						p={5}
					>
						Item 2
					</Box>
				</Grid>
				<Grid
					item
					xs={6}
				>
					<Box
						bgcolor='primary.light'
						p={5}
					>
						Item 3
					</Box>
				</Grid>
				<Grid
					item
					xs={6}
				>
					<Box
						bgcolor='primary.light'
						p={5}
					>
						Item 4
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default MuiLayout;
