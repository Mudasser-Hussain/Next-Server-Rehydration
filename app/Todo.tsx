import { makeStore } from "@/lib/store/configureStore";
import { loadtodosAsync } from "@/lib/store/entities/todoswithapi";
import { Todo } from "./components/Todos";

export default async function TodoPage() {
  const {dispatch} = makeStore()
  const res  =await dispatch(loadtodosAsync())
  if(!res?.data)
    return null
  return (
    <div>
     <Todo data={res?.data} />
    </div>
  );
}
