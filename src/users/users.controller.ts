import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  private index() {
    return this.usersService.index();
  }

  @Get("roles/:id")
  private getRoles(@Param() params: any) {
    return this.usersService.getRoles(params.id);
  }
}