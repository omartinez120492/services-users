
import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";

@Injectable({
    providedIn: 'root'
})
export class UserService {


    private users: User[] = [];

    constructor() {
        this.users = [
            { id: '1', name: 'Juan', lastName: 'Osorio', age: 20, gender: 'male' },
            { id: '2', name: 'Ana', lastName: 'Cruz', age: 21, gender: 'female' },
            { id: '3', name: 'Luis', lastName: 'Juárez', age: 20, gender: 'male' },
            { id: '4', name: 'Elena', lastName: 'García', age: 21, gender: 'female' },
        ];
    }

    get getAll(): User[] {
        return this.users;
    }

    getUserById(id: string): User | undefined {
        return this.users.find(user => user.id === id);
    }   

    createUser(user: User): void {
        this.users.push(user);
    }

    updateUser(id: string, user: User): void {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users[index] = user;
        }
    }

    deleteUser(id: string): void {
        this.users = this.users.filter(user => user.id !== id);
    }
}       