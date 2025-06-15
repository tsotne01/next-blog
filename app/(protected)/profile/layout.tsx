import type { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-[1440px] p-4">{children}</div>;
}

export default layout;
