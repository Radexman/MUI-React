import BookmarkFilledIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { ChangeEvent, useState } from 'react';
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material';

const MuiCheckbox = () => {
	const [acceptTnC, setAcceptTnc] = useState(false);
	const [skills, setSkills] = useState<string[]>([]);

	function handleChangeTnC(event: ChangeEvent<HTMLInputElement>) {
		setAcceptTnc(event.target.checked);
	}

	function handleSkillChange(event: ChangeEvent<HTMLInputElement>) {
		const skill = event.target.value;
		const index = skills.indexOf(skill);
		if (index === -1) {
			setSkills([...skills, skill]);
		} else {
			setSkills(skills.filter((skill) => skill !== skill));
		}
	}

	console.log({ skills });
	console.log({ acceptTnC });

	return (
		<Box>
			<Box>
				<FormControlLabel
					label='I accept terms and conditions'
					control={
						<Checkbox
							checked={acceptTnC}
							onChange={handleChangeTnC}
						/>
					}
				/>
			</Box>
			<Box>
				<Checkbox
					icon={<BookmarkBorderIcon />}
					checkedIcon={<BookmarkFilledIcon />}
					checked={acceptTnC}
					onChange={handleChangeTnC}
				/>
			</Box>
			<Box>
				<FormControl error>
					<FormLabel>Skills</FormLabel>
					<FormGroup row>
						<FormControlLabel
							label='html'
							value='html'
							control={
								<Checkbox
									checked={skills.includes('html')}
									onChange={handleSkillChange}
									size='small'
									color='secondary'
								/>
							}
						/>
						<FormControlLabel
							label='css'
							value='css'
							control={
								<Checkbox
									checked={skills.includes('css')}
									onChange={handleSkillChange}
									size='small'
									color='secondary'
								/>
							}
						/>
						<FormControlLabel
							label='js'
							value='js'
							control={
								<Checkbox
									checked={skills.includes('js')}
									onChange={handleSkillChange}
									size='small'
									color='secondary'
								/>
							}
						/>
					</FormGroup>
					<FormHelperText>Invalid selection</FormHelperText>
				</FormControl>
			</Box>
		</Box>
	);
};

export default MuiCheckbox;
