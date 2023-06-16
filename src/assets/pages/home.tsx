import React from "react"
import {Button, Grid, Typography, Box} from "@material-ui/core"
import './Home.css';

function Home () {
  return (
    <>      
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#5b7bb2" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>deixe seu recado, pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ border:0, background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', height: 48, padding: '0 30px',boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', borderRadius:3, color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
    </>
  )
}

export default Home;