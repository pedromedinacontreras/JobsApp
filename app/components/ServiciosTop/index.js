

/**
*
* ServiciosTop
*
*/

import React from 'react';
import BuildIcon from 'material-ui/svg-icons/action/build';
import Avatar from 'material-ui/Avatar';
import {
  ServiciosTopSection,
  Title,
  TopServiciosSection,
  ServicioItem,
  SecondTitle,
  ServiciosList,
  LogoPrincipalSection,
  LogoText,
  LogoSubText,
  ServicioTop,
  ServicioTopLabel,
  StateColumn,
  StateItem,
  StatesSection,
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
    </ServiciosList>
  );

const allStates = () =>
  (
    <StatesSection>
      <StateColumn>
        <StateItem>Baja California Norte</StateItem>
        <StateItem>Baja California Sur</StateItem>
        <StateItem>Sonora</StateItem>
        <StateItem>Chihuahua</StateItem>
        <StateItem>Sinaloa</StateItem>
        <StateItem>Durango</StateItem>
        <StateItem>Jalisco</StateItem>
        <StateItem>Nuevo León</StateItem>
      </StateColumn>
      <StateColumn>
        <StateItem>Sinaloa</StateItem>
        <StateItem>Durango</StateItem>
        <StateItem>Jalisco</StateItem>
        <StateItem>Nuevo León</StateItem>
        <StateItem>Baja California Norte</StateItem>
        <StateItem>Baja California Sur</StateItem>
        <StateItem>Sonora</StateItem>
        <StateItem>Chihuahua</StateItem>
      </StateColumn>
      <StateColumn>
        <StateItem>Baja California Norte</StateItem>
        <StateItem>Baja California Sur</StateItem>
        <StateItem>Sonora</StateItem>
        <StateItem>Chihuahua</StateItem>
        <StateItem>Sinaloa</StateItem>
        <StateItem>Durango</StateItem>
        <StateItem>Jalisco</StateItem>
        <StateItem>Nuevo León</StateItem>
      </StateColumn>
    </StatesSection>
  );

function ServiciosTop() {
  return (
    <ServiciosTopSection>
      <LogoPrincipalSection>
        <div>
          <LogoText>
            Servicios mx
            <BuildIcon
              style={{ width: 50, height: 50, marginLeft: 30 }}
              color="#01579b"
            />
          </LogoText>
          <LogoSubText>Un lugar para encontrar trabajadores</LogoSubText>
        </div>
      </LogoPrincipalSection>
      <Title>
        Top servicios
      </Title>
      <TopServiciosSection>
        <ServicioTop>
          <Avatar style={{ border: '7px solid #01579b', padding: 16, backgroundColor: 'white', cursor: 'pointer' }} size={200} src="https://www.dibujosparacoloreargratis.com/foto/personas/oficios/electricista_2.JPG" />
          <ServicioTopLabel>Electricista</ServicioTopLabel>
        </ServicioTop>
        <ServicioTop>
          <Avatar style={{ border: '7px solid #01579b', padding: 16, backgroundColor: 'white', cursor: 'pointer' }} size={200} src="https://www.educima.com/dibujo-para-colorear-albanil-dm5712.jpg" />
          <ServicioTopLabel>Albañil</ServicioTopLabel>
        </ServicioTop>
        <ServicioTop>
          <Avatar style={{ border: '7px solid #01579b', padding: 16, backgroundColor: 'white', cursor: 'pointer' }} size={200} src="http://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2015/12/construction-painter-coloring-page.jpg" />
          <ServicioTopLabel>Pintor</ServicioTopLabel>
        </ServicioTop>
      </TopServiciosSection>
      <TopServiciosSection>
        <ServicioTop>
          <Avatar style={{ border: '7px solid #01579b', padding: 16, backgroundColor: 'white', cursor: 'pointer' }} size={200} src="http://www.extintoreshc.com/images/carpinteria_dibujo000.gif" />
          <ServicioTopLabel>Carpintero</ServicioTopLabel>
        </ServicioTop>
        <ServicioTop>
          <Avatar style={{ border: '7px solid #01579b', padding: 16, backgroundColor: 'white', cursor: 'pointer' }} size={200} src="http://colorearimagenes.net/wp-content/uploads/2015/11/plomero.jpg" />
          <ServicioTopLabel>Plomero</ServicioTopLabel>
        </ServicioTop>
        <ServicioTop>
          <Avatar style={{ border: '7px solid #01579b', padding: 16, backgroundColor: 'white', cursor: 'pointer' }} size={200} src="http://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2010/04/grease-all-over-the-clothes-coloring-page.jpg" />
          <ServicioTopLabel>Mecánico</ServicioTopLabel>
        </ServicioTop>
      </TopServiciosSection>
      <SecondTitle>
        Todos los servicios
      </SecondTitle>
      <TopServiciosSection>
        {
          allServicios()
        }
      </TopServiciosSection>
      <SecondTitle>
        Busca por estado
      </SecondTitle>
      <TopServiciosSection>
        {
          allStates()
        }
      </TopServiciosSection>
    </ServiciosTopSection>
  );
}

ServiciosTop.propTypes = {

};

export default ServiciosTop;
