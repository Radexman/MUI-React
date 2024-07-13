import { Typography } from '@mui/material';

function MuiTypography() {
	return (
		<div>
			<Typography variant='h1'>h1 Heading</Typography>
			<Typography variant='h2'>h2 Heading</Typography>
			<Typography variant='h3'>h3 Heading</Typography>
			<Typography
				variant='h4'
				component='h1'
				gutterBottom
			>
				h4 Heading
			</Typography>
			<Typography variant='h5'>h5 Heading</Typography>
			<Typography variant='h6'>h6 Heading</Typography>

			<Typography variant='subtitle1'>Subtitle 1</Typography>
			<Typography variant='subtitle2'>Subtitle 2</Typography>

			<Typography>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, maxime maiores eaque distinctio
				suscipit consequuntur enim quasi dolor, officiis sapiente veritatis. Vero laudantium distinctio
				perferendis.
			</Typography>
			<Typography variant='body2'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptas veniam explicabo animi
				perferendis nesciunt officiis sequi inventore ex culpa.
			</Typography>
		</div>
	);
}

export default MuiTypography;
