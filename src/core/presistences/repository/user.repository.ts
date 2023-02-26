import { Inject, Injectable } from '@nestjs/common';
import { ConstantEntity, User } from '../entity/sequelize';

@Injectable()
export class UserRepository {
  constructor(
    @Inject(ConstantEntity.USER_REPOSITORY)
    private readonly userRepo: typeof User,
  ) {}

  async findOneById(id: number): Promise<User> {
    return await this.userRepo.findOne<User>({ where: { id: id } });
  }
}
