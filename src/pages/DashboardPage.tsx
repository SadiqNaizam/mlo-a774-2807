import React from 'react';

// Import Custom Components
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import DocumentListItem, { DocumentStatus } from '@/components/DocumentListItem';

// Import shadcn/ui Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Placeholder data for the document list
const documents: { id: string; title: string; status: DocumentStatus; date: string; }[] = [
  {
    id: 'DOC001',
    title: 'Project Alpha - Service Level Agreement',
    status: 'Awaiting Signature',
    date: 'July 15, 2024',
  },
  {
    id: 'DOC002',
    title: 'Q2 2024 Financial Statement',
    status: 'Completed',
    date: 'June 28, 2024',
  },
  {
    id: 'DOC003',
    title: 'Employee Handbook Acknowledgement',
    status: 'Completed',
    date: 'June 1, 2024',
  },
  {
    id: 'DOC004',
    title: 'Vendor Contract Renewal - Expired',
    status: 'Rejected',
    date: 'May 20, 2024',
  },
];

const DashboardPage = () => {
  console.log('DashboardPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <AppHeader isAuthenticated={true} />
      
      <main className="flex-1 py-8 md:py-12">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Welcome Back!</h1>
            <p className="text-muted-foreground">Here are the documents that need your attention.</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Documents</CardTitle>
              <CardDescription>
                Review and sign documents assigned to you.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              {/* Document List */}
              <div className="divide-y">
                {documents.map((doc) => (
                  <DocumentListItem
                    key={doc.id}
                    documentId={doc.id}
                    title={doc.title}
                    status={doc.status}
                    date={doc.date}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default DashboardPage;