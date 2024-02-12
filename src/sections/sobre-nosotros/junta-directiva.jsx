import mesa_directiva from '../../assets/data/mesa-directiva.json';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import unknowguy from '../../assets/images/unknowguy.webp';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
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
      const uniqueId = `${sectionName}-${index}`;
      return (  
      <Grid key={uniqueId} md={4} xs={12} justifyContent={'center'} alignItems={'center'} width={'100%'}>
      <Card sx={{ maxWidth: '100%', margin: '10px'}}>
      <CardMedia
        component="img"
        height="300"
        image={unknowguy}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {miembro.Nombre}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {miembro.cargo}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded[uniqueId]}
          onClick={() => handleExpandClick(uniqueId)}
          aria-expanded={expanded[uniqueId] || false}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded[uniqueId] || false} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Biografía</Typography>
          <Typography paragraph>
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