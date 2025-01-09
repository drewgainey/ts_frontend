//refactoring delete once this is no longer used
export interface Bank {
  bankId: string;
  institution: string;
  accountName: string;
  accountType: string;
  currentBalance: number;
  availableBalance: number;
}

export interface BankAPIGetResponse {
  id: number;
  accountId: string;
  accountName: string;
  accountOfficialName: string;
  plaidItemId?: string;
  type: string;
  subType: string;
  balance: number;
}
