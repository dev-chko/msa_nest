import { AbstractRepositry } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { UserDocument } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository extends AbstractRepositry<UserDocument> {
  protected readonly logger = new Logger(UsersRepository.name);
  constructor(
    @InjectModel(UserDocument.name)
    usersModel: Model<UserDocument>,
  ) {
    super(usersModel);
  }
}
