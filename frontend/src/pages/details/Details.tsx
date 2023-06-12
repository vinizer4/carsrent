 import * as React from "react"; 
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, IconButton, Grid } from "@mui/material";
import { colorRed } from "../../core/utils/const/consts";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { colorSoftBlack } from "../../core/utils/const/consts";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { Link } from 'react-router-dom';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import SensorsIcon from '@mui/icons-material/Sensors';
import PreviewIcon from '@mui/icons-material/Preview';
import { CidadeService } from "../../core/service/cidade/CIdadeService";
import { ProductService } from "../../core/service/product/ProductService";
import { ImageService } from "../../core/service/image/ImageService";
/* import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'; */
import { useParams } from "react-router-dom";

const theme = createTheme();

export default function Details() {

const [product, setProduct] = useState([]);
const [image, setImage] = useState([]);
const [cidade, setCidade] = useState([]);
const [nomeProduto, setNomeProduto] = useState("");
const [descricao, setDescricao] = useState("");

const { id } = useParams();

async function getProductById(id: any) {
  try {
    const res = await ProductService.GetProductById(id);
    setProduct(res?.data);
  } catch (err) {
    console.log(err);
  }
}

async function getCidadeById(id: any) {
  try {
    const res = await CidadeService.GetCidadeById(id);
    setCidade(res?.data);
  } catch (err) {
    console.log(err);
  }
}

async function getImageById(id: any) {
  try {
    const res = await ImageService.GetImageById(id);
    setImage(res?.data);
  } catch (err) {
    console.log(err);
  }
}

useEffect(()=> {
  getCidadeById(id);
  getProductById(id);
  getImageById(id); 
})


  return (
    <>
      <ThemeProvider theme={theme}>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{ backgroundColor: colorRed, padding: "1rem" }}
          position="static"
        >
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {product?.nome}
            </Typography>
             <div>
               <Link style={{color: 'white'}} to="/"> <ArrowBackIosOutlinedIcon/> </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
          <PlaceOutlinedIcon/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '1rem'}}>
               {cidade.nome} - {cidade.pais}
            </Typography>
            <div style={{ display: 'flex' }} >
              <div style={{display: 'grid'}}>
                <span style={{textAlign:'center'}} > Muito Bom </span>
              <div style={{color: colorRed}}>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>              
              <StarBorderOutlinedIcon/>
              </div>
              </div>
              
              <div style={{display: 'flex'}}>
                <h4 style={{ padding: '5px', marginLeft: '15px', marginTop: '5px', backgroundColor: colorSoftBlack, color: 'white', borderRadius: '10px', width: '3rem', textAlign: 'center'}}>
                  8
                </h4>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ padding: "0.5rem" }}>
        <IconButton aria-label="Salvar">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Compartilhar">
          <ShareIcon />
        </IconButton>
      </div>
      <Box padding="2rem" overflow="auto">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={image.url}
              alt="Imagem"
              style={{ width: "100%", borderRadius:'15px'}}
            />
          </Grid>
          <Grid item xs={12} md={6} container spacing={2}>
            <Grid item xs={6}>
              <img
                src={image.url}
                alt="Imagem"
                style={{ width: "100%", borderRadius:'15px' }}
              />
            </Grid>
            <Grid item xs={6}>
              <img
                src={image.url}
                alt="Imagem"
                style={{ width: "100%", borderRadius:'15px' }}
              />
            </Grid>
            <Grid item xs={6}>
              <img
                src={image.url}
                alt="Imagem"
                style={{ width: "100%", borderRadius:'15px' }}
              />
            </Grid>
            <Grid item xs={6}>
              <img
                src={image.url}
                alt="Imagem"
                style={{ width: "100%", borderRadius:'15px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Typography
        text-align="center"
        justify-content="center"
        margin="2rem"
        variant="h4"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        Saiba mais sobre o carro:
      </Typography>
      <Typography
        text-align="justify"
        margin="2rem"
        font-size="30px"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        {product.descricao}
      </Typography>
      <Typography
        text-align="center"
        justify-content="center"
        margin="2rem"
        variant="h4"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        Características:
      </Typography>

      <div style={{display: 'flex', gap: '12rem', marginBottom: '2rem', marginLeft: '2rem', marginRight: '2rem'}}>
        <div>
          <NoCrashIcon/>
          <span style={{marginLeft: '0.5rem'}}>Airbag</span>
        </div>
        <div>
          <AcUnitIcon/>
          <span style={{marginLeft: '0.5rem'}}>Ar condicionado</span>
        </div>
        <div>
          <AddLocationIcon/>
          <span style={{marginLeft: '0.5rem'}} >GPS Integrado</span>
        </div>
{/*         <div>
          <SensorsIcon/>   
          <span style={{marginLeft: '0.5rem'}} >Sensor de Estacionamento</span>
        </div>
        <div>
          <PreviewIcon/>
          <span style={{marginLeft: '0.5rem'}}>Retrovisor Fotocrômico</span>
        </div> */}
      </div>
      <div style={{ backgroundColor: "rgb(243, 243, 243)" }}>
        <Typography
        text-align="center"
        justify-content="center"
        margin="2rem"
        variant="h4"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        Datas disponíveis:
      </Typography>
      </div>

  {/*     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
      </LocalizationProvider> */}

      <div>
        <Typography
        text-align="center"
        justify-content="center"
        margin="2rem"
        variant="h4"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        Onde você vai estar?
      </Typography>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img style={{width: '95%'}} src="\src\core\assets\mapa.png" alt="" />
      </div>
      </div>

      <div>
      <Typography
        text-align="center"
        justify-content="center"
        margin="2rem"
        variant="h4"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        O que você precisa saber:
      </Typography>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div>
          <h5>
            Regras da Empresa
          </h5>
          <p>

          </p>
        </div>
        <div>
          <h5>
            Segurança
          </h5>
        </div>
        <div>
          <h5>
            Política de Cancelamento
          </h5>
        </div>
      </div>
      </div>

      


      </ThemeProvider> 
    </>
  );
 }
