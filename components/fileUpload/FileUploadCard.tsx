import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FileUploadForm } from "./FileUploadForm";

export function FileUploadCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload ERP Transactions</CardTitle>
        <CardDescription>Upload a file with journal entries</CardDescription>
      </CardHeader>
      <CardContent>
        <FileUploadForm />
      </CardContent>
    </Card>
  );
}
