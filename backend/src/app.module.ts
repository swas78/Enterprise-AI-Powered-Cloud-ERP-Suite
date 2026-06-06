import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaService } from './prisma.service';
import { TenantNestController } from './controllers/tenantController';
import { join } from 'path';

import { DummyResolver } from './dummy.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
  ],
  controllers: [TenantNestController],
  providers: [PrismaService, DummyResolver],
  exports: [PrismaService],
})
export class AppModule {}
