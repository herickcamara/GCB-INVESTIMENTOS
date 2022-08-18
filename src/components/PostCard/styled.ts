import styled from "styled-components";

export const Container = styled.div`
min-height: 400px;
max-width: 348px;
background: transparent;
display: flex;
flex-direction: column;
box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px,
 rgb(0 0 0 / 19%) 0px 6px 20px 0px;
  .imgArea {
    width: 100%;
    display: contents;
    img {
      width: 100%;
    }
  }

  .titleArea{
    font-size:25px;
    color:var(--color-h2);
    padding:10px;
  }
  
  .userArea{
    display:flex;
    align-items:center;
    padding:10px;
    height:100px;
   
    .avatarArea{
      max-width:60px;
      height:60px;
      paddig:10px;
      
      .avatar{
        width:100%;
        height:100%;
        overflow: hidden;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:40%;
        border: 1px solid rgba(204, 204, 204, 0.5);
      
         img{
          width:70%;
        }
      }
    }
  }
}
`;
