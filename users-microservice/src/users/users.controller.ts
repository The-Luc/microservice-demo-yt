import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { UsersService } from './users.service';

@Controller()
export class UserMicroserviceController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    return this.usersService.create(data);
  }

  @MessagePattern({ cmd: 'getUsers' })
  getAll() {
    return this.usersService.findAll();
  }

  @MessagePattern({ cmd: 'getUser' })
  getOne(@Payload() id: number) {
    return this.usersService.findOne(id);
  }

  @MessagePattern({ cmd: 'updateUser' })
  update(@Payload() payload: { id: number } & UpdateUserDto) {
    return this.usersService.update(payload.id, payload);
  }

  @MessagePattern({ cmd: 'deleteUser' })
  remove(@Payload() id: number) {
    return this.usersService.remove(id);
  }
}
