import { BankAPIGetResponse } from "@/types/bankTypes";
import { AccountingFeildsData } from "@/types/accountingFieldtypes";
import { DataTableRows, DynamicFieldData } from "./types";

// To work with the columns dynamically created for the accounting fields. The object key for any accounting feild needs to be in all lower case
export function selectDataTableBankData(
  accountingFields: AccountingFeildsData,
  banks?: BankAPIGetResponse[]
): DataTableRows[] {
  if (!banks || banks.length === 0) {
    return [];
  }

  return banks.map((bank) => {
    const fieldData: DynamicFieldData = {};

    // Populate fieldData with accounting field values from the bank's defaultFields
    accountingFields.values.forEach((field) => {
      const fieldValue = bank.defaultFields.find(
        (defaultField) => defaultField.fieldName === field.fieldName
      )?.fieldValue;
      const fieldValueId = bank.defaultFields.find(
        (defaultField) => defaultField.fieldName === field.fieldName
      )?.fieldValueId;

      fieldData[field.fieldName.toLowerCase()] = fieldValue || "";
      fieldData[`${field.fieldName}Id`.toLowerCase()] = fieldValueId || 0;
    });

    return {
      bankId: bank.id,
      institution: "Chase",
      accountName: bank.accountOfficialName,
      accountType: bank.subType,
      currentBalance: bank.balance,
      availableBalance: bank.balance,
      ...fieldData,
    };
  });
}
