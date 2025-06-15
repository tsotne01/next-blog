import Image from "next/image";
import { Card, CardTitle } from "./ui/card";
import { Inter } from "next/font/google";
import { Button } from "./ui/button";
import { convertDate } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "700", "900"],
});

function PostComponent({
  title,
  content,
  date,
  imageSrc,
}: {
  title: string;
  content: string;
  date: string;
  imageSrc: string;
}) {
  return (
    <Card className="p-4 rounded-3xl min-w-sm hover:shadow-blue-300/50 hover:shadow-lg hover:border-slate-800 border border-transparent hover:scale-[103%] transition">
      <Image
        width={384}
        height={164}
        src={imageSrc}
        alt="background"
        className="max-w-full max-h-[165px] rounded-[8px] aspect-square object-fit"
      />
      <span
        className={`text-sm text-gray-500 ${inter.className} ${inter.variable}`}
      >
        {convertDate(date)}
      </span>
      <CardTitle className="text-xl">{title}</CardTitle>
      <span
        className={` text-gray-500 mx-0 ${inter.className} ${inter.variable}`}
      >
        {content}
      </span>
      <Button
        className={`self-end text-sm font-bold cursor-pointer ${inter.className} ${inter.variable}`}
      >
        View Post
      </Button>
    </Card>
  );
}

export default PostComponent;
