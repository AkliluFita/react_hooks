import React from 'react'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import  ButtonGroup from '@material-ui/core/ButtonGroup'
import  Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'

import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette:{
        primary:{
            main: green[400]
        },
        secondary:{
            main: orange[400]
        }
    }
})

// buttons styles
const useStyle = makeStyles({
    root:{
        background: "linear-gradient(45deg, #FE6BBB, #FF8E53)",
        border:0,
        marginBottom:15,
        borderRadius:5,
        color:"white",
        padding:"5px 30px"
    }
})

function ButtonStyle(params) {
    const classes = useStyle()
    return(
        <Button className={classes.root}>button style</Button>
    )
}


function CheckBoxExample() {
    return(
        <div>
           <Checkbox label="Label" defaultChecked />
           <Checkbox label="Label" defaultChecked size="small" />
        </div>
    )
}


function AppMaterialUl() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                    <h1>i am material ui</h1>
                    <CheckBoxExample/>
                    <ButtonGroup  size='large'variant="contained" >
                    <Button
                        startIcon={<SaveIcon/>}
                        color='primary'>
                    Success
                    </Button>
                    <Button
                        startIcon={<DeleteIcon/>}
                        color='secondary'>
                    Discard
                    </Button>
                    </ButtonGroup>

                    <ButtonStyle/>


                    <TextField 
                        id="standard-basic" 
                        label="Standard" 
                        variant="standard"
                        type="date" />

                    <TextField 
                        id="standard-basic" 
                        label="Standard" 
                        variant="standard"
                        type="time" />

            </ThemeProvider>

            <Box sx={{ border: 1 }}></Box>

        </div>
    )
}

export default AppMaterialUl





