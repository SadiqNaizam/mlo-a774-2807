import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignaturePad from "@/components/SignaturePad";
import { useParams } from "react-router-dom";

export default function DocumentViewPage() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Viewing Document #{id}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Document Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 border rounded-md min-h-[400px] bg-secondary">
              <p>This is where the document content would be displayed.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sign Document</CardTitle>
            </CardHeader>
            <CardContent>
              <SignaturePad />
              <Button className="w-full mt-4">Apply Signature</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}