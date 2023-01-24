import React from 'react';
import { AppBar, Button, ButtonGroup, Toolbar, Container, Typography, Grid } from '@material-ui/core';


const App = () => {
return (
    <>
    <AppBar postition="relative" justifyContent="inline">
        <Toolbar>
        <Typography variant="h4" justifyContent="inline">Record Shop</Typography>
        <Container>
 <ButtonGroup variant="contained" align="right">
    <Button>
        Home
    </Button>
    <Button>
        Shop
    </Button>
    <Button>
        Sign In
    </Button>
    <Button>
        Your Cart
    </Button>
 </ButtonGroup>
    </Container>
        </Toolbar>
    </AppBar>
    <main>
        <Container>

        </Container>
        <Container>
            <Grid>
                <Grid item>

                </Grid>
            </Grid>
        </Container>
        </main>
        </>
);
}

export default App;