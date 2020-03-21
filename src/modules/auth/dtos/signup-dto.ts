import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
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
    description: 'Email of the user',
    type: String,
  })
  email: string;

  @ApiProperty({
    description: 'Password of the user',
    type: String,
  })
  password: string;
}
