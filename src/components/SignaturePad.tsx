import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";

const SignaturePad = () => {
  return (
    <div className="space-y-2">
        <Label>Draw your signature below</Label>
        <Card>
            <CardContent className="p-2">
                <div className="w-full h-40 bg-secondary rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Signature Pad Area</p>
                </div>
            </CardContent>
        </Card>
    </div>
  );
};

export default SignaturePad;