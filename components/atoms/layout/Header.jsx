import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  text-align: center;
  padding: 8px 0;
  color: #fff;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
