import { NextFunction, Request, Response } from 'express';

interface Author {
  name: string;
  lastname: string;
}

interface ResponseBody {
  [key: string]: unknown;
  author?: Author;
}

/**
 * Middleware function that adds an author object to the response body.
 *
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next middleware function.
 */
export const authorMiddleware = (req: Request, res: Response, next: NextFunction) => {
  //Binds the original json method of the response object.
  const originalJson = res.json.bind(res);

  /**
   * Overrides the json method of the response object to add an author object to the response body.
   * @param body - The response body object.
   */
  res.json = (body: ResponseBody) => {
    const author = {
      name: 'Alberto',
      lastname: 'Arias',
    };

    const updatedBody: ResponseBody = {
      author,
      ...body,
    };

    return originalJson(updatedBody);
  };

  next();
};
