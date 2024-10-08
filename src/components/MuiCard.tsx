import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';

const MuiCard = () => {
	return (
		<Box width='300px'>
			<Card>
				<CardMedia
					component='img'
					height='140px'
					image='https://source.unsplash.com/random'
					alt='unsplash image'
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
					>
						React
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
					>
						React is a JavaScript library for building use interfaces. React can be used as base in the
						development of single-page or mobile applications.
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small'>Share</Button>
					<Button size='small'>Learn More</Button>
				</CardActions>
			</Card>
		</Box>
	);
};

export default MuiCard;
