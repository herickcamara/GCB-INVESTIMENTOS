import styled from "styled-components";

export const Container = styled.div`
  flex:1;
  min-width: 243px;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  padding-bottom: 15px;
  box-shadow: 5px 5px 20px #ccc;
  
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
