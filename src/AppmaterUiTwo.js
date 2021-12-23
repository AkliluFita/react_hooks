import React from 'react'
import {Typography, AppBar ,Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid,
Toolbar, Container} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons';

import useStyles from './componentsMaterUi2/style';


function AppmaterUiTwo() {

    const cards =[1,2,3,4,5,6,7,8,9]

    const classes =useStyles()

    return (
        <>
           <CssBaseline/>
           <AppBar position='relative'>
               <Toolbar>
                   <PhotoCamera className={classes.icon}/>
                   <Typography variant="h6">
                       photo album
                   </Typography>
               </Toolbar>
           </AppBar>
           <main>
               <div  className={classes.container}>
                   <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            photo album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            how are you i am fine and what about you ,i ma really want see you 
                            as soon as possible please. where are you now .i am very exited to see you
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        see my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        see my photos
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                   </Container>

                   <Container className={classes.cardGrid} maxWidth="md">
                       <Grid container spacing={4} >
                           {cards.map( () =>(
                               <Grid item xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                            title="Image Title"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5">
                                                heading
                                            </Typography>
                                            <Typography >
                                                this is a media card. you can use this section as you
                                                which .so be funny and free to ask any question please
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size='small' color="primary">view</Button>
                                            <Button size='small' color="primary">Edit</Button>
                                        </CardActions>
                                                
                                    </Card>

                           </Grid>
                           ))}
                       </Grid>
                   </Container>
               </div>
           </main>
           <footer className={classes.footer}>
               <Typography variant="h6" align="center" gutterBottom>
                            Footer
               </Typography>
               <Typography variant="subtitle1" align="center" color="textSecondary">
                            abdu@2021 web developer footer design
               </Typography>
           </footer>
        </>
    )
}

export default AppmaterUiTwo
