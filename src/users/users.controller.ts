import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './CreateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getAllUsers(): CreateUserDto[] {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    findUserById(@Param('id', ParseIntPipe) id: number): CreateUserDto {
        const user =  this.userService.findUsersById(id);
        if (user) {
            return user;
        } else {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
        }
    }

    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }
}
