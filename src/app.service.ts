import { Inject, Injectable } from '@nestjs/common';
import { LoginService } from './login/login.service';

@Injectable()
export class AppService {

  // 在controller中使用constructor中注入
  // 在service中使用@Inject装饰器注入
  @Inject(LoginService)
  private loginService: LoginService;


  getHello(): string {
    return this.loginService.findAll()
  }
}
