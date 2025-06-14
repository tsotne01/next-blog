import axios from "axios";

async function page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const response = await axios.get(`http://localhost:3000/api/post/${id}`);
  console.log(response.data);
  return <div>title:{response.data.title}</div>;
}

export default page;
