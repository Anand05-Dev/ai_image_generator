import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./buttons/button";
import { useLocation, useNavigate } from "react-router";
import { AddRounded, WebRounded, LightMode, DarkMode } from "@mui/icons-material";
import { ThemeContext } from "../context/ThemeContext";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.menu_primary_text};
  font-weight: bold;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.menu_primary_text};
  border: none;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  const path = location.pathname.split("/");

  const gotoCreatePost = () => navigate("/post");
  const gotoHome = () => navigate("/");

  return (
    <Container>
      ImageGenAI
      <ButtonGroup>
        {path[1] === "post" ? (
          <Button
            text="Explore Posts"
            leftIcon={<WebRounded style={{ fontSize: "18px" }} />}
            onClick={gotoHome}
            type="secondary"
          />
        ) : (
          <Button
            text="Create new post"
            leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
            onClick={gotoCreatePost}
          />
        )}

        <ThemeToggleButton onClick={toggleTheme} title="Toggle theme">
          {isDarkMode ? <LightMode /> : <DarkMode />}
        </ThemeToggleButton>
      </ButtonGroup>
    </Container>
  );
};

export default Navbar;
