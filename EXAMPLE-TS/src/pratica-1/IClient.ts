interface IClient {

    idUser: Number;
    firstName: String;
    surname?: String;
    date?: Date;
    isAdmin: Boolean
    printData:() => string; 
}

class Client implements IClient {

    private _idUser: number;
    public firstName: string;
    public surname: string;
    public date: Date;
    private _isAdmin: boolean;

    constructor(id: number, firstName: string, surname: string, date: Date, isAdmin: boolean) {
        this._idUser = id;
        this.firstName = name;
        this.surname = surname;
        this.date = date;
        this._isAdmin = isAdmin = isAdmin ? isAdmin : false;
    }


    public printData(): string {
        return `Hola, soy ${firstName} ${surname} (ID: ${idUser})`;
    }

    get idUser(): number {
        return this._idUser;
    }

    set idUser(id: number) {
        this._idUser = id;
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }

    set isAdmin(isAdmin: boolean) {
        // this._isAdmin = isAdmin;
    }
}

    class is_Admin extends client {

        private idAdmin: number;

        constructor(id: number, firstName: string, surname: string, date: Date, isAdmin: boolean, idAdmin: number) {
            super(id, firstName, surname, date, isAdmin);
            this.idAdmin = idAdmin;
        }

        public printData(): string {
            return super.printData() + `Tengo el idAdmin: ${this.idAdmin}`;
        }
    }
        const cliente = new client(1, "Patricia", "VL", "01-01-01", true, 1);

        console.dir(cliente.printData());
   