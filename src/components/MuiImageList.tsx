import { Stack, ImageList, ImageListItem } from '@mui/material';
import breakfast from '../assets/breakfast.jpg';
import burger from '../assets/burger.jpg';
import camera from '../assets/camera.jpg';
import coffee from '../assets/coffee.jpg';
import hats from '../assets/hats.jpg';
import honey from '../assets/honey.jpg';
import basketball from '../assets/basketball.jpg';
import fern from '../assets/fern.jpg';
import mushrooms from '../assets/mushrooms.jpg';
import tomatobasil from '../assets/tomatobasil.jpg';
import seastar from '../assets/seastar.jpg';
import bike from '../assets/bike.jpg';

const MuiImageList = () => {
	return (
		<Stack spacing={4}>
			<ImageList>
				{itemData.map((item) => (
					<ImageListItem key={item.name}>
						<img
							src={item.url}
							alt={item.name}
							loading='lazy'
						/>
					</ImageListItem>
				))}
			</ImageList>
			<ImageList
				variant='woven'
				gap={8}
			>
				{itemData.map((item) => (
					<ImageListItem key={item.name}>
						<img
							src={item.url}
							alt={item.name}
							loading='lazy'
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Stack>
	);
};

const itemData = [
	{
		url: breakfast,
		name: 'Breakfast',
	},
	{
		url: burger,
		name: 'Burger',
	},
	{
		url: camera,
		name: 'Camera',
	},
	{
		url: coffee,
		name: 'Coffee',
	},
	{
		url: hats,
		name: 'Hats',
	},
	{
		url: honey,
		name: 'Honey',
	},
	{
		url: basketball,
		name: 'Basketball',
	},
	{
		url: fern,
		name: 'Fern',
	},
	{
		url: mushrooms,
		name: 'Mushrooms',
	},
	{
		url: tomatobasil,
		name: 'Tomat Basil',
	},
	{
		url: seastar,
		name: 'Sea Star',
	},
	{
		url: bike,
		name: 'Bike',
	},
];

export default MuiImageList;
