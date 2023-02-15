import { Controller, Get, Param } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Customer } from './models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('customers')
  @ApiCreatedResponse({
    type: [Customer],
  })
  getCustomers(): Customer[] {
    return this.appService.getCustomers();
  }

  @Get('customers/:q')
  @ApiCreatedResponse({
    type: [Customer],
  })
  getFilteredCustomers(@Param('q') query: string): Customer[] {
    return this.appService.getCustomersByFilterParam(query);
  }
}
