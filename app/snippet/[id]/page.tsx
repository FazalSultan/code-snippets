import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function DetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id);

  const searchById = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  return (
    <div className="container mx-auto p-4 ">
      <div className="buttons flex gap-3 float-right">
       <Link href={`/snippet/${searchById.id}/edit`}>  <Button>Edit</Button> </Link>
        <Button variant="destructive">Delete</Button>
      </div>
      <div className="flex flex-col my-10 gap-4">
        <p className="font-bold text-2xl">{searchById ? searchById.title : "Snippet not found."}</p>
        <pre className="codeContainer bg-gray-200 p-4 rounded ">
          <code>{searchById ? searchById.code : "Snippet not found."}</code>
        </pre>
      </div>
    </div>
  );
}
