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
