import { CreateBioDatumDto } from "src/bio-data/dto/create-bio-datum.dto";
export class CreateLinkedIdentityDto {
    readonly NIN: number;
    readonly BVN: number;
    readonly phoneNumber: number;
    readonly bioDatum: CreateBioDatumDto;
}
