import { Injectable } from '@nestjs/common';
import { CreateAddressDto, CreateUserDto } from './CreateUser.dto';

@Injectable()
export class UsersService {
    users = [{
        id: 1,
        name: "Shashi Bhagat",
        email: "skujur871@gmail.com",
        address: {
            address1: "college road",
            address2: "Tana Bhagat",
            pincode: 835208,
            state: "Jharkhand",
            district: "Gumla",
            country: "India"
        }
    },
    {
        id: 2,
        name: "Bhushan Bhagat",
        email: "skujur873@gmail.com",
        address: {
            address1: "117, 3rd floor",
            address2: "Poorvi Pitampura",
            pincode: 110034,
            state: "New Delhi",
            district: "New Delhi",
            country: "India"
        }
    },{
        id: 3,
        name: "Bablu Bhagat",
        email: "skujur872@gmail.com",
        address: {
            address1: "15D",
            address2: "PitamPura",
            pincode: 110034,
            state: "New Delhi",
            district: "New Delhi",
            country: "India"
        }
    }]

    getAllUsers() {
        return this.users;
    }


    findUsersById(id: number): any {
        return this.users.find(item => item.id === id);
    }

    createUser(createUserDto: CreateUserDto) {
        return this.users.push(createUserDto);
    }
}
