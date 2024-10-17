import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './entities/menu.entity';


@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() menu: Menu): Promise<Menu> {
    return this.menuService.create(menu);
  }

  @Get()
  findAll(): Promise<Menu[]> {
    return this.menuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Menu> {
    return this.menuService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() menu: Menu): Promise<Menu> {
    return this.menuService.update(id, menu);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.menuService.remove(id);
  }
}
