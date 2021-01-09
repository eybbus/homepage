import styled from "styled-components";

const Navigator = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-grow: 2;
  align-self: flex-end;
  ul {
    display: flex;
    list-style-type: none;
    li {
      margin: 0px 10px;
    }
  }
`;

export default Navigator;
