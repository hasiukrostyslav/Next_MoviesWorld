'use client';

export class ServerError extends Error {
  readonly statusCode: number = 500;
  readonly status: string = 'fail';
  readonly isOperational: boolean = true;

  constructor(message: string) {
    super(message);
  }
}

export class AuthError extends Error {
  readonly statusCode: number = 401;
  readonly status: string = 'error';
  readonly isOperational: boolean = true;

  constructor(message: string) {
    super(message);
  }
}
