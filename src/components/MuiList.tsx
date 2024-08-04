import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const MuiList = () => {
	return (
		<Box sx={{ width: '400px', bgcolor: '#efefef' }}>
			<List>
				<ListItem>
					<ListItemIcon>
						<ListItemAvatar>
							<Avatar>
								<MailIcon />
							</Avatar>
						</ListItemAvatar>
					</ListItemIcon>
					<ListItemText primary='List item 1'></ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<ListItemAvatar>
							<Avatar>
								<MailIcon />
							</Avatar>
						</ListItemAvatar>
					</ListItemIcon>
					<ListItemText primary='List item 2'></ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<ListItemAvatar>
							<Avatar>
								<MailIcon />
							</Avatar>
						</ListItemAvatar>
					</ListItemIcon>
					<ListItemText primary='List item 3'></ListItemText>
				</ListItem>
			</List>
		</Box>
	);
};

export default MuiList;
