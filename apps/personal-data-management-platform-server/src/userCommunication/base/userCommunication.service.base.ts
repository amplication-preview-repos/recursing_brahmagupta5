/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  UserCommunication as PrismaUserCommunication,
  Company as PrismaCompany,
  User as PrismaUser,
} from "@prisma/client";

export class UserCommunicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserCommunicationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userCommunication.count(args);
  }

  async userCommunications(
    args: Prisma.UserCommunicationFindManyArgs
  ): Promise<PrismaUserCommunication[]> {
    return this.prisma.userCommunication.findMany(args);
  }
  async userCommunication(
    args: Prisma.UserCommunicationFindUniqueArgs
  ): Promise<PrismaUserCommunication | null> {
    return this.prisma.userCommunication.findUnique(args);
  }
  async createUserCommunication(
    args: Prisma.UserCommunicationCreateArgs
  ): Promise<PrismaUserCommunication> {
    return this.prisma.userCommunication.create(args);
  }
  async updateUserCommunication(
    args: Prisma.UserCommunicationUpdateArgs
  ): Promise<PrismaUserCommunication> {
    return this.prisma.userCommunication.update(args);
  }
  async deleteUserCommunication(
    args: Prisma.UserCommunicationDeleteArgs
  ): Promise<PrismaUserCommunication> {
    return this.prisma.userCommunication.delete(args);
  }

  async getCompany(parentId: string): Promise<PrismaCompany | null> {
    return this.prisma.userCommunication
      .findUnique({
        where: { id: parentId },
      })
      .company();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.userCommunication
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
