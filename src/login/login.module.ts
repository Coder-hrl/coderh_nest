import { Module, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { ModuleRef } from '@nestjs/core';

@Module({
  controllers: [LoginController],
  providers: [{
    provide: LoginService,
    useClass: LoginService
  }, {
    provide: "person",
    useValue: {
      name: "assd",
      age: 20
    }
  }],
  exports: [LoginService]
})
export class LoginModule implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, OnApplicationShutdown {
  constructor(private moduleRef: ModuleRef) { }
  onModuleInit() {
    console.log("ccmodule onModuleInit")
  }
  onApplicationBootstrap() {
    console.log("ccmodule onApplicationBootstrap")
  }
  onModuleDestroy() {
    console.log("ccmodule onModuleDestroy")
  }
  onApplicationShutdown(signal?: string) {
    // 这样才可以互殴到provider实例啊  拿到当前的moduleRef 调用get方法 传入token
    const service = this.moduleRef.get<LoginService>(LoginService)

    console.log(service)
    console.log("ccmodule onApplicationShutdown")
  }
}

// onModuleInit onAplicationBootStrap omModuleDestroy beforeAplicationShutdown stop listener