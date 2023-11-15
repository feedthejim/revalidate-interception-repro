import { cacheFn } from "../cache-fn";

export default async function () {
  return <div>non-intercepted foo {await cacheFn()}</div>;
}

export const dynamic = "force-dynamic";
