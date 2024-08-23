import { Stack, Skeleton, Box, Avatar, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const MuiSkeleton = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [loading]);

	return (
		<Box sx={{ width: '250px' }}>
			{loading ? (
				<Skeleton
					variant='rectangular'
					width={256}
					height={144}
					animation='wave'
				/>
			) : (
				<img
					src='https://images.unsplash.com/photo-1724217552369-22b256e395d9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='akeleton'
					width={256}
					height={144}
				/>
			)}
			<Stack
				direction='row'
				spacing={1}
				sx={{ width: '100%', marginTop: '12px' }}
			>
				{loading ? (
					<Skeleton
						variant='circular'
						width={40}
						height={40}
						animation='wave'
					/>
				) : (
					<Avatar>V</Avatar>
				)}
				<Stack sx={{ width: '80%' }}>
					{loading ? (
						<>
							<Typography variant='body1'>
								<Skeleton
									variant='text'
									width='100%'
									animation='wave'
								/>
							</Typography>
							<Typography variant='body2'>
								<Skeleton
									variant='text'
									width='100%'
									animation='wave'
								/>
							</Typography>
						</>
					) : (
						<>
							<Typography variant='body1'>React Mui Tutorial</Typography>
						</>
					)}
				</Stack>
			</Stack>
		</Box>
	);
};

export default MuiSkeleton;
