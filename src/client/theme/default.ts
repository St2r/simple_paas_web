import { createTheme } from '@mui/material';
import { blue, orange } from '@mui/material/colors';

const defaultTheme = createTheme({
  palette: {
    primary: blue,
    secondary: orange,
    info: orange,
  },
});

export default defaultTheme;
