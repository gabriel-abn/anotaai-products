export type HttpRequest<T = any> = {
  body: T;
  params?: any;
  query?: any;
  headers?: any;
};

export type HttpResponse = {
  statusCode: number;
  body: any;
};

export const badRequest = (
  error: Error | string,
  status: number = 400,
): HttpResponse => {
  if (error instanceof Error) {
    return {
      statusCode: status,
      body: {
        error: error.name,
        message: error.message,
      },
    };
  }

  return {
    statusCode: status,
    body: error,
  };
};

export const success = (data: any, status: number = 200): HttpResponse => {
  return {
    statusCode: status,
    body: data,
  };
};
