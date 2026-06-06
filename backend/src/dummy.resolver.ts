import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class DummyResolver {
  @Query(() => String)
  hello(): string {
    return 'GraphQL is alive in AMDOX ERP!';
  }
}
