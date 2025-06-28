import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DocumentListItem from "@/components/DocumentListItem";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Welcome!</CardTitle>
          <CardDescription>
            This is your main dashboard. Here are your recent documents.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <DocumentListItem />
            <DocumentListItem />
            <DocumentListItem />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}