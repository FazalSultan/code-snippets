import React from 'react';
import CreateEditorForm from '@/components/ui/CreateEditorForm';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

export default async function EditSnipetCode({ params }: { params: Promise<{ id: string }> }) {
  const { id: idString } = await params;

  const id = parseInt(idString);

  // Check if the ID is not a valid number
  if (isNaN(id)) {
    notFound();
  }

  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  // Check if snippet doesn't exist
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
