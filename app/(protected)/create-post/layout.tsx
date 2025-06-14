import type { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto sm:min-w-xl lg:max-w-5xl my-9">{children}</div>
  );
}

export default layout;
