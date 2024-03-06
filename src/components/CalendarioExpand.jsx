import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
} from "@mui/material";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const CalendarioExpand = () => {
  const [calendario, setCalendario] = useState([]);

  useEffect(() => {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=NqpOYdDw3jrF20qyQDLCpWHOmEqYwZRKNCz6x4CdLZTwFt2Gz6ZhMEtcdLdfp715jpQx2QFNfIz4-qQckkx4n74qnkNRgocZm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAHbH2nYQZ4W3ZDFp8-CeE_OTGyFvrkvCuTVYHS5apr92psyPcuQTjMD-z4l_g7zAbKjEqmqNyvGvfpBqKlrduzX9rdibtAh0Q&lib=MG9nWJUTObWl7tRhPux-ZfNxbyX9ou6FY"
    )
      .then((response) => response.json())
      .then((data) => {
        const agrupadosPorMes = data.reduce((acc, item) => {
          // Asumiendo que item.mes ya viene en el formato deseado (e.g., "Octubre")
          const mes = item.mes;
          if (!acc[mes]) {
            acc[mes] = [];
          }
          acc[mes].push(item);
          return acc;
        }, {});

        setCalendario(agrupadosPorMes);
      })
      .catch((error) => console.log("Error:", error));
  }, []);

  console.log(calendario);

  return (
    <>
      <Grid
        container
        spacing={3}
        width={"100%"}
        justifyContent={"center"}
        padding={5}
      >
        {Object.entries(calendario).map(([mes, items]) => (
          <React.Fragment key={mes}>
            <Grid item xs={12} style={{ padding: "20px 0", textAlign: 'center', justifyContent:'center', display: 'flex' }}>
              <Typography variant="h4" component="div" sx={{ padding: 1, borderBottom: '5px dotted #074DA3', width: '90%', fontWeight: 'bold'}}>
                {mes}
              </Typography>
            </Grid>
            {items.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardHeader title={item.nombre} subheader={item.fecha} />
                  {item.img ? (
                    <CardMedia
                      component="img"
                      height="200"
                      style={{ objectFit: "scale-down", width: "100%" }}
                      image={item.img}
                      alt={item.titulo}
                    />
                  ) : (
                    <EmojiEventsIcon sx={{ fontSize: 200, color: '#074DA3' }} />
                  )}
                  <CardContent>
                    <Typography variant="h6" color="text.secondary">
                      Fecha: {item.inicio} al {item.fin}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
};
export default CalendarioExpand;
