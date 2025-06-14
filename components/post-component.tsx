import { Card, CardContent, CardTitle } from "./ui/card";

function PostComponent({ title, content }: { title: string; content: string }) {
  return (
    <Card className="px-2.5 max-h-56 min-w-xl">
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </Card>
  );
}

export default PostComponent;
