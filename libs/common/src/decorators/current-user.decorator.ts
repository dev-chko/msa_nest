import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDocument } from '@app/common';
// import { UserDocument } from '../models/users.schema';

const getCurrentUserByContext = (context: ExecutionContext): UserDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (__data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
