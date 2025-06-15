import { GETBYHANDLE } from "@/graphQl";
import { shopifyClient } from "./shopifyClient";
type idtype={
 id:string
}
export async function getByHandle({id}:idtype) {
  return shopifyClient({
    query:GETBYHANDLE ,
    variables:{handle:id}
  });
}