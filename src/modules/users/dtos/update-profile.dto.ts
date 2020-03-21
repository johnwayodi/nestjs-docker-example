import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileDto {
  @ApiProperty({
    description: 'First name of the user',
    type: String,
  })
  firstName: string;

  @ApiProperty({
    description: 'Last name of the user',
    type: String,
  })
  lastName: string;

  @ApiProperty({
    description: 'Phone Number of the user',
    type: String,
  })
  phoneNo: string;

  @ApiProperty({
    description: 'Home Address of the user',
    type: String,
  })
  address: string;
}
