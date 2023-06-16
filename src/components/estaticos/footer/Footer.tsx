import React from 'react';
import {Grid, Box, Typography} from '@material-ui/core';
import  GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer () {
  return (
    <>  
      <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#5b7bb2", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-me nas redes sociais</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/wesley-gaspar-5bb611265/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="https://github.com/wmgaspar" target="_blank">
                                <GitHubIcon style={{ fontSize:30, color: "white" }} />
                            </a>                            
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#82b1ff", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>                           
                          <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Desenvolvido por Wesley Gaspar</Typography>                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    </>
  )
}

export default Footer;