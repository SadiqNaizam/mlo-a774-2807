import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const DocumentListItem = () => {
  const docId = Math.floor(Math.random() * 1000) + 1;
  return (
    <Card className="flex items-center justify-between p-4">
      <div>
        <CardHeader className="p-0">
          <CardTitle className="text-lg">Sample Document {docId}</CardTitle>
          <CardDescription>Last updated: 3 hours ago</CardDescription>
        </CardHeader>
      </div>
      <Link to={`/documents/${docId}`}>
        <Button variant="outline">View</Button>
      </Link>
    </Card>
  );
};

export default DocumentListItem;