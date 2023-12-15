
export interface BankOrg {
  id: string;
  name: string;
  slug: string;
  logo: string;
  category: string;
  balances: {
    total_raised: number;
 };
}
