import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas con Giphy!", () => {
  test("Debe retornar un URL de la imagen",async () => {

    const url = await getImagen(); 
    expect(typeof url ).toBe('string');
    console.log(url);

  });
});
