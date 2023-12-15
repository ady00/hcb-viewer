import type { BankOrg } from '../hackbank';

export async function getBankData(page: number, page_size = 50) {
	const getOrgsReq = await fetch(
		`https://bank.hackclub.com/api/v3/organizations?page=${page}&per_page=${page_size}&suppose_this_is_a_useragent=bigman`
	);

	if (!getOrgsReq.ok) throw "Couldn't fetch orgs from hcb";


	const data = ((await getOrgsReq.json()) as BankOrg[]).map(({ id, name, slug, logo, category, balances }) => ({
		id,
		name,
		slug,
		logo,
		category,
		totalRaised: balances.total_raised,
	}));

	



	const filteredData = data
    .filter(({ category, totalRaised }) =>
      ['hackathon', 'high_school_hackathon', 'nonprofit', 'event'].includes(category) && totalRaised > 100
    )
    .map(({ id, name, slug, logo }) => ({
      id,
      name,
      slug,
      logo,
    }));

	return filteredData;
}
