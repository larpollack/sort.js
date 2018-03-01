describe ('bubble sort', function(){
    it('handles an empty array', function(){
        expect(bubbleSort([])).toEqual([]);
    });

    it('can correctly sort two numbers', function(){
        expect(bubbleSort([2,1])).toEqual([1,2]);
    })

    it('sorts an array', function(){
        expect(bubbleSort([2,1,3,7])).toEqual([1,2,3,7]);
    });
    it('sorts an array', function(){
        expect(bubbleSort([82, 9, 16, 148, 1, 22])).toEqual([1, 9, 16, 22, 82, 148]);
})
})
