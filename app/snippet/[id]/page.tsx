import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { handleDeleteAction } from "@/action/index";

export default async function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: idString } = await params;

    const id = parseInt(idString);

    // If id is invalid (e.g., not a number)
    if (isNaN(id)) {
      return <div className="text-red-500 text-center mt-10">❌ Invalid Snippet ID</div>;
    }

    const searchById = await prisma.snippet.findUnique({
      where: { id },
    });

    // If snippet not found
    if (!searchById) {
      return <div className="text-yellow-500 text-center mt-10">⚠️ Snippet Not Found</div>;
    }

    const handleDeleteSnippet = handleDeleteAction.bind(null, id);

    return (
      <div className="container mx-auto p-4 ">
        <div className="buttons flex gap-3 float-right">
          <Link href={`/snippet/${searchById.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={handleDeleteSnippet}>
            <Button variant="destructive">Delete</Button>
          </form>
        </div>

        <div className="flex flex-col my-10 gap-4">
          <p className="font-bold text-2xl">{searchById.title}</p>
          <pre className="codeContainer bg-gray-200 p-4 rounded ">
            <code>{searchById.code}</code>
          </pre>
        </div>
      </div>
    );
  } catch (error) {
    console.error("❌ Error loading snippet:", error);
    return <div className="text-red-500 text-center mt-10">🚨 Something went wrong</div>;
  }
}
