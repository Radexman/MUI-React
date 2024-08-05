import { TableContainer, Table, TableHead, TableBody, TableCell, Paper, TableRow } from '@mui/material';

const MuiTable = () => {
	return (
		<TableContainer
			component={Paper}
			sx={{ maxHeight: '300px' }}
		>
			<Table
				aria-label='simple table'
				stickyHeader
			>
				<TableHead>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell>First Name</TableCell>
						<TableCell>Last Name</TableCell>
						<TableCell align='center'>Email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tableData.map((row) => (
						<TableRow
							key={row.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell>{row.id}</TableCell>
							<TableCell>{row.first_name}</TableCell>
							<TableCell>{row.last_name}</TableCell>
							<TableCell align='center'>{row.email}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

const tableData = [
	{
		id: 1,
		first_name: 'Trace',
		last_name: 'Grievson',
		email: 'tgrievson0@go.com',
		gender: 'Male',
		ip_address: '129.244.184.196',
	},
	{
		id: 2,
		first_name: 'Milt',
		last_name: 'Herrieven',
		email: 'mherrieven1@ftc.gov',
		gender: 'Male',
		ip_address: '80.148.120.230',
	},
	{
		id: 3,
		first_name: 'Peirce',
		last_name: 'Heeney',
		email: 'pheeney2@sbwire.com',
		gender: 'Male',
		ip_address: '113.42.174.22',
	},
	{
		id: 4,
		first_name: 'Elbertine',
		last_name: 'Syversen',
		email: 'esyversen3@fotki.com',
		gender: 'Female',
		ip_address: '245.36.2.255',
	},
	{
		id: 5,
		first_name: 'Gusella',
		last_name: 'Fetherston',
		email: 'gfetherston4@xrea.com',
		gender: 'Female',
		ip_address: '95.78.78.97',
	},
	{
		id: 6,
		first_name: 'Jerad',
		last_name: 'Dalgarnocht',
		email: 'jdalgarnocht5@redcross.org',
		gender: 'Male',
		ip_address: '51.13.219.76',
	},
	{
		id: 7,
		first_name: 'Penrod',
		last_name: 'Poncet',
		email: 'pponcet6@cam.ac.uk',
		gender: 'Male',
		ip_address: '202.101.144.42',
	},
	{
		id: 8,
		first_name: 'Rossy',
		last_name: 'Gunner',
		email: 'rgunner7@senate.gov',
		gender: 'Male',
		ip_address: '129.49.185.83',
	},
	{
		id: 9,
		first_name: 'Aarika',
		last_name: 'Pestricke',
		email: 'apestricke8@friendfeed.com',
		gender: 'Female',
		ip_address: '235.228.46.208',
	},
	{
		id: 10,
		first_name: 'Yorker',
		last_name: 'Brewis',
		email: 'ybrewis9@ycombinator.com',
		gender: 'Male',
		ip_address: '82.23.212.79',
	},
];

export default MuiTable;
