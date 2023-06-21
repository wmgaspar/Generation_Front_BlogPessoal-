import React from 'react'
import './Footer.css'
import { Grid, Box, Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className="textos"
              >
                Siga-me nas redes sociais
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://www.linkedin.com/in/wesley-gaspar-5bb611265/"
                target="_blank"
              >
                <LinkedInIcon className="linkedin" />
              </a>
              <a href="https://github.com/wmgaspar" target="_blank">
                <GitHubIcon className="github" />
              </a>
            </Box>
          </Box>
          <Box className="box2">
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className="textos"
              >
                © 2023 Copyright:
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                gutterBottom
                className="textos"
                align="center"
              >
                Desenvolvido por Wesley Gaspar 🤟🏼{' '}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer
