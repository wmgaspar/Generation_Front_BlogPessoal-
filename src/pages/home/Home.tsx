import { Button, Grid, Typography, Box } from '@material-ui/core'
import { TokenState } from '../../store/tokens/tokenReducer'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import ModalPostagem from '../../components/postagens/modalpostagem/ModalPostagem'
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem'
import ImgHome from '../../assets/img/Blog.svg'
import toast from 'react-hot-toast'
import './Home.css'

function Home() {
  let navigate = useNavigate()
  const token = useSelector<TokenState, TokenState['tokens']>(
    state => state.tokens
  )

  useEffect(() => {
    if (token == '') {
      toast('Você precisa estar logado')
      navigate('/login')
    }
  }, [token])

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              deixe seu recado, pensamentos e opiniões!
            </Typography>
          </Box>
          <Link to="posts">
            <Box display="flex" justifyContent="center">
              <Box marginRight={1}>
                <ModalPostagem />
              </Box>
              <Button variant="outlined" className="botao">
                Ver Postagens
              </Button>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <img src={ImgHome} alt="" width="500px" height="500px" />
        </Grid>
        <Grid xs={12} className="postagem">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
