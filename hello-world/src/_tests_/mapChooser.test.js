import mapChooser from '../mapChooser';

describe("mapChooser",function(){
    it("return one image based on input given to it",function(){
        let expected = "portland.jpg";
        let actual = mapChooser("portland")
        expect(actual).toEqual(expected);
    });
    it("one image",function(){
        let expected = "default.jpg";
        let actual = mapChooser("");
        expect(actual).toEqual(expected);
    });
});