import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BioDatum } from 'src/bio-data/entities/bio-datum.entity';
import { Repository } from 'typeorm';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { LinkedIdentity } from './entities/linked-identity.entity';

@Injectable()
export class LinkedIdentityService {

  constructor(
    @InjectRepository(LinkedIdentity)
    private linkedIdentityRepository: Repository<LinkedIdentity>,
    @InjectRepository(BioDatum)
    private bioDataRepository: Repository<BioDatum>
  ){ }
  
  async create(createLinkedIdentityDto: CreateLinkedIdentityDto) {
    const newLinkedIdentity = this.linkedIdentityRepository.create(createLinkedIdentityDto);

    if(createLinkedIdentityDto.bioDatum){
      const newBioData = this.bioDataRepository.create(createLinkedIdentityDto.bioDatum);
      const bioDatum: BioDatum = await this.bioDataRepository.save(newBioData);
      newLinkedIdentity.bioDatum = bioDatum;
    }
    
    return this.linkedIdentityRepository.save(newLinkedIdentity)
    }
    //return 'This action adds a new linkedIdentity';

  async findAll() {
    //return `This action returns all linkedIdentitys`;
    return await this.linkedIdentityRepository.find(/*{ relations: ['linked-identity'] }*/);
  }

  async findOne(entry: number) {
    //return `This action returns a #${entry} linkedIdentity`;
    return await this.linkedIdentityRepository.findOne(entry);
  }

  async update(entry: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    //return `This action updates a #${entry} linkedIdentity`;
    return await this.linkedIdentityRepository.update(entry, updateLinkedIdentityDto);
  }

  async remove(entry: number) {
    //return `This action removes a #${entry} linkedIdentity`;
    return await this.linkedIdentityRepository.delete(entry);
  }

  /* Work on relationships */
  async setBioDataByEntry(linkedIdentityEntry: number, bioDataEntry: number) {
    try {
      return await
      this.linkedIdentityRepository.createQueryBuilder()
      .relation(LinkedIdentity, "bio-data")
      .of(linkedIdentityEntry)
      .set(bioDataEntry)
    } 
    catch (error) {
      throw new HttpException({
      status:
      HttpStatus.INTERNAL_SERVER_ERROR,
      error: `There was a problem setting bio-data for
      linkedIdentity: ${error.message}`,
      },
      HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  async unsetBioDataByEntry(linkedIdentityEntry: number) {
    try {
      return await this.linkedIdentityRepository.createQueryBuilder()
        .relation(LinkedIdentity, "bio-data")
        .of(linkedIdentityEntry)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting bio-data for linkedIdentity: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}