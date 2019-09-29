import mapChooser from '../mapChooser';

describe("mapChooser",function(){
    it("return one image based on input given to it",function(){
        let expected = "portland.jpg";
        let actual = mapChooser("portland")
        expect(atual).toEqual(esperado);
    });
    it("one image",function(){
        let esperado = "default";
        let atual = mapChooser("");
        expect(expected).toEqual(esperado);
    });
});