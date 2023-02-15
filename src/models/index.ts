import { ApiProperty } from "@nestjs/swagger";

export class Customer {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    plan: string;
}