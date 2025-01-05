import { AccountingField } from "@/types/accountingFieldtypes";

const testAccountingFields: AccountingField[] = [
  {
    fieldId: "af1",
    fieldName: "GL Acount",
    fieldValues: [
      {
        id: "1",
        fieldValue: "1000-0000",
        fieldValue2: "Operating Cash",
      },
      {
        id: "2",
        fieldValue: "5000-0000",
        fieldValue2: "Travel",
      },
      {
        id: "3",
        fieldValue: "6000-0000",
        fieldValue2: "Meals & Entertainment",
      },
    ],
  },
  {
    fieldId: "af2",
    fieldName: "Department",
    fieldValues: [
      {
        id: "1",
        fieldValue: "Sales",
      },
      {
        id: "2",
        fieldValue: "Accounting",
      },
    ],
  },
  {
    fieldId: "af3",
    fieldName: "Vendor",
    fieldValues: [
      {
        id: "1",
        fieldValue: "Apple",
      },
      {
        id: "2",
        fieldValue: "Delta",
      },
    ],
  },
];

export { testAccountingFields };
