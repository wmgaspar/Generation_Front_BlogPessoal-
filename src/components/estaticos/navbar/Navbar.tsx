import {
  AppBar,
  Toolbar,
  Typography,
  Box
} from '@material-ui/core'
import React from 'react'

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense"  style={{ backgroundColor:'#5b7bb2'}}>
          <Box padding={2} borderRadius={20} style={{cursor: 'pointer' }}>
            <Typography variant="h5" color="inherit">
              Blog Pessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="">
            <Box mx={1} style={{borderRadius:20, cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                cadastrar temas
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Box>          
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
