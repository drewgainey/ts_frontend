import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FieldsPage() {
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle> GL Account</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Department</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}
