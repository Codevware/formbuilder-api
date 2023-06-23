import { createResponse } from '../helpers';

const ValidationGuard =
  ({ reqBody, reqQuery, reqParams, reqHeaders }) =>
  (req, res, next) => {
    const { body, query, params, headers } = req;
    const _errors = [];
    if (reqBody) {
      const { error } = reqBody.validate(body);
      if (error) {
        const { message, details } = error;
        _errors.push({ message, details });
      }
    }

    if (reqQuery) {
      const { error } = reqQuery.validate(query);
      if (error) {
        const { message, details } = error;
        _errors.push({ message, details });
      }
    }

    if (reqParams) {
      const { error } = reqParams.validate(params);
      if (error) {
        const { message, details } = error;
        _errors.push({ message, details });
      }
    }

    if (reqHeaders) {
      const { error } = reqHeaders.validate(headers);
      if (error) {
        const { message, details } = error;
        _errors.push({ message, details });
      }
    }

    if (_errors.length > 0) {
      return res.status(422).json(
        createResponse({
          code: 422,
          data: null,
          err: _errors,
        }),
      );
    }

    next();
  };

export default ValidationGuard;
