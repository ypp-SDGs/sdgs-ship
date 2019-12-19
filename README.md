# sdgs-ship



This API provides functions used in the project "プログラミングで海のSDGs" (https://programming.or.jp/umip/)

**How this works**
You need at least 2 micro:bits.
One is to be Server micro:bit that recieves radio signal from another micro:bits. Server micro:bit does not use the extension and has to be connected to a computer. You can download the code here(https://makecode.microbit.org/_Myb0AWL8TYKx) to make a server micro:bit.
Another one needs to use functions provided by this API

**Basic usage of the API**

1. set radio group's number the same as the one that server micro:bit uses (in this example, the number '0')
2. choose ship's name from alphabets a, b, c, d, and e, then 
3. 
```
radio.setGroup(0)
船のコントローラー.nameInput("e")

```
