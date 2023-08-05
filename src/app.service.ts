import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We are SIFFER, <a href="/api">API</a>';
  }
}
