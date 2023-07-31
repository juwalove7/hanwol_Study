import logo from "./logo.svg";
import "./App.css";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function App() {
  return (
    <div className="loginHome">
      <div className="loginInput">
        <h1>로그인</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="ID" variant="outlined" />
          <TextField id="outlined-basic" label="PW" variant="outlined" />
        </Box>
        <div>
          <Checkbox {...label} /> 아이디 저장 비밀번호 찾기
        </div>
        <Button variant="contained" className="btn-icon-l btn-p">
          로그인
        </Button>
        <Button variant="contained" className="btn-icon-l btn-dk">
          나가기
        </Button>
      </div>
      <div className="loginRightImg">
        <img
          className="loginImg"
          src="img/e28cb2824ec038ff3e533d228697896e.jpg"
        ></img>
      </div>
    </div>
  );
}

export default App;
