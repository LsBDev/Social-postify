import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PublicationRepository {
  //requisições para o DB
  constructor(private readonly prisma: PrismaService) {}

  // login(data: LoginDTO) {
  //   return this.prisma.post.create({data})
  // }
}