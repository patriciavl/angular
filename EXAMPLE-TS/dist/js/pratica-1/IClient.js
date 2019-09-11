"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Client = /** @class */ (function () {
    function Client(id, firstName, surname, date, isAdmin) {
        this._idUser = id;
        this.firstName = name;
        this.surname = surname;
        this.date = date;
        this._isAdmin = isAdmin = isAdmin ? isAdmin : false;
    }
    Client.prototype.printData = function () {
        return "Hola, soy " + firstName + " " + surname + " (ID: " + idUser + ")";
    };
    Object.defineProperty(Client.prototype, "idUser", {
        get: function () {
            return this._idUser;
        },
        set: function (id) {
            this._idUser = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "isAdmin", {
        get: function () {
            return this._isAdmin;
        },
        set: function (isAdmin) {
            // this._isAdmin = isAdmin;
        },
        enumerable: true,
        configurable: true
    });
    return Client;
}());
var is_Admin = /** @class */ (function (_super) {
    __extends(is_Admin, _super);
    function is_Admin(id, firstName, surname, date, isAdmin, idAdmin) {
        var _this = _super.call(this, id, firstName, surname, date, isAdmin) || this;
        _this.idAdmin = idAdmin;
        return _this;
    }
    is_Admin.prototype.printData = function () {
        return _super.prototype.printData.call(this) + ("Tengo el idAdmin: " + this.idAdmin);
    };
    return is_Admin;
}(client));
var cliente = new client(1, "Patricia", "VL", "01-01-01", true, 1);
console.dir(cliente.printData());
