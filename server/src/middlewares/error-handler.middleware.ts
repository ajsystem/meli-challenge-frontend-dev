import { Request, Response } from 'express';

/**
 * Error handling middleware for Express applications.
 * This middleware is responsible for catching and handling any errors that occur during the request-response cycle.
 * It logs the error to the console for debugging purposes, but in a production environment, it should be replaced with a proper logging service.
 *
 * @param {Error} err - The error object that was thrown.
 * @param {Request} req - The request object that triggered the error.
 * @param {Response} res - The response object that will send the error response.
 *
 * @returns {void} - This middleware does not return any value, but it sets the HTTP status code and sends an error response.
 */
export const errorHandlerMiddleWare = (err: Error, req: Request, res: Response) => {
  // The error is logged to the console for challenge purposes. It should not be used in production, instead should be handled by a logger service.
  console.error(err.stack);
  res.status(500).send({
    error: 'Internal Server Error',
    message: 'Something went wrong!',
  });
};
