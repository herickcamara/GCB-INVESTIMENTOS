import styled from "styled-components";

export default styled.div`
  min-width: 244px;
  max-width: 245px;
  margin: auto 10px;
  flex: 1;
  .container {
    border-radius: 8px;
    min-height: 400px;
    max-height: 426px;
    overflow: hidden;
    background: transparent;
    display: flex;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px,
      rgb(0 0 0 / 19%) 0px 6px 20px 0px;
  }
  .imgArea {
    min-height: 249px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      min-height: 244px;
      object-fit: cover;
    }
  }

  .titleArea {
    color: var(--color-h2);
    h2 {
      font-size: 1.56rem;
    }
    padding: 10px;
  }

  .userArea {
    display: flex;
    align-items: center;
    padding: 10px;
    height: 100px;

    .avatarArea {
      max-width: 60px;
      height: 60px;
      paddig: 10px;

      .avatar {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        border-radius: 40%;
        border: 1px solid rgba(204, 204, 204, 0.5);

        img {
          width: 50px;
          height: 57px;
          border-radius: 50%;
        }
      }
    }

    .userName {
      padding: 0px 5px;
    }
  }
`;
