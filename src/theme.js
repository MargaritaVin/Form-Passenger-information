import { createTheme } from "@mui/material/styles";

import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";

const theme = createTheme({
    typography: {
        allVariants: {
            fontWeight: '400',
            fontSize: '18px',
            color: '#7C8DB0',
            fontFamily: 'Nunito Sans',
        },
        h3: {
            color: "#605DEC",
            fontSize: "24px",
            marginBottom: "16px",
            fontWeight: "700",
        },
        h4: {
            fontWeight: "600",
            fontSize: "18px",
            color: "#6E7491",
            marginBottom: "24px",
        }
    },
    components: {
        MuiInputBase: {
          styleOverrides: {
            root: {
                fontSize: '18px',
                color: '#7C8DB0',
                width: "300px",
                height: "48px",
            },
            sizeSmall: {
                width: "200px"
            }
          }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    margin: "0 24px 24px 0",
                }
            }
        }
      }  
});

export default theme;