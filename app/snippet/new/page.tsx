import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation";

async function createSnippet(formData: FormData) {
  "use server"; 
  const title = formData.get("title") as string;
  const code = formData.get("codedescription") as string;

  const snippetCode = await prisma.Snippet.create({
    data: {
      title,
      code,
    },
  });

  redirect('/');
}

export default function NewSnippet() {
  return (
    <div className="container mx-auto p-7">
      <h3 className="font-bold text-3xl py-10">Think Twice, Code once ✨😎</h3>
      <form action={createSnippet}>
        <Label className="font-medium">Title</Label>
        <Input type="text" name="title" id="title" />
        <Label className="font-medium mt-7">Code: </Label>
        <Textarea name="codedescription" id="codedescription" />
        <Button type="submit" className="mt-4">New</Button>
      </form>
    </div>
  );
}
