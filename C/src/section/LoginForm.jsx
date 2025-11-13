import { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, CardHeader, Box, TextField, Stack, Divider } from '@mui/material';

function LoginForm(props) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [errorText, setErrorText] = useState([]);
    const [isShowError, setIsShowError] = useState(false);

    async function handleLogin() {
        resetError();

        var validationResults = { isValidUser: false, isValidEmail: false };

        validationResults = await validateLogin(userEmail, userPassword);

        if (!validationResults.isValidUser && validationResults.isValidEmail) {
            computeError("Only email is valid, password is incorrect. ")
        }

        props.showLoginResults(validationResults.isValidUser, userEmail);
    }

    const validateLogin = async (uEmail, uPassword) => {
        var isValidUser = false;
        var isValidEmail = false;

        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();

            if (data.some(d => { return d.email === uEmail })) {
                isValidEmail = true;

                if (validatePassword(uPassword)) {
                    isValidUser = true;
                    setErrorText('');
                }
                else
                    setIsValidPassword(false);
            } else {
                computeError("Email not exists!")
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }

        return { 'isValidUser': isValidUser, 'isValidEmail': isValidEmail };
    }

    function validatePassword(uPassword) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

        if (uPassword.length < 8 || uPassword.length > 16) {
            computeError("The password must be between 8 - 16 characters.");
            return false;
        }

        if (uPassword.search(regex) !== -1) {
            return true;
        }
        else {
            computeError("The password should contains at least an uppercase letter, a lowercase letter, a number and a symbol.")
            return false
        }
    }

    function computeError(errText) {
        var temp = errorText;
        temp.push(errText)
        setErrorText(temp);

        setIsShowError(true)
    }

    function resetError() {
        var temp = errorText;

        while (temp.length > 0) {
            temp.pop();
        }

        setErrorText(temp);

        setIsShowError(false);
    }

    const showError = () => {
        return errorText.join(" ");
    }

    return (
        <span>
            <Card className="login-form" variant="outlined">
                <CardHeader title="Login Page" />
                <Divider />
                <CardContent>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            fullWidth
                            required
                            size="small"
                            margin="normal"
                            id="user-email"
                            label="Email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            required
                            size="small"
                            margin="normal"
                            id="user-password"
                            label="Password"
                            type="password"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                            error={!isValidPassword}
                        />
                        {isShowError ? (<Typography variant='caption' color='error' gutterBottom>{showError()}</Typography>) : (<span></span>)}
                    </Box>
                </CardContent>
                <CardActions>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={(e) => { handleLogin(); }}>Login</Button>
                        <Button>Forgot Password?</Button>
                    </Stack>
                </CardActions>
            </Card>
        </span>
    );
}

export default LoginForm;