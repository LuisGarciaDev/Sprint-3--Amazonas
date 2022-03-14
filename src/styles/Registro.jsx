import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  width: 150px;
  height: auto;
`

export const ContainerForm = styled.div`
  border: 1px solid #D3DEDC;
  border-radius: 5px;
  padding: 30px;
  margin-top: 20px;
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

export const Labels = styled.label`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 2px;
`

export const Inputs = styled.input`
  width: 300px;
  height: 25px;
  margin-bottom: 10px;
`

export const BtnContinue = styled.button`
  width: 309px;
  height: 30px;
  margin: 8px 0px;
  background: #F0AD64;
  border: 1px solid #000000;
  border-radius: 3px;
  &:hover {
    transition: 0.5s all ease;
    cursor: pointer;
  }
`

export const Pconditions = styled.div`
  font-size: 12px;
  color: #000000;
  width: 310px;
  height: 30px;
  margin-top: 30px;
`

export const RegisterRedirect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 30px;
`

export const Predirect = styled.p`
  font-size: 12px;
  color: gray;
  margin-right: 8px;
`

export const PredirectLogin = styled.p`
  font-size: 12px;
  color: #5C7AEA;
  text-decoration: none;
`

export const BtnRegister = styled.button`
  width: 309px;
  height: 30px;
  background: #D3DEDC;
  border: 1px solid gray;
  border-radius: 3px;
  &:hover {
    background: #C9CCD5;
    transition: 0.5s all ease;
    cursor: pointer;
  }
`

