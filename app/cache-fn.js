import { unstable_cache } from "next/server";

export function cacheFn() {
  return unstable_cache(
    () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`${Math.random()}`);
        }, 5000);
      });
    },
    ["foo"],
    { revalidate: 60 * 60 * 24 }
  )();
}
