
    var idUser: number = 19;
    var firstName: string = 'Patricia';
    var surname: string = 'VL';
    var date: Date = new Date();
    var isAdmin: boolean = true;

   const client: any = {
        idUser: idUser,
        firstName: firstName,
        surname: surname,
        date: date,
        isAdmin: isAdmin
   }

    client.firstName = "Ze";
    console.dir(client);
    Object.freeze(client);

    console.log(client.date.toDateString());
    date.setFullYear(1994, 10, 30);
    console.dir('var '+date.toDateString());
    console.dir('obj '+client.date.toDateString());

    function optionalParams(param1?: any): string{
         return param1  ? `hello ${param1}` : `hola!`;
    }
     
          console.dir(optionalParams());
          console.dir(optionalParams("world"));