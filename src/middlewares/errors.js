import { createResponse } from '../helpers';

export const globalErrorHandler = (error, _, response, __) => response.status(500).render('error', {
    title: error.message ? error.message : 'Internal Server Error!',
    layout: 'layouts/page',
    status: 'HTTP/500',
  });

export const APIErrorHandler = (error, req, response, next) => {
  if (error.isJoi) {
    return response.status(500).json(
      createResponse({
        code: 406,
        err: error,
        message: error.message ? error.message : 'Error! <APIs>',
      }),
    );
  }

  return response.status(500).json(
    createResponse({
      code: 500,
      err: error,
      message: error.message ? error.message : 'Error! <APIs>',
    }),
  );
};
