import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PasswordService {
    #password: string = '862024';

    public isValid = (password: string) => {
        return this.#password === password;
    }
}