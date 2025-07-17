import React from 'react';
import CreateEditorForm from '@/components/ui/CreateEditorForm';
import { prisma } from '@/lib/prisma';

export default async function EditSnipetCode({ params }: { params: Promise< { id: string } > }) {
  const id = parseInt((await params).id); 

  const snippet : string = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });


  return (
    <div className="maineditLayout">
      <div className="container mx-auto p-5">
        <CreateEditorForm snippet={snippet} />
      </div>
    </div>
  );
}
