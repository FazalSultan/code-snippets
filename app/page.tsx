import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

type sneppetCode = {
  id: number;
  title: string;
  code: string;
};
export default async function Home() {
  const snippet = await prisma.snippet.findMany();
  return (
    <>
      <div className="MainContainer p-8 ">
        <div className="container flex justify-between mx-auto">
          <h3 className="font-bold text-3xl">  Snippets</h3>
          <Link href="./snippet/new">
            {" "}
            <Button>New</Button>{" "}
          </Link>
        </div>
        <div className="container mx-auto">
          {snippet.map((snippetContent: sneppetCode) => (
            <h3
              className="bg-gray-200 rounded p-2 flex justify-between my-4"
              key={snippetContent.id}
            >
              {" "}
              {snippetContent.title}
              <Link href={`./snippet/${snippetContent.id}`}>
                {" "}
                <Button variant="link"> View</Button>{" "}
              </Link>
            </h3>
          ))}
        </div>
      </div>
    </>
  );
}
