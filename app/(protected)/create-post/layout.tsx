import type { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-5xl my-9">{children}</div>;
}

export default layout;
