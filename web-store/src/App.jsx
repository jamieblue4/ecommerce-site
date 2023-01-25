import React from 'react';
import { AppBar, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container, Typography, Grid } from '@material-ui/core';
import './App.css';
import Modal from './Modal.js';
import { useState } from 'react';
import './App.css';

const App = () => {

    const [openModal, setOpenModal] = useState(false)
return (
    <>
    <CssBaseline />
    <header>
    <AppBar postition="relative">
        <Toolbar>
        <Typography className="shopLogo" variant="h1">raiment</Typography>
        <Container>
 <ButtonGroup variant="contained" align="right">
    <Container className="modalSection">
        <Button variant="contained" className="openModalButton" onClick={() => {
            setOpenModal(true);
            }}>Cart</Button>
            {openModal && <Modal closeModal={(setOpenModal)} /> }
        </Container>
 </ButtonGroup>
    </Container>
        </Toolbar>
    </AppBar>
    </header>
    <main>

        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
                        <CardMedia className='cardMedia'
                            component= 'img'
                            image= 'https://images.pexels.com/photos/4065148/pexels-photo-4065148.jpeg'
                            title= 'Basic Tee'
                        />
                        <CardContent>
                            <Typography variant="h6">
                                Basic Tee
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant="h5">$17.99</Typography>
                            <Button>Add To Cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
                        <CardMedia className='cardMedia'
                            component= 'img'
                            image= 'https://images.pexels.com/photos/7787186/pexels-photo-7787186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            title= 'Blue Jeans'
                        />
                        <CardContent>
                            <Typography variant="h6">
                                Blue Jeans
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant="h5">$34.99</Typography>
                            <Button>Add To Cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
                        <CardMedia className='cardMedia'
                            component= 'img'
                            image= 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            title= 'Sneakers'
                        />
                        <CardContent>
                            <Typography variant="h6">
                                Sneakers
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant="h5">$79.99</Typography>
                            <Button>Add To Cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
                        <CardMedia className='cardMedia'
                            component= 'img'
                            image= 'https://images.pexels.com/photos/2976288/pexels-photo-2976288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            title= 'Bucket Hat'
                        />
                        <CardContent>
                            <Typography variant="h6">
                                Bucket Hat
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant="h5">$12.99</Typography>
                            <Button>Add To Cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        </main>
        <footer>

        </footer>
        </>
);
}

export default App;