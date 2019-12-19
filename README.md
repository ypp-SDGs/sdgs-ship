# sdgs-ship

This API provides functions used in the project "プログラミングで海のSDGs" (https://programming.or.jp/umip/)

![sdgs-ship](https://raw.github.com/wiki/ypp-SDGs/sdgs-ship/images/sdgs_ship.gif)
The sourse code of this game will be published soon. Currently, we use this game for an educational purpose.

**How this works**
You need at least 2 micro:bits.
One is to be a Server micro:bit that recieves radio signal from another micro:bit. A Server micro:bit does not use the extension and has to be connected to a computer which runs the program shown above. You can download the code [here](https://makecode.microbit.org/_Myb0AWL8TYKx) to make a Server micro:bit.
Another one needs to use functions provided by this API

**Basic usage of the API**

1. set radio group's number the same as the one that server micro:bit uses (in this example, the number '0')
2. choose ship's name from lowercase alphabets a, b, c, d, and e, then put them in 船のコントローラー.nameInput()
```
radio.setGroup(0)
船のコントローラー.nameInput("e")

```
