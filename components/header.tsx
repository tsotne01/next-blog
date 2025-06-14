import Link from "next/link";
import { Button } from "./ui/button";
import { LogOutIcon, Pencil, UserRound } from "lucide-react";
function Header() {
  return (
    <header className="w-full flex items-center justify-center border-b-sky-300 border-1  mb-6">
      <nav className="w-full flex justify-center sm:p-2 md:p-4">
        <ul className="flex justify-between md:w-1/2 text-base">
          <li>
            <Link className="hover:text-blue-300 flex gap-2" href={"/posts"}>
              Posts
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-300 flex gap-2"
              href={"/create-post"}
            >
              <Pencil width={16} />
              Create Post
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-300 flex gap-2" href={"/profile"}>
              <UserRound width={16} />
              Profile
            </Link>
          </li>
          <Button className="hover:bg-black hover:text-white transition cursor-pointer flex gap-2">
            <LogOutIcon width={16} />
            Logout
          </Button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
