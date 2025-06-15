import Link from "next/link";
import { Button } from "./ui/button";
import { LogOutIcon, Pencil, UserRound } from "lucide-react";
function Header() {
  return (
    <header className="w-full md:w-[65%] mx-auto rounded-2xl mt-6 flex items-center justify-center border-b-sky-300 border-1  mb-6">
      <nav className="w-full flex justify-center sm:p-2 md:p-4">
        <ul className="flex justify-around items-center w-full md:w-full px-6 text-base">
          <li>
            <Link
              className="dark:hover:text-blue-300 dark:text-white text-black font-bold text-xl flex gap-2 hover:underline"
              href={"/posts"}
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              className="dark:text-green-300 dark:hover:text-green-100 text-black font-bold text-xl flex gap-2 hover:underline"
              href={"/create-post"}
            >
              <Pencil width={16} />
              Create Post
            </Link>
          </li>
          <li>
            <Link
              className="dark:text-blue-300 dark:hover:text-blue-100 text-black font-bold text-xl flex gap-2 hover:underline"
              href={"/profile"}
            >
              <UserRound width={16} />
              Profile
            </Link>
          </li>
          <Button className="hover:bg-red-700 hover:text-white transition cursor-pointer flex gap-2 hover:underline">
            <LogOutIcon width={16} />
            Logout
          </Button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
