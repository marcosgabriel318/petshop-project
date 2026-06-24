import { Injectable } from "@nestjs/common";

@Injectable()
export class OwnerService {
  private owners = [
    { id: 1, name: "Marcos", age: 25 },
    { id: 2, name: "Gabriel", age: 30 },
  ];

  getAllOwners() {
    return this.owners;
  }

  createOwner(owner) {
    this.owners.push(owner);
  }
}