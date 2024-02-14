import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import paises_miembros from '../assets/data/paises-miembros.json';

function PaisesMiembros() {

  const { EstatusA, EstatusB, EstatusC } = paises_miembros;

  const renderPaisesMiembros = (data, statusType) => {
    return data.map((pais, index) => {

      const flagsMap = {
        Chile: <span className="flag-icon flag-icon-cl flag-icon-squared" style={{fontSize: '12rem', borderRadius:'150px'}}></span>,
        Colombia: <span className="flag-icon flag-icon-co flag-icon-squared" style={{fontSize: '12rem', borderRadius:'150px'}}></span>,
        Ecuador: <span className="flag-icon flag-icon-ec flag-icon-squared" style={{fontSize: '12rem', borderRadius:'150px'}}></span>,
        México: <span className="flag-icon flag-icon-mx flag-icon-squared" style={{fontSize: '12rem', borderRadius:'150px'}}></span>,
        Peru: <span className="flag-icon flag-icon-pe flag-icon-squared" style={{fontSize: '12rem', borderRadius:'150px'}}></span>,
        Venezuela: <span className="flag-icon flag-icon-ve flag-icon-squared" style={{fontSize: '12rem', borderRadius:'150px'}}></span>,
        España: <span className="flag-icon flag-icon-es flag-icon-squared" style={{fontSize: '12rem', borderRadius:'150px'}}></span>,
        Perú: <span className="flag-icon flag-icon-pe flag-icon-squared" style={{fontSize: '12rem', borderRadius:'150px'}}></span>,
        'Costa Rica': <span className="flag-icon flag-icon-cr flag-icon-squared" style={{fontSize: '12rem', borderRadius:'150px'}}></span>,
        Guatemala: <span className="flag-icon flag-icon-gt flag-icon-squared" style={{fontSize: '12rem', borderRadius:'150px'}}></span>,
        Panamá: <span className="flag-icon flag-icon-pa flag-icon-squared" style={{fontSize: '12rem', borderRadius:'150px'}}></span>,
        'Estados Unidos': <span className="flag-icon flag-icon-us flag-icon-squared" style={{fontSize: '12rem', borderRadius:'150px'}}></span>,
        'República Dominicana': <span className="flag-icon flag-icon-do flag-icon-squared" style={{fontSize: '12rem', borderRadius:'150px'}}></span>,
      };

      const flag = flagsMap[pais.pais] || '';
      const uniqueId = `${statusType}-${index}`;
      return (
        <Grid key={uniqueId} md={4} xs={12} justifyContent={'center'} alignItems={'center'} width={'100%'}>
          <Card sx={{ maxWidth: '100%', margin: '10px'}}>
              <CardContent>
                {flag}
                <br/>
                <br/>
                <Typography variant="h4" component="div" fontWeight={'bold'}>
                  {pais.pais}
                </Typography>
                <Typography  variant="h6" component="div" color={'text.secondary'}>
                  Estatus: {pais.Estatus}
                </Typography>
              </CardContent>
          </Card>
        </Grid>
      );
    });
  }


  return (
    <>
      <Typography variant='h3' fontWeight={'bold'} className='banner-title'>Países Miembros</Typography>
      <Grid container gap={2} justifyContent={'center'} paddingTop={'2rem'}>
        {renderPaisesMiembros(EstatusA, 'EstatusA')}
        {renderPaisesMiembros(EstatusB, 'EstatusB')}
        {renderPaisesMiembros(EstatusC, 'EstatusC')}
      </Grid>
    </>
  );
}

export default PaisesMiembros;