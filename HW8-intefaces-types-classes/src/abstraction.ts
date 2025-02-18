//Interface abstraction example
export interface MotorVehicle {
    make: string;
    model: string;
    year: number;

    startEngine(): void;
    stopEngine(): void;
    getFuelLevel(): number;
}

export class MotorBike implements MotorVehicle {
    private _make: string;
    private _model: string;
    private _year: number;
    private _fuelLevel: number;

    public get make(): string {
        return this._make;
    }
    public set make(make: string) {
        this._make = make;
    }

    public get model(): string {
        return this._model;
    }
    public set model(model: string) {
        this._model = model;
    }

    public get year(): number {
        return this._year;
    }
    public set year(year: number) {
        this._year = year;
    }

    public constructor(make: string, model: string, year: number, fuelLevel = 100) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._fuelLevel = fuelLevel;
    }

    public startEngine(): void {
        console.log('Engine started');
    }

    public stopEngine(): void {
        console.log('Engine stopped');
    }

    public getFuelLevel(): number {
        return this._fuelLevel;
    }
}

//Abstract class example
export abstract class Car implements MotorVehicle {
    public make: string;
    public model: string;
    public year: number;
    public static doorsNumber = 5;
    protected fuelLevel = 100;

    public constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public startEngine(): void {
        console.log('Engine started');
    }

    public stopEngine(): void {
        console.log('Engine stopped');
    }

    public getFuelLevel(): number {
        return this.fuelLevel;
    }

    public abstract calcFuelAmount(): number;
}

export class Minivan extends Car {
    public calcFuelAmount(): number {
        return this.getFuelLevel() - 50;
    }
}
