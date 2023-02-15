import { Injectable } from '@nestjs/common';
import { Customer } from './models';

const customers: Customer[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'test@mail.com',
    plan: 'basic'
  },
  {
    id: 2,
    name: 'Customer 2',
    email: 'test2@mail.com',
    plan: 'premium'
  },
  {
    id: 3,
    name: 'Customer 3',
    email: 'test3@mail.com',
    plan: 'medium'
  },
  {
    id: 4,
    name: 'Customer 4',
    email: 'test4@mail.com',
    plan: 'basic'
  }
]


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCustomers(): Customer[] {
    return customers;
  }

  getCustomersByFilterParam(param: string): Customer[] {
    const filteredList = customers.filter(customer => {
      return customer.plan.includes(param) || customer.name.includes(param) || customer.email.includes(param);
    });

    return filteredList
  }
}
