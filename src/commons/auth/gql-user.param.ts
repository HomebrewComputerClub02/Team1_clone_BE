import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Field, GqlExecutionContext, ObjectType } from '@nestjs/graphql';
import { Model } from 'src/apis/model/model.entity';

@ObjectType()
export class fetchUser {
  @Field(() => String)
  email: string;

  @Field(() => String)
  id: string;
}

export const CurrentUser = createParamDecorator(
  (data, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);
