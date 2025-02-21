import { Users } from './user.interface';

export class UserSummary {
    private _name: string;

    public get name(): string {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }

    public readonly id: number;
    public readonly email: string;
    public readonly companyName: string;
    public readonly streetAddress: string;

    public constructor(user: Users) {
        this.id = user.id;
        this._name = user.name;
        this.email = user.email;
        this.streetAddress = user.address.street;
        this.companyName = user.company.name;
    }
}
