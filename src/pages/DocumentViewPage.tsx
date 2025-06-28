import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Custom Layout Components
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import SignaturePad from '@/components/SignaturePad';

// shadcn/ui Components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const DocumentViewPage = () => {
  console.log('DocumentViewPage loaded');
  const navigate = useNavigate();

  const handleSignatureConfirm = (signatureDataUrl: string) => {
    console.log('Signature confirmed. Data URL captured.');
    // In a real app, you would send signatureDataUrl to your backend here.
    
    toast.success('Document Signed Successfully!');

    // Redirect back to the dashboard after a short delay to allow the user to see the toast.
    setTimeout(() => {
      navigate('/dashboard'); // Path from App.tsx
    }, 1500);
  };

  const documentPlaceholderText = (
    <>
      <h3 className="text-lg font-semibold mb-2">Employee Agreement</h3>
      <p className="mb-4">This Employee Agreement (the "Agreement") is entered into as of this day, by and between QuickSign Portal Inc. ("the Company") and the undersigned employee ("the Employee").</p>
      
      <h4 className="font-semibold mt-4 mb-2">1. Position and Duties</h4>
      <p className="mb-4">The Employee's initial title will be a valued team member. The Employee's duties may be reasonably modified at the Company's discretion from time to time.</p>

      <h4 className="font-semibold mt-4 mb-2">2. Compensation</h4>
      <p className="mb-4">The Company will pay the Employee a starting salary as previously discussed, payable in bi-weekly installments, subject to standard payroll deductions and withholdings. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>

      <h4 className="font-semibold mt-4 mb-2">3. Confidentiality</h4>
      <p className="mb-4">The Employee acknowledges that they will have access to confidential information. The Employee agrees not to disclose this information to any third party. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>

      <h4 className="font-semibold mt-4 mb-2">4. Term and Termination</h4>
      <p>This is an "at-will" employment relationship. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.</p>
    </>
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader isAuthenticated={true} />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Document Display Card */}
          <Card className="mb-8 shadow-md">
            <CardHeader>
              <CardTitle>Review Document</CardTitle>
              <CardDescription>Please review the agreement below carefully. Your electronic signature is legally binding.</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96 w-full rounded-md border p-4 text-sm bg-background">
                {documentPlaceholderText}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Signature Pad Section */}
          <SignaturePad onConfirm={handleSignatureConfirm} />

        </div>
      </main>
      <AppFooter />
    </div>
  );
};

export default DocumentViewPage;