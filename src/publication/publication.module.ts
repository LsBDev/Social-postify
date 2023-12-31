import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { PublicationRepository } from './publication.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [PublicationController],
  providers: [PublicationService, PublicationRepository, PrismaService],
  exports:[PublicationModule]
})
export class PublicationModule {}
