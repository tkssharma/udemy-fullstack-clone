import { NestMiddleware, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

export class CourseManagerMiddleware implements NestMiddleware {
  private proxy = createProxyMiddleware({
    target: 'http://localhost:3003/api/v1',
    pathRewrite: {
      '/api/v1/course-manager': '/',
    },
    secure: false,
    onProxyReq: (proxyReq, req, res) => {
      console.log(proxyReq);
    },
  });

  use(req: Request, res: Response, next: () => void) {
    //console.log(res);
    this.proxy(req, res, next);
  }
}
