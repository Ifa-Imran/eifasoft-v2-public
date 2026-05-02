import React from 'react';
import { SchemaOrgData } from '@/types';

interface SchemaMarkupProps {
  data: SchemaOrgData | SchemaOrgData[];
}

export function SchemaMarkup({ data }: SchemaMarkupProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0),
          }}
        />
      ))}
    </>
  );
}
