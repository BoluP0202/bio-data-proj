export class CreateBioDatumDto {
    readonly firstName: string;
    readonly middleName?: string;
    readonly lastName: string;
    readonly DOB?: Date;
    readonly nationality?: string;
    readonly countryOfBirth?: string;
    readonly stateOfBirth?: string;
    readonly townOfBirth?: string;
    readonly address?: string;
    readonly profession?: string;
}
