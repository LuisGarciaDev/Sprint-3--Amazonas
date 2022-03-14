import styled from "styled-components";


export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #242F3E;
  color: #fff;
`

export const FirstContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
`

export const Containers = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 100px;
`

export const Title = styled.h5`
  font-size: 12px;
  margin-bottom: 5px;
`

export const Items = styled.p`
  font-size: 11px;
  margin-bottom: 3px;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

export const Logo = styled.img`
  width: 100px;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`

export const Credits = styled.p`
  font-size: 11px;
  margin-bottom: 20px;
`

// Scroll -------------------------------------------------------
export const ScrollToTop = styled.div`
  bottom: 0px;
  right: 0px;
  animation: fadeIn 700ms ease-in-out 1s both;
  cursor: pointer;
  width: 100%;
  height: 50px;

  @keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`

export const BackTopContainer = styled.div`
  height: 40px;
  text-align: center;
  width: 100%;
  background-color: #131921;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Indication = styled.p`
  color: white;
  margin-top: 18px;
  bottom: 0px;
  font-size: 15px;
`