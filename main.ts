basic.forever(function () {
    for (let a = 0; a <= 4; a++) {
        for (let index = 0; index <= 4; index++) {
            if (a == 1) {
                continue;
            }
            led.plot(index, a)
            basic.pause(200)
        }
    }
    basic.clearScreen()
})
