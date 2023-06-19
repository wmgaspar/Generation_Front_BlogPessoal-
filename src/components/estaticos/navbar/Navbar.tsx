import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import './Navbar.css'
import React from 'react'
import { colors } from '@mui/material'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" style={{ backgroundColor: '#5b7bb2' }}>
          <Box padding={2} className="cursor">
            <Typography variant="h5" color="inherit">
              Blog Pessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                cadastrar temas
              </Typography>
            </Box>
            <Link to="/login" className="text-decoration-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  logout
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
