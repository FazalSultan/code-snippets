import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {handleDeleteAction} from '@/action/index'

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
  const handleDeleteSnippet  = handleDeleteAction.bind(null , id)

  return (
    <div className="container mx-auto p-4 ">
      <div className="buttons flex gap-3 float-right">
        {searchById && (
          <Link href={`/snippet/${searchById.id}/edit`}>
            <Button>Edit</Button>
          </Link>
        )}
        <form action={handleDeleteSnippet}>
          <Button variant="destructive" disabled={!searchById}>
            Delete
          </Button>
        </form>
      </div>
      <div className="flex flex-col my-10 gap-4">
        <p className="font-bold text-2xl">
          {searchById ? searchById.title : "Snippet not found."}
        </p>
        <pre className="codeContainer bg-gray-200 p-4 rounded ">
          <code>{searchById ? searchById.code : "Snippet not found."}</code>
        </pre>
      </div>
    </div>
  );
}
