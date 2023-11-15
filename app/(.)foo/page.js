import { cacheFn } from "../cache-fn";

export default async function () {
  return <div> {await cacheFn()}</div>;
}

export const dynamic = "force-dynamic";
