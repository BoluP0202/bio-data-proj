import { Injectable } from '@nestjs/common';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';

@Injectable()
export class BioDataService {
  create(createBioDatumDto: CreateBioDatumDto) {
    return 'This action adds a new bioDatum';
  }

  findAll() {
    return `This action returns all bioData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bioDatum`;
  }

  update(id: number, updateBioDatumDto: UpdateBioDatumDto) {
    return `This action updates a #${id} bioDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} bioDatum`;
  }
}
