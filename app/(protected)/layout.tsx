import Header from "@/components/header";
import type { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  );
}

export default layout;
