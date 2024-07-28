// import MuiTypography from './components/MuiTypography';
// import MuiButton from './components/MuiButton';
// import MuiTextField from './components/MuiTextField';
// import MuiSelect from './components/MuiSelect';
// import MuiRadioButton from './components/MuiRadioButton';
import MuiCheckbox from './components/MuiCheckbox';
import styles from './App.module.css';

function App() {
	return (
		<>
			<div className={styles.app}>
				{/* <MuiTypography />
				<MuiButton />
				<MuiTextField />
				<MuiSelect />
				<MuiRadioButton /> */}
				<MuiCheckbox />
			</div>
		</>
	);
}

export default App;
