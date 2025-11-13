import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, CardHeader, Divider } from '@mui/material';

function LoginSuccess(props) {
    const [email, setEmail] = useState('');

    function handleLogout() {
        props.handleLogout();
    }

    useEffect(() => {
        setEmail(props.email);
    }, [props]);

    return (
        <span>
            <Card className='login-success' variant="outlined">
                <CardHeader title="Login Results" />
                <Divider />
                <CardContent>
                    <Typography variant="h6" color="success">Welcome, {email}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained' onClick={(e) => handleLogout()}>Logout</Button>
                </CardActions>
            </Card>
        </span>
    );
}

export default LoginSuccess;