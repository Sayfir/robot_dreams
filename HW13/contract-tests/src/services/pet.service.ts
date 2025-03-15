import { OrderDto } from '../models/order.dto';

export class PetService {
    private _headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };

    public constructor(private _baseUrl: string) {}

    public getPetOrder = async (petId: string): Promise<OrderDto> => {
        const response = await fetch(`${this._baseUrl}/v2/store/order/${petId}`, {
            headers: { Accept: 'application/json' },
            method: 'GET'
        });
        return await response.json();
    };

    public async placePetOrder(order: OrderDto): Promise<OrderDto> {
        const response = await fetch(`${this._baseUrl}/v2/store/order`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(order)
        });
        return await response.json();
    }
}
