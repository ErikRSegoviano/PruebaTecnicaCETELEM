import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  min-width: 100cw;
  min-height: 100vh;
  grid-template-areas:
    "header header header header header header"
    "left main main main right panel"
    "left main main main rigth panel";

  gap: 5px;
  background-color: #EFEFEF;

  .header {
    grid-area: header;
  }
  .sidepanel {
    grid-area: panel;
    text-align: center;

  }
  .content {
    grid-area: main;
  }
`;