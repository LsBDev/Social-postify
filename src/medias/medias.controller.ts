import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { MediasService } from './medias.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';

@Controller('medias')
export class MediasController {
  constructor(private readonly mediasService: MediasService) {}

  @Post()
  async create(@Body() body: CreateMediaDto) {
    try {
      return await this.mediasService.create(body);

    } catch(err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST)
    }
  }
  
  @Get()
  async findAll() {
    try {
      const medias = await this.mediasService.findAll();
      if(!medias) return "wow"
      return medias
    }catch(err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.mediasService.findOne(+id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) {
    return this.mediasService.update(+id, updateMediaDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.mediasService.remove(+id);
  }
}
