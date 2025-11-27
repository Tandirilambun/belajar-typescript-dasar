describe('Algorithm', () => {
    it('should support if else statement', () => {
        const examValue = 90;
        if (examValue > 80) {
            console.log("Selamat Anda Lulus");
        } else {
            console.log("Maaf Anda Tidak Lulus");
        }
    });

    it('should support ternary operator', () => {
        const value = 80;
        const say = value >= 75 ? "Congrats" : "Try Again";

        console.log(say);
    });

    it('should support switch statement', () => {
        let value = 80;
        switch (value) {
            case 80:
                console.log("Selamat Anda Lulus");
                break;
            case 70:
                console.log("Selamat Anda Lulus");
                break;
            default:
                console.log("Maaf Anda Tidak Lulus");
                break;
        }
    });

    it('should support for loop', () => {
        const names: string[] = ["Ten", "Enma", "Galio"];

        for (let i = 0; i < names.length; i++) {
            const element = names[i];
            console.log(element);
        }

        for (const name of names) {
            console.log(name);
        }

        for (const index in names) {
            console.info(names[index]);
        }
    });

    it('should support while loop', () => {
        let counter = 0;
        while (counter < 10) {
            console.log(counter);
            counter++;
        }
    });

    it('should support do while loop', () => {
        let counter = 0;
        do {
            console.log(counter);
            counter++;
        } while (counter < 10);
    });

    it('should support break and continue', () => {
        let counter = 0;
        do {
            counter++;

            if (counter % 2 == 0) {
                continue;
            }
            if (counter == 10) {
                break
            }
            console.log(counter);

        } while (true);
    });

});
