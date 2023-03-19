import React, { useContext, useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';
import {Helmet} from "react-helmet";
import {observer} from 'mobx-react-lite'

import {Context} from '../../index';
import {getData} from '../../http/dataAPI';
import { IData } from '../../types/types';
import BasicTable from '../../components/BasicTable';
import ModalAddData from '../../components/Modals/ModalAddData';

import './mainPage.sass';


const MainPage: React.FC = observer(() => {
    const {auth, notes} = useContext(Context);
    const [elems, setElems] = useState<IData[]>([]);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        getData().then(data => setElems(data.data));
    }, [visible, notes.toggle]);

    const handleExit = () => {
        localStorage.clear();
        auth.setIsAuth(false);
    };

    return (
        <Container maxWidth="md" className="main-page">
            <Helmet>
                <title>Главная страница</title>
                <meta name="description" content="Main Page" />
            </Helmet>

            <h2 className="main-page__title">Главная страница</h2>
            <BasicTable rows={elems} />
            <Button 
                onClick={() => setVisible(true)}
                variant="contained"
                className="main-page__btn"
                >
                Добавить запись
            </Button>
            <Button 
                onClick={handleExit}
                variant="contained"
                color="error"
                className="main-page__btn"
                >
                Выйти
            </Button>

            <ModalAddData open={visible} handleClose={() => setVisible(false)} />
        </Container>
    );
});

export default MainPage;