import * as React from 'react';
import Stack from '@mui/material/Stack';
//import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Button } from '../products/styles';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({handleAddToCart,open,close}) {
 // const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button whileTap={{ scale: 0.8 }} type="button" onClick={handleAddToCart} >
        Comprar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={close}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Producto agregado al carrito!
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
  );
}
