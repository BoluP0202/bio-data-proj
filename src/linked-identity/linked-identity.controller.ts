import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { LinkedIdentityService } from './linked-identity.service';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';

@Controller('linked-identity')
export class LinkedIdentityController {
  constructor(private readonly linkedIdentityService: LinkedIdentityService) {}

  @Post()
  create(@Body() createLinkedIdentityDto: CreateLinkedIdentityDto) {
    return this.linkedIdentityService.create(createLinkedIdentityDto);
  }
  @Get('create')
  @Render('bioData/with-linkedIdentity.html')
  createForm(){

  }
  @Get()
  findAll() {
    return this.linkedIdentityService.findAll();
  }

  @Get(':entry')
  findOne(@Param('entry') entry: string) {
    return this.linkedIdentityService.findOne(+entry);
  }

  @Patch(':entry')
  update(@Param('entry') entry: string, @Body() updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    return this.linkedIdentityService.update(+entry, updateLinkedIdentityDto);
  }

  @Delete(':entry')
  remove(@Param('entry') entry: string) {
    return this.linkedIdentityService.remove(+entry);
  }

  @Patch(':linkedIdentityEntry/bioData/bioDataEntry')
  setBioDataById(@Param('linkedIdentityEntry') linkedIdentityEntry:
  number, @Param('bioDataEntry') bioDataEntry: number) {
  return this.linkedIdentityService.setBioDataByEntry(linkedIdentityEntry,bioDataEntry);
  }
  @Delete(':linkedIdentityEntry/bioData')
unsetBioDataById(@Param('linkedIdentityEntry') linkedIdentityId: number) {
return this.linkedIdentityService.unsetBioDataByEntry(linkedIdentityId);
}
}
