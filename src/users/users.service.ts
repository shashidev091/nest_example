import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    users = [{
        id: 1,
        name: "Shashi Bhagat",
        email: "skujur871@gmail.com"
    },
    {
        id: 2,
        name: "Bhushan Bhagat",
        email: "skujur873@gmail.com"
    },{
        id: 3,
        name: "Bablu Bhagat",
        email: "skujur872@gmail.com"
    }]

    getAllUsers() {
        return this.users;
    }


    findUsersById(id: number): any {
        return this.users.find(item => item.id === id)
    }
}
