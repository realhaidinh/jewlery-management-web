import { Container, Paper, Stack, Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { ControlButton } from "../components/Controls";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();


  // TODO: api call and handle loading, error
  const handleLogin = async () => {
    setIsLoading(true);
    navigate("/sell");
    setIsLoading(false);
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "24px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          height: "75%",
          width: "90%",
          borderRadius: "24px",
        }}
      >
        <Stack
          spacing={2}
          direction="row"
          sx={{
            height: "100%",
            overflow: "hidden",
            position: "relative",
            borderRadius: "24px",
          }}
        >
          <Box
            sx={{
              height: "100%",
              opacity: 0.9,
            }}
            component="img"
            alt="jewelry image"
            src="src\assets\images\login_bg_2.jpg"
            backgroundColor="#0818a8"
          />
          <Stack
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "45%",
              backgroundColor: "#FAF9F6",
              paddingX: "32px",
              paddingY: "48px",
              fontSize: "24px",
              textAlign: "center",
            }}
            spacing={5}
          >
            <h2>Đăng nhập</h2>
            <TextField
              required
              variant="standard"
              id="username"
              label="Tên người dùng"
              inputProps={{
                style: {
                  fontSize: "2rem",
                  height: 50,
                },
              }}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <TextField
              required
              variant="standard"
              id="password"
              label="Mật khẩu"
              inputProps={{
                style: {
                  fontSize: "2rem",
                  height: 50,
                },
              }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Stack
              sx={{
                margin: "auto",
                display: "block",
                paddingTop: "30px",
              }}
            >
              <ControlButton
                color="success"
                width="40%"
                height={50}
                fontSize={16}
                onClick={handleLogin}
                endIcon={<DoneIcon sx={{ fontSize: 40 }} />}
              >
                Đăng nhập
              </ControlButton>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Login;
