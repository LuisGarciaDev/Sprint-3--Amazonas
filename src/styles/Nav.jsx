import styled from "styled-components";
import { Button, Form, FormControl} from "react-bootstrap";

export const ContainerPrincipal = styled.div`
  width: 100%;
  height: 64px;
  background-color: #131921;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  @media screen and (max-width: 850px) {
    margin-bottom: 0px;
    margin-left: 0px;
  }
`

export const ImgLogo = styled.img`
  width: 110px;
  height: auto;
  border: 1px solid #131921;
  border-radius: 2px;
  padding: 3px;
  &:hover {
    border: 1px solid #fff;
    cursor: pointer;
  }
`



// GeoLocation BTN -------------------------------------------------------------------------------------------
export const ContainerLocation = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  width: 170px;
`

export const BtnLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  background: none;
  color: #fff;
  padding: 6px 3px;
`

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  svg {
      fill: #fff;
      font-size: 20px;
    }
`

export const ContainerGeolocation = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  margin-left: 5px;
`

export const TextEnviar = styled.p`
  margin: 0px;
  font-size: 12px;
`

export const Location = styled.p`
  margin: 0px;
  font-weight: bold;
  font-size: 14px;
`



// SearchInput -----------------------------------------------------------------------------------------------
export const ContainerBuscador = styled.div`
  width: 618px;
  margin-left: 20px;
  margin-right: 0px;
`

//select
export const SelectOption = styled.select`
  width: 140px;
  height: 40px;
  font-size: 12px;
  border: none;
  border-radius: 3px 0px 0px 3px;
  padding: 8px;
  background: #FAFAFA;
  &:hover {
    cursor: pointer;
    background:  rgba(228, 228, 228, 0.9);
  }
`

//form
export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

export const InputSearch = styled(FormControl)`
  width: 440px;
  height: 40px;
  border-radius: 0px;
`

//btn
export const BtnSearch = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F0AD64;
  width: 48px;
  height: 40px;
`

// Acount -----------------------------------------------------------------------------------------------
export const ContainerAcount = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-right: 30px;
  padding: 3px;
`

// Devolucion -----------------------------------------------------------------------------------------------
export const ContainerDevolucion = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-right: 30px;
  border: 1px solid #131921;
  border-radius: 2px;
  padding: 3px;
  &:hover {
    border: 1px solid #fff;
    cursor: pointer;
  }
`

export const TextPequenio = styled.span`
  margin: 0px;
  font-size: 12px;
`

export const TextNegrita = styled.p`
  margin: 0px;
  font-weight: bold;
  font-size: 14px;
`

// Carrito -----------------------------------------------------------------------------------------------
export const ContainerCar = styled.img`
  display: flex;
  flex-direction: row;
  padding: 3px;
`
