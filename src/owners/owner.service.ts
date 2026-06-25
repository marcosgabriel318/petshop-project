import { Injectable } from "@nestjs/common";

@Injectable()
export class OwnerService {
  private owners = [
    { id: 1, name: "Marcos", email: "marcos@example.com"},
    { id: 2, name: "Gabriel", email: "gabriel@example.com"},
  ];

  createOwner(owner) {
    this.owners.push(owner);
  }

  getAllOwners() {
    return this.owners;
  }

  getOwnerById(id) {
    return this.owners.find((owner) => owner.id === id);
  } 

  updateOwner(id, updatedOwner) {
    this.owners = this.owners.map((owner) => {
      if (owner.id === id) {
        return { ...owner, ...updatedOwner };
      }
      return owner;
    });
  }

  deleteOwner(id) {
    this.owners = this.owners.filter((owner) => owner.id !== id);
  }
  
}