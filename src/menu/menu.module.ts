// import { Module } from '@nestjs/common';
// import { MenuService } from './menu.service';
// import { MenuController } from './menu.controller';

// @Module({
//   controllers: [MenuController],
//   providers: [MenuService],
// })
// export class MenuModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { Menu } from './entities/menu.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Menu])], // Correctly import the Menu entity
  providers: [MenuService],
  controllers: [MenuController],
})
export class MenuModule {}
