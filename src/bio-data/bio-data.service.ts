import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';
import { BioDatum } from './entities/bio-datum.entity';
@Injectable()
export class BioDataService {

  constructor(
    @InjectRepository(BioDatum)
    private bioDataRepository: Repository<BioDatum>
  ){}

  async create(createBioDatumDto: CreateBioDatumDto) {
    const newBioDatum: BioDatum = this.bioDataRepository.create(createBioDatumDto)
    //return 'This action adds a new bioDatum';
    return this.bioDataRepository.save(newBioDatum)
  }

  async findAll() {
    return await this.bioDataRepository.find();
    //return `This action returns all bioData`;
  }

  async findOne(entry: number) {
    return await this.bioDataRepository.findOne(entry);
    //return `This action returns a #${id} bioDatum`;
  }

  async update(entry: number, updateBioDatumDto: UpdateBioDatumDto) {
    return await this.bioDataRepository.update(entry, updateBioDatumDto)
    //return `This action updates a #${id} bioDatum`;
  }

  async remove(entry: number) {
    return await this.bioDataRepository.delete(entry)
    //return `This action removes a #${id} bioDatum`;
  }
}
