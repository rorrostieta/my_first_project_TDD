const Spiderman = require('./../app/spiderman')

describe('Unit Tests for Spiderman class', () => {
  test('1) Create an spiderman object', () => {

    // Escribimos codigo a utilizar tal cual
    // Quisieramos hacer un objeto de spiderman con la informacion
    const tomHolland = new Spiderman('Spiderman Marvel', 23, 'Tom Holland', 5, 'Disney')

    // Validacion que el codigo funcione de la manera esperada
    expect(tomHolland.name).toBe('Spiderman Marvel')
    expect(tomHolland.age).toBe(23)
    expect(tomHolland.actor).toBe('Tom Holland')
    expect(tomHolland.movies).toBe(5)
    expect(tomHolland.studio).toBe('Disney')
  }),
  test('2) USe the method getInfo()', () =>{
    const tomHolland = new Spiderman('Spiderman Marvel', 23, 'Tom Holland', 5, 'Disney')
    expect(tomHolland.getInfo()).toBe("Hey I'm Tom Holland from Marvel studio")
  });
})
