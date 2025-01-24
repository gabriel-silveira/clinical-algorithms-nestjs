import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  index() {
    return [];
  }

  getRoles(id: number) {
    console.log(id);
    return {"maintainer":1,"master":1};
  }
}