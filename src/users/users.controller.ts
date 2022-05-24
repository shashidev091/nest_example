import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getAllUsers(): any {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    findUserById(@Param('id', ParseIntPipe) id: number): any {
        const user =  this.userService.findUsersById(id);
        if (user) {
            return user;
        } else {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
        }
    }
}
