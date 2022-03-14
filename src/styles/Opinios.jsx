import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  margin-bottom: 30px;
`

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  margin-left: 24px;
  margin-bottom: 30px;
`

export const ContainerTitle = styled.div`
  border-bottom: 1px solid #D3DEDC;
  width: 100%;
`

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #333333;
`

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 24px;
`

export const ImgUser = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 8px;
  border-radius: 50%;
`

export const NameUser = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #333333;
`

export const ContainerComent = styled.div`
  margin-top: 20px;
  width: 757px;
  height: auto;
`

export const TitleComent = styled.h3`
  font-size: 16px;
`

export const Coment = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
`

export const ContainerComentario = styled.div`
  border-bottom: 1px solid #D3DEDC;
  width: 760px;
`

export const Options = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #565959;
`

export const BtnBorrar = styled.button`
  border: none;
  background: none;
  color: red;
  font-size: 12px;
  margin-bottom: 30px;
`

export const BtnEdit = styled.button`
  border: none;
  background: none;
  color: #5C7AEA;
  font-size: 12px;
  margin-bottom: 30px;
`

// Agregar nueva opinion--------------------------

export const ContainerNewOp = styled.div`
  border-bottom: 1px solid #D3DEDC;
  border-top: 1px solid #D3DEDC;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-right: 20px;
  margin-top: 24px;
  padding: 20px 0px 40px 0px;
`

export const NewOpTitle = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #333333;
`

export const NewOpText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
`

export const BtnNew = styled.button`
  background: #fff;
  border: 1px solid #D3DEDC;
  box-sizing: border-box;
  border-radius: 4px;
  width: 450px;
  height: 32px;
  margin-bottom: 30px;
  box-shadow: 0px 10px 20px -15px black;
  &:hover {
    cursor: pointer;
    background:  rgba(228, 228, 228, 0.2);
  }
`