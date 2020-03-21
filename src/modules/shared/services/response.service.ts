import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class ResponseService {
  sendResponse(res: Response, statusCode: number, message: string, data?: any) {
    res.status(statusCode).json({ message, data });
  }
}
