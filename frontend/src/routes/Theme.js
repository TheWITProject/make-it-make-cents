import React from 'react';
import { createTheme } from '@mui/material';


export const MMC = createTheme({

  components:{
    MuiButton:{
      styleOverrides:{
        text:{
          primary: '#322667',  
          // fontSize: '3rem'
        
  
        }
        },
      },
    },

    palette: {
        type: 'light',
       primary: {
           main: '#322667',
           dark: '#cccad9',
       },
      secondary: {
           main: '#f7c9d5',
           dark: '#e09cc0',
         },




      },
  });
  // 
  //   
  //   text: {
  //     primary: '#322667',
  //   },
  //   divider: '#322667',

  //   },
  // })

// export default function DefaultProps() {
//   return (
//     <ThemeProvider theme={MMC}>
//       <Button>hello</Button>
//     </ThemeProvider>
//   );
// }
