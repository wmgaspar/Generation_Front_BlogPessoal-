import React from "react"
import {Button, Grid, Typography, Box} from "@material-ui/core"
import './Home.css';
import ImgHome from '../../assets/img/blog.jpg'
import TabPostagem from "../../../components/postagens/tabpostagem/TabPostagem";

function Home () {
  return (
    <>      
      <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">deixe seu recado, pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src={ImgHome} alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="postagem">
                  <TabPostagem/> 
                </Grid>
            </Grid>
    </>
  )
}

export default Home;