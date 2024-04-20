/**
 * Title: book.interface.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 4/19/2024
 * Description: Book interface
 */
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
