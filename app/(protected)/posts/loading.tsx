import { Loader } from "lucide-react";

function loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader className="w-15 h-15" />
    </div>
  );
}

export default loading;
