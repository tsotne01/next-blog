import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { convertDate } from "@/lib/utils";
import axios from "axios";

async function page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const response = await axios.get(`http://localhost:3000/api/post/${id}`);
  console.log(response.data);
  return (
    <Card>
      <CardTitle className="text-center text-4xl">
        {response.data.title}
      </CardTitle>
      <CardContent className="text-2xl">{response.data.content}</CardContent>
      <span className="inline-block mx-5 text-sm text-blue-600">
        Created At: {convertDate(response.data.createdAt)}
      </span>
    </Card>
  );
}

export default page;
