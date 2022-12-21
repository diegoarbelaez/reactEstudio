
import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("", () => {
  test("Funcion getUser debe retornar un objeto", () => {
    
    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
}

    const user = getUser();
    console.log(user)

    //Comparar objetos
    expect(testUser).toEqual(user);
    // tambien sirve para comparar objetos: toMatchObject, toStrictEqual (objetos)


  });
  test("Funcion getUsuarioActivo", () => {

    const nombreProbar = 'Diego'

    const usuarioTest = getUsuarioActivo (nombreProbar);

    expect (usuarioTest) .toEqual ({
        uid: 'ABC567',
        username: nombreProbar
    })

  });
});
