import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addToken } from '../../store/tokens/action'
import { login } from '../../services/Service'
import { useDispatch } from 'react-redux'
import ImgLogin from '../../assets/img/Blog1.jpg'
import UserLogin from '../../models/UserLogin'
import toast from 'react-hot-toast'
import './Login.css'

function Login() {
  let navigate = useNavigate()
  const dispatch = useDispatch()

  const [token, setToken] = useState('')
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: '',
    senha: '',
    token: ''
  })

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      await login(`usuario/logar`, userLogin, setToken)
      toast.success('Usuário logado com sucesso')
    } catch (error) {
      toast.error('Dados incorretos')
    }
  }

  useEffect(() => {
    if (token != '') {
      dispatch(addToken(token))
      navigate('/home')
    }
  }, [token])

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" className='boxPai'>
      <Grid xs={6} alignItems="center">
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              align="center"
              className="textos1"
            >
              Entrar
            </Typography>
            <TextField
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to="/cadastro">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="textos1"
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem">
        <img src={ImgLogin} alt="" width="500px" height="500px" />
      </Grid>
    </Grid>
  )
}

export default Login
