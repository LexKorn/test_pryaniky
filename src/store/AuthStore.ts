import {makeAutoObservable} from 'mobx';

export default class AuthStore {
    _isAuth: boolean;

    constructor() {
       this._isAuth = false;
       makeAutoObservable(this); 
    };

    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    };

    get isAuth() {
        return this._isAuth;
    };
};