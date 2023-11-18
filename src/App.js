import { Box, Button, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

function App() {
    //js code
    const [data, setData] = useState({
        name: "",
        email: "",
        pass: "",
        cpass: "",
    });

    const [isCPass, setIsCPass] = useState(true);

    const getUserData = (e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.pass != data.cpass) {
            setIsCPass(false);
        } else {
            setIsCPass(true);
            alert(`User ${data.name} has been registered`);
            setData({
                name: "",
                email: "",
                pass: "",
                cpass: "",
            });
        }
    };

    const handleReset = () => {
        setData({
            name: "",
            email: "",
            pass: "",
            cpass: "",
        });
    };

    return (
        //jsx code
        <div className="d-flex justify-content-center align-items-center mt-5">
            <Box
                component={Paper}
                elevation={5}
                className="m-5 d-flex jsutify-content-center align-items-center flex-column"
                style={{ width: "25%", borderRadius: "20px" }}
            >
                <h3 className="text-center m-3">Registration Form</h3>
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="d-flex justify-content-center m-3 align-items-center flex-column"
                    style={{ width: "85%" }}
                >
                    <TextField
                        required
                        name="name"
                        label="Name"
                        value={data.name}
                        variant="outlined"
                        className="w-100 m-2"
                        onChange={(e) => getUserData(e)}
                    />

                    <TextField
                        required
                        name="email"
                        value={data.email}
                        label="E-mail"
                        variant="outlined"
                        className="w-100 m-2 "
                        onChange={(e) => getUserData(e)}
                    />

                    <TextField
                        required
                        name="pass"
                        value={data.pass}
                        label="Password"
                        type="password"
                        variant="outlined"
                        className="w-100 m-2 "
                        onChange={(e) => getUserData(e)}
                    />

                    <TextField
                        required
                        name="cpass"
                        value={data.cpass}
                        label=" Confirm Password"
                        variant="outlined"
                        type="password"
                        className="w-100 m-2"
                        onChange={(e) => getUserData(e)}
                    />
                    <div>
                        <p></p>
                    </div>

                    <div className="m-3 justify-content-center d-flex w-100 flex-warp">
                        <Button
                            type="submit"
                            variant="contained"
                            className="m-2"
                            style={{
                                width: "10rem",
                                height: "2.5rem",
                                letterSpacing: "5px",
                            }}
                        >
                            Submit
                        </Button>

                        <Button
                            variant="outlined"
                            className="m-2"
                            style={{
                                width: "10rem",
                                height: "2.5rem",
                                letterSpacing: "5px",
                            }}
                            onClick={()=>handleReset()}
                        >
                            Reset
                        </Button>
                    </div>
                </form>
            </Box>
        </div>
    );
}

export default App;
