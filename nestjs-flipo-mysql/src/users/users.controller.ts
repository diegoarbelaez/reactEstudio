import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreaterUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  createUser(@Body() newUser: CreaterUserDto) {
    console.log(newUser);
    return this.userService.createUser(newUser);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  //Aqui lo que estamos haciendo es declarando el tipo de retorno de getAllUsers() como una promesa de tipo User[].
  //Esto para cumplir con el estándar Typescript y evitar errores en tiempo de ejecución.

  //En typescripy los metodos deben tener algún tipo de retorno...
  //por eso es esto: Promise<User[]> o Promise<User> o Promise<any> o Promise<void>

  //Obtener un usuario por id
  //Alternativamente puedo agregar validación con el Pipe ParseIntPipe asi: @Param('id', ParseIntPipe) id: number
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Delete(':id')
  deleteUserById(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.userService.deleteUserById(id);
  }

  @Patch(':id')
  updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: CreaterUserDto,
  ): Promise<any> {
    return this.userService.updateUserById(id, user);
  }
}
