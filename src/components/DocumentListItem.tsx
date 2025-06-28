import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, BadgeProps } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, ChevronRight } from 'lucide-react';

// Define the possible statuses for a document for strong typing
export type DocumentStatus = 'Awaiting Signature' | 'Completed' | 'Rejected';

interface DocumentListItemProps {
  title: string;
  status: DocumentStatus;
  date: string; // e.g., "June 28, 2024"
  documentId: string; // Included for future use if routing becomes dynamic, e.g., /document-view/:id
}

const DocumentListItem: React.FC<DocumentListItemProps> = ({ title, status, date, documentId }) => {
  console.log(`DocumentListItem loaded for document ID: ${documentId}`);

  // Helper function to determine badge variant based on status
  const getBadgeVariant = (status: DocumentStatus): BadgeProps['variant'] => {
    switch (status) {
      case 'Completed':
        return 'default'; // In shadcn, 'default' is often green or blue (like a success state)
      case 'Awaiting Signature':
        return 'secondary'; // A neutral, attention-grabbing color
      case 'Rejected':
        return 'destructive'; // The red warning color
      default:
        return 'outline';
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 p-4 border-b transition-colors hover:bg-muted/50 last:border-b-0">
      <div className="flex items-center gap-4 flex-grow min-w-0">
        <FileText className="h-6 w-6 text-muted-foreground flex-shrink-0" />
        <div className="flex flex-col min-w-0">
          <p className="font-semibold truncate" title={title}>{title}</p>
          <p className="text-sm text-muted-foreground">Added: {date}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
        <Badge variant={getBadgeVariant(status)} className="hidden sm:inline-flex justify-center w-[130px]">
          {status}
        </Badge>
        
        {/* The route from App.tsx is currently static to "/document-view" */}
        <Button asChild variant="outline" size="sm">
          <Link to="/document-view">
            View
            <ChevronRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DocumentListItem;