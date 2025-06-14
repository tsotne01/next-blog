import { Card, CardContent, CardTitle } from "./ui/card";

function PostComponent({ title, content }: { title: string; content: string }) {
  return (
    <Card className="px-2.5 max-h-56 min-w-sm hover:border-slate-800 border border-transparent hover:scale-[103%] transition">
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </Card>
  );
}

export default PostComponent;
