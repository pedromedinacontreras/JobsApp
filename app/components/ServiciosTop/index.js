/**
*
* ServiciosTop
*
*/

import React from 'react';
import { CardMedia, CardTitle, Card } from 'material-ui/Card';
import {
  Title,
  TopServiciosSection,
  ServicioList,
  SecondTitle,
 } from './StyledComponents';

const allServicios = () =>
  (
    <ul>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
      <ServicioList>Carpintería</ServicioList>
    </ul>
  );

function ServiciosTop() {
  return (
    <div>
      <Title>
        Top servicios
      </Title>
      <TopServiciosSection>
        <Card style={{ maxWidth: '350px', float: 'left' }}>
          <CardMedia
            overlay={<CardTitle title="Carpintería" />}
          >
            <img src="https://i.ytimg.com/vi/Z0khfVjM2r4/hqdefault.jpg" alt="error" style={{ height: '280px' }} />
          </CardMedia>
        </Card>
        <Card style={{ maxWidth: '350px', float: 'left' }}>
          <CardMedia
            overlay={<CardTitle title="Plomería" />}
          >
            <img src="http://www.reparacioneshogar.com.ar/imagenes/plomeria-plomero.jpg" alt="error" style={{ height: '280px' }} />
          </CardMedia>
        </Card>
        <Card style={{ maxWidth: '350px', float: 'left' }}>
          <CardMedia
            overlay={<CardTitle title="Herrería" />}
          >
            <img src="http://www.renta-facil.com/assets/files/_showcaseImage/soldador.jpg" alt="error" style={{ height: '280px' }} />
          </CardMedia>
        </Card>
      </TopServiciosSection>
      <SecondTitle>
        Todos los servicios
      </SecondTitle>
      <TopServiciosSection>
        {
          allServicios()
        }
      </TopServiciosSection>
    </div>
  );
}

ServiciosTop.propTypes = {

};

export default ServiciosTop;
