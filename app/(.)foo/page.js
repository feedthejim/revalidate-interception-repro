import { cacheFn } from "../cache-fn";
import { unstable_noStore } from "next/cache";

export default async function () {
  unstable_noStore();
  return <div>intercepted-foo {await cacheFn()}</div>;
}
