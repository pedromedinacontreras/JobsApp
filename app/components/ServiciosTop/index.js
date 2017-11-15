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
  ServicioItem,
  SecondTitle,
  ServiciosList,
 } from './StyledComponents';

const allServicios = () =>
  (
    <ServiciosList>
      <ServicioItem>Carpintería</ServicioItem>
      <ServicioItem>Plomería</ServicioItem>
      <ServicioItem>Herrería</ServicioItem>
      <ServicioItem>Electricista</ServicioItem>
      <ServicioItem>Albañilería</ServicioItem>
      <ServicioItem>Cerrajería</ServicioItem>
      <ServicioItem>Mecánico</ServicioItem>
      <ServicioItem>Vulcanizadora</ServicioItem>
      <ServicioItem>Técnico en refrigeración</ServicioItem>
      <ServicioItem>Pintor</ServicioItem>
      <ServicioItem>Tapicero</ServicioItem>
      <ServicioItem>Carpintería</ServicioItem>
      <ServicioItem>Carpintería</ServicioItem>
      <ServicioItem>Carpintería</ServicioItem>
      <ServicioItem>Carpintería</ServicioItem>
      <ServicioItem>Carpintería</ServicioItem>
    </ServiciosList>
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
            <img src="http://carpinteriatablado.com/wp-content/uploads/2016/06/carpinteria_a_medida_inicio.jpg" alt="error" style={{ height: '280px' }} />
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
