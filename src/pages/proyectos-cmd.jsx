import React from "react";
import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import proyectos from "../assets/data/proyectos-cmd.json";
//iconos
import SchoolIcon from '@mui/icons-material/School';
import UpdateIcon from '@mui/icons-material/Update';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WebIcon from '@mui/icons-material/Web';
import BalanceIcon from '@mui/icons-material/Balance';
import { Forum } from "@mui/icons-material";

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ProyectosCmd() {
  const { Proyectos } = proyectos;

  const [expanded, setExpanded] = React.useState({});

  const handleExpandClick = (index) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };
  const renderProyectoCmd = (data) => {
    return data.map((proyecto, index) => {

      const iconsMap = {
        escuela : <SchoolIcon sx={{ fontSize: 150, color: '#EB1820' }} />,
        update : <UpdateIcon sx={{ fontSize: 150, color: '#EB1820' }} />,
        apoyo: <Diversity3Icon sx={{ fontSize: 150, color: '#EB1820' }} />,
        web: <WebIcon sx={{ fontSize: 150, color: '#EB1820' }} />,
        panams: <BalanceIcon sx={{ fontSize: 150, color: '#EB1820' }} />,
        foros: <Forum sx={{ fontSize: 150, color: '#EB1820' }} />,
        institucionalizacion: <SchoolIcon sx={{ fontSize: 150, color: '#EB1820' }} />
      }

      const icono = iconsMap[proyecto.icono] || '';

      return (
        <Grid
          key={index}
          md={4}
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Card sx={{ maxWidth: "100%", margin: "10px"}}>
            {icono}
            <CardContent sx={{padding: 0}}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={"bold"}
              >
                {proyecto.titulo}
              </Typography>
            </CardContent>

            <CardActions disableSpacing sx={{padding: 0}}>
              <ExpandMore
                expand={expanded[index]}
                onClick={() => handleExpandClick(index)}
                aria-expanded={expanded[index] || false}
                aria-label="show more"
              >
                <ExpandMoreIcon
                  className="flotar"
                  sx={{ fontSize: "3rem", color: "#074DA3" }}
                />
              </ExpandMore>
            </CardActions>

            <Collapse
              in={expanded[index] || false}
              timeout="auto"
              unmountOnExit
            >
              <CardContent>
                <Typography paragraph>
                  <strong>¿De qué trata?</strong>
                </Typography>
                <Typography sx={{ textAlign: "justify", lineHeight: "1.7" }}>
                  {proyecto.descripcion}
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
      <Typography variant="h3" fontWeight={"bold"} className="banner-title">
        Proyectos
      </Typography>
      <Grid
        container
        gap={1}
        justifyContent={"center"}
        paddingTop={"2rem"}
      >
        {renderProyectoCmd(Proyectos)}
      </Grid>
    </>
  );
}

export default ProyectosCmd;
