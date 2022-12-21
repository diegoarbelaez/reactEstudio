import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("pruebas en promesas", () => {
  test("debe retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(true).toEqual({
        id: 1,
        name: "Batman!!",
        owner: "DC",
      });
   
    });
    done();
  });
});
