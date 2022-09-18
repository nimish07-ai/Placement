import {useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import React from "react";
import { CircularProgress, Snackbar} from "@material-ui/core";
import Backdrop from '@mui/material/Backdrop';

 function CustomizedSnackbars(props) {

    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}  key={"bottom" + "center"}>
                <Alert variant="filled" onClose={handleClose}  sx={{ width: '100%' }} severity={props.severity}>
                    {`${props.message}`}
                </Alert>
            </Snackbar>
        </>
    );
}

// {sectional = true for only sectional
// Success
//Error
//showSuccess :false if u dont want it or leave it undefined
//hard: false if nundefinde 
//redirect: link
//Re true if you want to redirect
// }

export default function UpperHoc (props)
{
    let history = useHistory();
    const status = useSelector(props.Status);
    const Error = useSelector(props.Error);
    const Success = useSelector(props.Success);
    // console.log(props.redirect,Error,status,Success,"dd    ")
    // console.log(props.Re === true && Success.Success === true && (window.location.href.search("next") === -1) === false,props.Re === true , Success.Success === true , (window.location.href.search("next") === -1))

    if (status ==="loading")
    {
        if(props.sectional=== true)
        {
            return <>
                <div style={{"display":"flex","align-items":"center",justifyContent:"center"}}>
                    <CircularProgress color="success" />
                </div>
            </>
        }

        return<>
            <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                    >
                    <CircularProgress color="success" />
            </Backdrop>
        </>
    }
    else{
        return <>
            {Success.Success === false && Error.error === false &&<></>}
            {Success.Success === false && Error.error === true &&<><CustomizedSnackbars message={`${Error.error_msg}`}  severity="error" /></>}
            {props.showSuccess === undefined && Success.Success === true && Error.error === false &&<><CustomizedSnackbars message={`${Success.Success_msg}`}  severity="success" /></>}
            {props.children}
            {
                props.Re === true && Success.Success === true &&  <>
                    {
                     (()=>{
                        let redirectTo=null
                         if ((window.location.href.search("next") === -1)=== false)
                         {
                             redirectTo=window.location.href.split("next=")[1]
                         }
                         else{
                            redirectTo=props.redirect
                         }

                        if( props.hard === undefined)
                        {
                            console.log(setTimeout(ev=>{window.location.href=redirectTo},2000))
                
                        }
                        else
                        {
                            setTimeout(ev=>{history.push(redirectTo);},2000)
                        }
                     })()   
                }
                </>}
        </>


    }
}