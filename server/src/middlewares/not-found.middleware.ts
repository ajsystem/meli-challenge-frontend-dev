import { Request, Response } from 'express';

/**
 * Middleware function to handle 404 Not Found errors.
 *
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 *
 * @returns {void} - Sends a 404 error response with a JSON object containing an error message.
 */
export const notFoundMiddleware = (req: Request, res: Response) => {
  res.status(404).send({
    error: 'Not Found',
    message: 'The requested resource could not be found',
  });
};
