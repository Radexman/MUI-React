import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { ChangeEvent, useState } from 'react';
import { Stack, Rating } from '@mui/material';

const MuiRating = () => {
	const [rating, setRating] = useState<number | null>(3);

	const handleChange = (_event: ChangeEvent<object>, newValue: number | null) => {
		setRating(newValue);
	};

	console.log({ rating });

	return (
		<Stack spacing={2}>
			<Rating
				value={rating}
				onChange={handleChange}
				precision={0.5}
				size='large'
				highlightSelectedOnly
				icon={
					<FavoriteIcon
						fontSize='inherit'
						color='error'
					/>
				}
				emptyIcon={
					<FavoriteBorderIcon
						fontSize='inherit'
						color='error'
					/>
				}
			/>
		</Stack>
	);
};

export default MuiRating;
