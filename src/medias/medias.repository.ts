import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateMediaDto } from "./dto/create-media.dto";
import { UpdateMediaDto } from "./dto/update-media.dto";

@Injectable()
export class MediasRepository {
  //requisições para o DB
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateMediaDto) {
    return this.prisma.media.create({ data })
  }

  findAll() {
    return this.prisma.media.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} media`;
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    return `This action updates a #${id} media`;
  }

  remove(id: number) {
    return `This action removes a #${id} media`;
  }
}