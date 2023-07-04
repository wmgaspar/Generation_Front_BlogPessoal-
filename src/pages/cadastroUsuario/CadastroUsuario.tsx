import React, { ChangeEvent, useEffect, useState } from 'react'
import './CadastroUsuario.css'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import User from '../../models/User'
import { cadastroUsuario } from '../../services/Service'
import toast from 'react-hot-toast'
import ImgCadastro from '../../assets/img/check.jpg'

function CadastroUsuario() {
  let navigate = useNavigate()
  const [confirmarSenha, setConfirmarSenha] = useState<String>('')
  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: ''
  })

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: ''
  })

  useEffect(() => {
    if (userResult.id != 0) {
      navigate('/login')
    }
  }, [userResult])

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (confirmarSenha == user.senha) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
      toast.success('Usuario cadastrado com sucesso')
    } else {
      toast.error('Dados inconsistentes.')
    }
  }
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} >
        <img src={ImgCadastro} alt="" className="imagem" />
      </Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
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
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="senha com 8 dígitos"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
              id="confirmarSenha"
              label="confirmar senha com 8 dígitos"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none2">
                <Button
                  variant="contained"
                  color="secondary"
                  className="botaoCancelar"
                >
                  Cancelar
                </Button>
              </Link>
              <Link to="/home" className="text-decorator-none2">
                <Button type="submit" variant="contained" color="primary">
                  Cadastrar
                </Button>
              </Link>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CadastroUsuario
