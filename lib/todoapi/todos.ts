import { AxiosResponseWithError, serverHttp } from "../http";


type Todo = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
  };
  
 export type TodosResponse = {
    todos: Todo[];  // Array of Todo objects
    total: number;  // Total number of items
    skip: number;   // Number of skipped items
    limit: number;  // Number of items returned (e.g., pagination limit)
  };

export class Todos {
  static route: string = 'http://localhost:3000/api';
  static all = async (): Promise<AxiosResponseWithError<TodosResponse>> => {
    return await serverHttp.request<TodosResponse>({
      url: `${this.route}`,cache:{
        ttl:1000 * 60 * 20
      }
    });
  };
  
//   static getbyId = async (title: string): Promise<AxiosResponseWithError<Blog>> => {
//     return await serverHttp.request<Blog>({
//       url: `${this.route}/${title}`,
//     });
//   };
}
