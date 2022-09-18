import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';

import Password_Rest from "../passwordReset/PasswordReset"
import {  Route,
    withRouter} from "react-router";


class Settings extends React.Component {

    constructor(props) {
        super(props);


    }
    changehistory(expanded,to)
    {
        if(expanded)
        {
            this.props.history.push(`/auth/settings/${to}/`);
        }
        else
        {
            this.props.history.push(`/auth/settings/`);
        }

    }

render() {
return <>
{/*<Container maxWidth="xl">*/}
{/*<Box sx={{ width: '100%',padding:"5% 5% " }}>*/}
{/*    <Grid container   direction="column" rowSpacing={2} columnSpacing={ 3 }>*/}
{/*        <Grid item xs={12}>*/}
{/*            <Accordion  onChange={(ev1,ev2)=>{this.changehistory(ev2,"password_reset")}}>*/}
{/*                <AccordionSummary*/}
{/*                expandIcon={<ExpandMoreIcon />}*/}
{/*                aria-controls="panel1a-content"*/}
{/*                id="panel1a-header"*/}
{/*                >*/}
{/*                    <Typography>Accordion 1</Typography>*/}
{/*                    </AccordionSummary>*/}
{/*                <AccordionDetails>*/}
{/*                <Route path="/auth/settings/password_reset/">*/}
{/*                    <Password_Rest />     */}
{/*                </Route>*/}

{/*                </AccordionDetails>*/}
{/*            </Accordion>*/}
{/*        </Grid>*/}
{/*        <Grid item xs={12}>*/}
{/*            <Accordion>*/}
{/*                <AccordionSummary*/}
{/*                expandIcon={<ExpandMoreIcon />}*/}
{/*                aria-controls="panel1a-content"*/}
{/*                id="panel1a-header"*/}
{/*                >*/}
{/*                    <Typography>Accordion 1</Typography>*/}
{/*                </AccordionSummary>*/}
{/*                <AccordionDetails>*/}
{/*                    <Typography>*/}
{/*                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
{/*                        malesuada lacus ex, sit amet blandit leo lobortis eget.*/}
{/*                    </Typography>*/}
{/*                </AccordionDetails>*/}
{/*            </Accordion>*/}
{/*        </Grid>*/}
{/*        */}
{/*    </Grid>*/}
{/*</Box>*/}
{/*</Container>*/}
</>
}
}


export default  withRouter(Settings);