import {makeAutoObservable} from 'mobx';

export default class NotesStore {
    _toggle: boolean;

    constructor() {
       this._toggle = false;
       makeAutoObservable(this); 
    };

    setToggle(bool: boolean) {
        this._toggle = !bool;
    };

    get toggle() {
        return this._toggle;
    };
};