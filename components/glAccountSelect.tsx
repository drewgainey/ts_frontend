import { Select } from "antd";
import { GLAccount } from "@/types/types";
interface Props {
  gl_accounts: GLAccount[];
}

export default function GLAccountSelect({ gl_accounts }: Props) {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <Select
      showSearch
      placeholder=""
      optionFilterProp="label"
      onChange={onChange}
      onSearch={onSearch}
      options={gl_accounts.map((account) => {
        return {
          value: account.gl_account_name,
          label: account.gl_account_name,
        };
      })}
    />
  );
}
