import { Card, CardContent, CardTitle } from "@/components/ui/card";
import axios from "axios";

async function page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const response = await axios.get(`http://localhost:3000/api/post/${id}`);
  console.log(response.data);
  return (
    <Card>
      <CardTitle className="text-center text-3xl">
        {response.data.title}
      </CardTitle>
      <CardContent className="text-2xl">{response.data.content}</CardContent>
    </Card>
  );
}

export default page;
