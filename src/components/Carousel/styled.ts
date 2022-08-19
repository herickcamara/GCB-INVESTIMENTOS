import styled from "styled-components";

export const AreaArrowLeft = styled.div<{
  disabled: boolean;
  shadow: boolean;
  right: boolean;
}>`
  width: 100px;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  ${(props) => (props.right ? "left:-10px" : "right:-10px")};

  box-shadow: ${(props) =>
    props.shadow
      ? "inset 34px 0px 34px 0px #fff"
      : "inset -34px 0px 34px 0px #fff"};

  display: ${(prosp) => (prosp.disabled ? "none" : "flex")};

  button {
    width: 50px;
    height: 50px;
    font-size:1rem;
    color:var(--bg-button)
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    background: #fff;
    
    img{
      width:40%;
    }
  }

  @media(max-width:769px){
    display:none;
  }
`;
