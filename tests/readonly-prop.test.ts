import type { Seller } from "../src/readonly-prop";

describe('Readonly Properties', () => {
    it('should support readonly properties', () => {
        let seller : Seller = {
            id: 1,
            name: 'Ten',
            nib: '123',
            npwp: '123'
        }

        //akan error karena nib adalah readonly properties
        // seller.nib = '123';

        //akan error karena npwp adalah readonly properties
        // seller.npwp = '123';

        console.log(seller);
    });
})
