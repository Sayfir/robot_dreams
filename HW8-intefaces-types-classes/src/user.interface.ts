export interface Users {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export async function getJson(): Promise<Users[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const json = (await response.json()) as Users[];
    return json;
}

(async () => {
    const data = await getJson();
    console.log(data[2].address.street);
    console.log(data[2].company.catchPhrase);
})();
