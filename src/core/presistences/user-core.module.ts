import { Module } from '@nestjs/common';
import { UserRepository } from './repository';
import { usersProviders } from './repository/provider';

@Module({
  providers: [UserRepository, ...usersProviders],
  exports: [UserRepository],
})
export class UserCoreModule {}
