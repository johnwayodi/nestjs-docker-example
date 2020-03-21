import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'Email of the user',
    type: String,
  })
  username: string;

  @ApiProperty({
    description: 'Password of the user',
    type: String,
  })
  password: string;
}
