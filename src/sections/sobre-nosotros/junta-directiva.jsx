import mesa_directiva from '../../assets/data/mesa-directiva.json';
import React from 'react';
import { Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import unknowguy from '../../assets/images/unknowguy.webp';
import angel from '../../assets/images/angelmoreno.webp';
import benja from '../../assets/images/benja.webp';
import fabian from '../../assets/images/fabian.webp';
import jaz from '../../assets/images/jaz.webp';
import juan from '../../assets/images/juan.webp';
import lex from '../../assets/images/lex.webp';
import mateo from '../../assets/images/mateo.webp';
import ian from '../../assets/images/nai.webp';
import santi from '../../assets/images/santi.webp';
import tlali from '../../assets/images/tlali.webp';
import '../../../node_modules/flag-icon-css/css/flag-icons.min.css';



const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function JuntaDirectiva() {
  const { Presidencia, Secretaria, Registro, Equidad, Miembros_incorporados} = mesa_directiva;

  const [expanded, setExpanded] = React.useState({});

  const handleExpandClick = (index) => {
    setExpanded(prevExpanded => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  const renderMesaDirectiva = (data, sectionName) => {
    return data.map((miembro, index) => {
      const imagesMap = {
        angel: angel,
        benja: benja,
        fabian: fabian,
        jaz: jaz,
        juan: juan,
        lex: lex,
        mateo: mateo,
        ian: ian, 
        santi: santi,
        tlali: tlali,
      };
      const flagsMap = {
        Chilena: <span className="flag-icon flag-icon-cl flag-icon-squared" style={{fontSize: '3em'}}></span>,
        Colombiana:  <span className="flag-icon flag-icon-co flag-icon-squared" style={{fontSize: '3em'}}></span>,
        Mexicana:  <span className="flag-icon flag-icon-mx flag-icon-squared" style={{fontSize: '3em'}}></span>,
        Peruana: <span className="flag-icon flag-icon-pe flag-icon-squared" style={{fontSize: '3em'}}></span>,
        Panameña: <span className="flag-icon flag-icon-pa flag-icon-squared" style={{fontSize: '3em'}}></span>,
      };
      const image = imagesMap[miembro.img] || unknowguy;
      const flag = flagsMap[miembro.nacionalidad] || '';
      const uniqueId = `${sectionName}-${index}`;
      return (  
      <Grid key={uniqueId} md={4} xs={12} justifyContent={'center'} alignItems={'center'} width={'100%'}>
      <Card sx={{ maxWidth: '100%', margin: '10px'}}>
      <CardHeader
        avatar={
          <Grid display={'flex'} alignItems={'center'} gap={2}>
            <Avatar  aria-label="flag">
              {flag}
            </Avatar>
            <Typography variant="h6" color="text.secondary">
              {miembro.cargo}
            </Typography>
          </Grid>
        }
      />
      <CardMedia
        component="img"
        height="400"
        image={image}
        style={{ objectFit: 'scale-down', width: '100%', }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'}>
          {miembro.Nombre}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded[uniqueId]}
          onClick={() => handleExpandClick(uniqueId)}
          aria-expanded={expanded[uniqueId] || false}
          aria-label="show more"
        >
          <ExpandMoreIcon className='flotar' sx={{fontSize: '3rem', color: '#074DA3'}}/>
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded[uniqueId] || false} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><strong>BIOGRAFÍA</strong></Typography>
          <Typography sx={{textAlign: 'justify', lineHeight: '1.7'}}>
            {miembro.descripcion}
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
    </Grid>
    );
  });
};

  return (
    <>
    <Typography variant='h3' fontWeight={'bold'} className='banner-title'>Junta Directiva</Typography>
    <Grid container gap={2} justifyContent={'center'} paddingTop={'2rem'}>
      {renderMesaDirectiva(Presidencia, 'Presidencia')}
      {renderMesaDirectiva(Secretaria, 'Secretaria')}
      {renderMesaDirectiva(Registro, 'Registro')}
      {renderMesaDirectiva(Equidad, 'Equidad')}
      {renderMesaDirectiva(Miembros_incorporados, 'Miembros Incorporados')}
    </Grid>
    </>
  );
}

export default JuntaDirectiva;