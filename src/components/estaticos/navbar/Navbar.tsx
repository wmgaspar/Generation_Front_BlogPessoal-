import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import React from 'react'
import { colors } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokenReducer'
import { addToken } from '../../../store/tokens/action'

function Navbar() {
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  )
  const dispatch = useDispatch()
  let navigate = useNavigate()

  function goLogout() {
    dispatch(addToken(''))
    alert('Usuário deslogado')
    navigate('/login')
  }

  var navbarComponent;

  if (token != '') {
    navbarComponent = <AppBar position="static">
    <Toolbar variant="dense" style={{ backgroundColor: '#5b7bb2' }}>
      <Box padding={2} className="cursor">
        <Typography variant="h5" color="inherit">
          Blog Pessoal
        </Typography>
      </Box>

      <Box display="flex" justifyContent="">
        <Link to='/home' className="text-decoration-none">
          <Box mx={1} className="cursor">
          <Typography variant="h6" color="inherit">
            home
          </Typography>
        </Box>
        </Link>
        <Link to='/posts' className="text-decoration-none">
          <Box mx={1} className="cursor">
          <Typography variant="h6" color="inherit">
            postagens
          </Typography>
        </Box>
        </Link>
        <Link to='/temas' className="text-decoration-none">
          <Box mx={1} className="cursor">
          <Typography variant="h6" color="inherit">
            temas
          </Typography>
        </Box>
        </Link>
        <Link to='/formularioTema' className="text-decoration-none">
          <Box mx={1} className="cursor">
          <Typography variant="h6" color="inherit">
            cadastrar temas
          </Typography>
        </Box>
        </Link>
        
          <Box mx={1} className="cursor" onClick={goLogout}>
            <Typography variant="h6" color="inherit">
              logout
            </Typography>
          </Box>
        
      </Box>
    </Toolbar>
  </AppBar>
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar
