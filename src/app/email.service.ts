import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class EmailService {
    #emails: string[] = ['jeremy.proot@outlook.com'];

    public isValid = (email: string) => {
        return this.#emails.includes(email);
    }
}