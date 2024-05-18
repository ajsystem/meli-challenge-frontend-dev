import { Request, Response } from 'express';
import { getCategoriesAction, getItemAction, getItemDescriptionAction, getItemsAction } from '../shared/actions';
import { categoriesFromItemsResponse, countDecimals } from '../shared/utils';

export class ItemsController {
  /**
   * Queries items based on the provided query string.
   *
   * @param {Request} req - Express request object containing the query string in the query parameter.
   * @param {Response} res - Express response object to send the items and categories.
   *
   * @returns {Promise<void>} - A promise that resolves when the items and categories are sent to the client.
   *
   * The items and categories are sent to the client in the following format:
   * {
   *   categories: string[];
   *   items: {
   *     id: string;
   *     title: string;
   *     price: {
   *       currency: string;
   *       amount: number;
   *       decimals: number;
   *     };
   *     picture: string;
   *     condition: string;
   *     free_shipping: boolean;
   *   }[];
   * }
   *
   * @throws {Error} - If an error occurs while fetching the items or categories.
   */
  static async queryItems(req: Request, res: Response) {
    try {
      const { q } = req.query;
      if (!q) {
        return res.status(400).send({
          error: 'Bad Request',
          message: 'The query (q) parameter is required, example: /items?q=query-string',
        });
      }
      const itemsResponse = await getItemsAction(q as string);
      const categories = await categoriesFromItemsResponse(itemsResponse);
      const items = itemsResponse.results.map((item) => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: countDecimals(item.price),
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping || false,
      }));

      res.status(200).json({
        categories,
        items,
      });
    } catch (error) {
      console.log('Error querying items');
      console.error(error);
      res.status(500).send({
        error: 'Internal Server Error',
        message: 'Something went wrong!',
      });
    }
  }

  /**
   * Retrieves an item by its id.
   *
   * @param {Request} req - Express request object containing the item id in the params.
   * @param {Response} res - Express response object to send the item details.
   *
   * @returns {Promise<void>} - A promise that resolves when the item details are sent to the client.
   *
   * The item details are sent to the client in the following format:
   * item: {
   *   id: string;
   *   title: string;
   *   categories: string[];
   *   price: {
   *     currency: string;
   *     amount: number;
   *     decimals: number;
   *   };
   *   picture: string;
   *   condition: string;
   *   free_shipping: boolean;
   *   sold_quantity: number;
   *   description: string;
   * }
   *
   * @throws {Error} - If an error occurs while fetching the item details or description.
   */
  static async getItemById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const itemDetailsPromise = getItemAction(id);
      const itemDescriptionPromise = getItemDescriptionAction(id);

      const [itemDetails, itemDescription] = await Promise.all([itemDetailsPromise, itemDescriptionPromise]);

      const categoriesResponse = await getCategoriesAction(itemDetails.category_id);
      const categories = categoriesResponse.path_from_root.map((category) => category.name);

      res.status(200).json({
        item: {
          id: itemDetails.id,
          title: itemDetails.title,
          categories,
          price: {
            currency: itemDetails.currency_id,
            amount: itemDetails.price,
            decimals: countDecimals(itemDetails.price),
          },
          picture: itemDetails.pictures[0]?.url || itemDetails.thumbnail,
          condition: itemDetails.condition,
          free_shipping: itemDetails.shipping.free_shipping || false,
          sold_quantity: itemDetails.sold_quantity || 0,
          description: itemDescription.plain_text,
        },
      });
    } catch (error) {
      console.log('Error getting item by id');
      console.error(error);
      res.status(500).send({
        error: 'Internal Server Error',
        message: 'Something went wrong!',
      });
    }
  }
}
