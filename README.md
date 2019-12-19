# sdgs-ship

This API provides functions used in the project "プログラミングで海のSDGs!" (https://programming.or.jp/umip/)

![sdgs-ship](https://raw.github.com/wiki/ypp-SDGs/sdgs-ship/images/sdgs_ship.gif)

The game shown above is part of the project. Currently, we use this game for an educational purpose.

## How this works

You need at least 2 micro:bits.
One is to be a Server micro:bit that recieves radio signal from another micro:bit. A Server micro:bit does not use the extension and has to be connected to a computer which runs the program shown above. You can download the code [here](https://makecode.microbit.org/_Myb0AWL8TYKx) to make a Server micro:bit.
Another one needs to use functions provided by this API.

## Basic usage

1. set the radio group the same as the one that the Server micro:bit you want to communicate with is in (in this example, group '0')
2. choose ship's name either from lowercase alphabets a, b, c, d, and e, then pass it into 船のコントローラー.nameInput() (in this example, 'e')
```
radio.setGroup(0)
船のコントローラー.nameInput("e")
```

3. to move a ship, use 船のコントローラー.forward(), 船のコントローラー.left(18), 船のコントローラー.right(18) and so on (in this example, when Button AB are pressed a ship moves forward)
```
let speed = 5
input.onButtonPressed(Button.AB, function () {
    船のコントローラー.forward(speed)
})
```

You can find an example usage [here](https://makecode.microbit.org/_JHk3Ho7R85fD)

## Licence
MIT
