import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreaterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(user: CreaterUserDto) {
    //Validar que el usuario no exista previamente
    const userFound = await this.userRepository.findOne({
      where: {
        username: user.username,
      },
    });

    //Enviarmos una excepción http
    if (userFound) {
      return new HttpException('EL usuario ya existe', HttpStatus.CONFLICT);
    }

    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async getAllUsers() {
    const allUsers = await this.userRepository.find();
    
    if (allUsers.length === 0) {
      return new HttpException('No hay usuarios', HttpStatus.NOT_FOUND);
    }
    
    return allUsers;
  }

  async getUserById(id: number) {
    const userFound = await this.userRepository.findOne({
      where: {
        id: id, // que es lo mismo que id: id
      },
    });

    console.log(userFound);

    //Retornamos el usuario si existe, de lo contrario retornamos una excepción http
    if (!userFound) {
      return new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);
    }
    //Lo que significa que si lo encontró
    return userFound;
  }

  async deleteUserById(id: number) {
    const result = await this.userRepository.delete({
      id,
    });

    if (result.affected === 0) {
      return new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);
    } else return result;
  }

  //Nota que un DTO lo usas cuando deseas controlar lo que viene en el body de la petición.
  async updateUserById(id: number, user: UpdateUserDto) {
    const updatedUser = await this.userRepository.update({ id }, user);

    if (updatedUser.affected === 0) {
      return new HttpException(
        'El usuario no fue actualizado o no existe',
        HttpStatus.NOT_FOUND,
      );
    }

    return updatedUser;
  }
}
