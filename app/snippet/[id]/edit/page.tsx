import React from 'react';
import CreateEditorForm from '@/components/ui/CreateEditorForm';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';


export default async function EditSnipetCode({ params }: { params: Promise< { id: string } > }) {
  const id = parseInt((await params).id); 

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
   if (!snippet) {
    notFound();
  }


  return (
    <div className="maineditLayout">
      <div className="container mx-auto p-5">
        <CreateEditorForm snippet={snippet} />
      </div>
    </div>
  );
}
