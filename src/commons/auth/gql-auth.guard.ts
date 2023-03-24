import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

export class GqlAuthAccessGuard extends AuthGuard('accessGuard') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);

    return ctx.getContext().req;
  }
}

export class GqlAuthRefreshGuard extends AuthGuard('refreshGuard') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}

// @Injectable()
// export class GoogleAuthGuard extends AuthGuard('google') {
//   async canActivate(context: ExecutionContext) {
//     const activate = (await super.canActivate(context)) as boolean;
//     const request = context.switchToHttp().getRequest();
//     await super.logIn(request);
//     return activate;
//   }
// }
