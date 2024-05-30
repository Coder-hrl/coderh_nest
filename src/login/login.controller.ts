import { Controller, Get, Post, Body, Query, Param, Delete, UseInterceptors, UploadedFile, Inject } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService, @Inject("person") private readonly person: { name: string, age: number }) { }

  @Post("add")
  create(@Body() createLoginDto: CreateLoginDto) {
    console.log(this.person)
    return this.loginService.create(createLoginDto);
  }

  @Post("file")
  @UseInterceptors(AnyFilesInterceptor({
    dest: "uploads/"
  }))
  body2(@Body() createLoginDto: CreateLoginDto, @UploadedFile() files: Array<Express.Multer.File>) {
    return `received: ${JSON.stringify(createLoginDto)}`
  }

  @Get('find')
  query(@Query('name') name: string, @Query("age") age: number) {

    return this.loginService.update(name, age);
  }


  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
