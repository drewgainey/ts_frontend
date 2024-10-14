export interface BankAccountDTO {
  accounts: {
    account_id: number;
    institution_name: string;
    account_name: string;
    account_official_name: string;
    account_type: string;
    account_subtype: string;
    mask: number;
    balance_available: number;
    balance_current: number;
  }[];
}
