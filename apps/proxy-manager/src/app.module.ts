import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryManagerMiddleware } from './middleware/category-manager.proxy.middleware';
import { CourseManagerMiddleware } from './middleware/course-manager.proxy.middleware';
import { UserPrefManagerMiddleware } from './middleware/user-pref-manager.proxy.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CategoryManagerMiddleware)
      .forRoutes({ path: 'v1/category-manager', method: RequestMethod.ALL });

    consumer
      .apply(CourseManagerMiddleware)
      .forRoutes({ path: 'v1/course-manager', method: RequestMethod.ALL });

    consumer
      .apply(UserPrefManagerMiddleware)
      .forRoutes({ path: 'v1/user-perf-manager', method: RequestMethod.ALL });
  }
}
