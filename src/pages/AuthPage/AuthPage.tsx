import React, {useState, useContext} from 'react';
import { Container, Card, CardContent, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";

import { MAIN_ROUTE } from '../../utils/consts';
import { login } from '../../http/authAPI';
import {Context} from '../../index';

import './authPage.sass';


const AuthPage: React.FC = () => {
    const {auth} = useContext(Context);
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const click = async () => {
        if (username.substring(0, 4) !== 'user') {
            return alert('username должен быть в формате "user{N}", где N - число')
        }

        await login(username, password)
            .then(data => {
                if (data.data) {
                    localStorage.setItem('token', data.data.token);
                    auth.setIsAuth(true);
                    navigate(MAIN_ROUTE);
                } else {
                    alert(`В доступе отказано: ${data.error_text}`);
                }
            }) 
    };

    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            click();
        }
    }, {once: true});

    return (
        <Container maxWidth="sm">
            <Helmet>
                <title>Авторизация</title>
                <meta name="description" content="Авторизация" />
            </Helmet>

            <Card className="my-card">
                <CardContent>
                    <h2 className='my-card__title'>Авторизация</h2>
                    <div className="my-card__form">
                        <TextField 
                            className="my-card__input"
                            placeholder="Введите ваш username..."
                            label="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <TextField
                            className="my-card__input"
                            placeholder="Введите ваш пароль..."
                            label="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type='password'
                        />                
                        <Button 
                            onClick={click}
                            variant="contained"
                            className="my-card__btn"
                            >
                            Войти
                        </Button>    
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
};

export default AuthPage;