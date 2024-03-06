import { Typography } from "@mui/material";
import CalendarioExpand from "../components/CalendarioExpand";

function CalendarioTorneos () {
  return (
    <>
      <Typography variant='h3' fontWeight={'bold'} className='banner-title'>Calendario de Torneos</Typography>
      <CalendarioExpand />
    </>
  );
}
export default CalendarioTorneos;
