import logo from "./logo.svg";
import "./App.css";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

function App() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="loginHome">
      <div className="loginInput">
        <div className="loginHead">
          <h1>로그인</h1>
        </div>
        <div className="loginIdBox">
          <TextField
            label="ID"
            variant="outlined"
            className="IdBox"
            fullWidth
          />
        </div>
        <div className="loginPwBox">
          <TextField
            id="outlined-basic"
            label="PW"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="loginIdPw">
          <div>
            <Checkbox {...label} /> 아이디 저장{" "}
          </div>
          <div>비밀번호 찾기</div>
        </div>
        <div id="loginButton">
          <Button
            variant="contained"
            className="btn-icon-l btn-p"
            onClick={handleOpen}
          >
            로그인
          </Button>
        </div>
        <div id="loginGoOut">
          <Button variant="contained" className="btn-icon-l btn-dk">
            나가기
          </Button>
        </div>
      </div>
      <div className="loginRightImg"></div>

      {/* model  */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxAll">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="divAll">
              <div className="divUp">
                <div className="divUpOne">
                  <div className="divUpOneUserId">사용자 ID</div>
                  <div>
                    <TextField
                      id="filled-basic"
                      defaultValue="1001"
                      variant="filled"
                    />
                  </div>
                  <div>
                    <TextField
                      id="filled-basic"
                      defaultValue="홍길동"
                      variant="filled"
                    />
                  </div>
                </div>

                <div className="divUpTwo">
                  <div className="divUpTwoEquipment">장비 코드</div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      defaultValue="S01"
                      variant="outlined"
                    />
                  </div>
                </div>

                <div className="divUpThree">
                  <div className="divUpThreePort">포트 번호</div>
                  <div>
                    <TextField
                      id="outlined-number"
                      type="number"
                      defaultValue="809"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </div>

                <div className="divUpCheck">
                  <div>
                    <Checkbox {...label} />
                    시작 시 자동실행
                  </div>
                  <div>
                    <Checkbox {...label} />
                    시작 시 창 크기 최대화
                  </div>
                </div>

                <div className="divUpButton">
                  <div className="divUpButtonSave">
                    <Button
                      variant="contained"
                      className="divUpButtonSave1"
                      // onClick={handleOpen}
                    >
                      저장
                    </Button>
                  </div>
                  <div className="divUpButtonClose">
                    <Button
                      variant="contained"
                      className="divUpButtonClose1"
                      // onClick={handleOpen}
                    >
                      닫기
                    </Button>
                  </div>
                </div>
              </div>

              <div className="divDown">192.168.0.80</div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
