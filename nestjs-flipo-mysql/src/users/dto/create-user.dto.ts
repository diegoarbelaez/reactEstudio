//Los DTO son objetos que nos permiten transferir datos entre capas de la aplicación.
//En nuestro caso, permite definir la estructura de los datos cuando se va a crear un usuario.


export class CreaterUserDto{
    username: string;
    password: string;
}
