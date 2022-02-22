import { Controller, Get, Post, Body, Put, Patch, Param, Delete, Render } from '@nestjs/common';
import { BioDataService } from './bio-data.service';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';

@Controller('bio-data')
export class BioDataController {
  constructor(private readonly bioDataService: BioDataService) {}

  @Post()
  create(@Body() createBioDatumDto: CreateBioDatumDto) {
    return this.bioDataService.create(createBioDatumDto);
  }
  @Get('create')
  @Render('bioData/add-bioData.html')
  createForm() {
}
  @Get()
  findAll() {
    return this.bioDataService.findAll();
  }

  @Get(':entry')
  findOne(@Param('entry') entry: string) {
    return this.bioDataService.findOne(+entry);
  }

  @Patch(':entry')
  update(@Param('entry') entry: string, @Body() updateBioDatumDto: UpdateBioDatumDto) {
    return this.bioDataService.update(+entry, updateBioDatumDto);
  }

  @Delete(':entry')
  remove(@Param('entry') entry: string) {
    return this.bioDataService.remove(+entry);
  }
}
