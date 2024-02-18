import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, TextField, Button } from "@mui/material";
import styled from "@mui/system/styled";
import { Stack, Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";

const Wrapper = styled("div")(({ theme }) => ({
  ".container": {
    paddingTop: "30px",
    paddingBottom: "20px",
  },
  ".heading": {
    marginBottom: "20px",
  },
  ".textField": {
    width: "100%",
  },
  ".button": {
    width: "100%",
  },
}));

function App() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };
  const handleSend = () => {
    setPrompt("");
    axios
      .post(`http://18.222.212.128/post-prompt/${prompt}`)
      //axios.post(`http://127.0.0.1:5000/post-prompt/${prompt}`)
      .then((res) => {
        console.log("reponse from prompt backend");
        console.log(res);
        setOutput(res.data);
      });
  };

  return (
    <Wrapper>
      <Container maxWidth="md" className={"container"}>
        <Typography variant="h4" gutterBottom>
          Welcome to Donull
        </Typography>

        <Typography variant="subtitle1">
          This is a sample page using GPT3.5. It demonstrates an LLM with some
          demo context.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Stack spacing={3}>
            <TextField
              placeholder="Enter your question here"
              variant="outlined"
              className={"textField"}
              onChange={(e) => handlePromptChange(e)}
              value={prompt}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <Button
              endIcon={<SendIcon />}
              variant="contained"
              color="primary"
              className={"button"}
              onClick={() => handleSend()}
              disabled={!prompt}
              size="large"
            >
              Send
            </Button>
            <Box>
              {output && (
                <Alert variant="filled" sx={{fontSize: '16px'}}>
                  <strong>{output}</strong>
                </Alert>
              )}
            </Box>
          </Stack>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default App;
