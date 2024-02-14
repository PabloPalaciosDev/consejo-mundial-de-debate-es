import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

function SobreNosotros (){
    return (
        <>
            <Box>
            <Typography variant='h3' fontWeight={'bold'} className='banner-title'>¿Quienes Somos?</Typography>
                <Grid container spacing={2} justifyContent={'center'}>
                    <Grid item xs={10} >
                        <Paper elevation={12} 
                        sx={{
                            marginTop: '20px',
                            borderRadius: '30px',
                            
                        }}
                        >
                            <Typography className='papercard-title' variant='h4' padding={'20px'} fontWeight={'bold'}>Nuestro Proposito</Typography>
                            <Grid container justifyContent={'center'} alignItems={'center'}>
                                <Grid xs={10} md={3}>
                                <SportsScoreIcon style={{'font-size': '20rem', 'color': '#EE181E'}}  />
                                </Grid>
                                <Grid xs={10} md={8}>
                                <Typography className='papercard-content' justifyContent={'left'} variant='body1' padding={'20px'} lineHeight={'2'} fontSize={'1.2rem'} textAlign={'left'}>
                                    Es un espacio dedicado a la <strong>unificación de los diversos circuitos de debate en español</strong>, concebido como un <strong>centro de desarrollo para el fortalecimiento del circuito y la práctica del debate.</strong> Su principal responsabilidad es <strong>asegurar la realización del Campeonato Mundial Universitario de Debate en Español (CMUDE)</strong>, así como gestionar proyectos destinados a impulsar y facilitar la difusión del debate competitivo en español a nivel global y en otras lenguas dentro de los países hispanohablantes.
                                    <br/>
                                    <br/>
                                    Adicionalmente, se compromete activamente en la colaboración, fomento y apoyo de los diversos circuitos de debate, tanto de forma independiente como a través de organizaciones nacionales, consejos mundiales o regionales, y cualquier entidad orientada a promover la cultura del debate. Este consejo está integrado por los países participantes en el CMUDE y es dirigido por una Mesa Directiva elegida por el propio Consejo Mundial.
                                </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={10} md={5}>
                        <Paper elevation={12} 
                        sx={{
                            marginTop: '20px',
                            borderRadius: '30px',                            
                        }}
                        >
                            <Typography className='papercard-title' variant='h4' padding={'20px'} fontWeight={'bold'}>Misión</Typography>
                            <ChecklistIcon style={{'font-size': '10rem', 'color': '#EE181E'}}  />
                            <Typography className='papercard-content' variant='body1' padding={'20px'} lineHeight={'2'} fontSize={'1.2rem'} display={'flex'} flexDirection={'column'}
                            justifyContent={'center'} textAlign={'center'}>
                            Promover la unidad de los circuitos de debate hispanohablantes, desarrollando el debate competitivo a través de asegurar la realización de CMUDE y liderar proyectos que fomenten la difusión del debate en español a nivel mundial.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={10} md={5}>
                        <Paper elevation={12} 
                        sx={{
                            marginTop: '20px',
                            borderRadius: '30px',
                            
                        }}
                        >
                            <Typography className='papercard-title' variant='h4' padding={'20px'} fontWeight={'bold'}>Visión</Typography>
                            <PsychologyAltIcon style={{'font-size': '10rem', 'color': '#EE181E'}}  />
                            <Typography className='papercard-content' variant='body1' padding={'20px'} lineHeight={'2'} fontSize={'1.2rem'} display={'flex'} flexDirection={'column'}
                            justifyContent={'center'} textAlign={'center'}>
                                Ser el referente global del debate en español, destacando por la promoción activa de la cultura del debate. Buscamos influir positivamente en la sociedad mediante el fomento del pensamiento crítico y las habilidades argumentativas.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            
        </>
    )
}

export default SobreNosotros;