import { unstable_noStore } from "next/cache";
import { cacheFn } from "../cache-fn";

export default async function () {
  unstable_noStore();
  return <div>non-intercepted foo {await cacheFn()}</div>;
}
