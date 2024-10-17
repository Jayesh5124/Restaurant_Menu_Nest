

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Menu } from './entities/menu.entity';

@Injectable()

export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>, // Use Menu entity directly
  ) {}

  create(menu: Menu): Promise<Menu> {
    return this.menuRepository.save(menu);
  }

  findAll(): Promise<Menu[]> {
    return this.menuRepository.find();
  }

  async findOne(id: string): Promise<Menu> {
    return this.menuRepository.findOneBy({ id: new ObjectId(id) });
  }

  async update(id: string, menu: Menu): Promise<Menu> {
    await this.menuRepository.update(id, menu);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.menuRepository.delete(new ObjectId(id));
  }
}

