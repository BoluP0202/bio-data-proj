import { CreateBioDatumDto } from "src/bio-data/dto/create-bio-datum.dto";
export class CreateLinkedIdentityDto {
    readonly NIN: string;
    readonly BVN: string;
    readonly phoneNumber: string;
    readonly bioDatum: CreateBioDatumDto;
}
