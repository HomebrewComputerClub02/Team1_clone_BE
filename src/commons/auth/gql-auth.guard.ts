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
