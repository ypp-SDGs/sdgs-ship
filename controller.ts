// Add your code here

input.acceleration(Dimension.X)
//% color="#00bfff"
namespace コントローラー {
    let isAbleToSend = false;
    basic.forever(function () {
        if(!isAbleToSend) {
            basic.pause(200);
            isAbleToSend = true;
        }
    });

    //% blockId=forward block="$shipName を $speed のスピードで前進させる"
    export function forward(shipName: string, speed: number): void {
        if (isAbleToSend) {
            radio.sendValue(shipName + "f", speed);
            isAbleToSend = false;
        }
    }
    //% blockId=right block="$shipName を $speed のスピードで右折させる"
    export function right(shipName: string, speed: number): void {
        if (isAbleToSend) {
            radio.sendValue(shipName + "r", speed);
            isAbleToSend = false;
        }
    }
    //% blockId=left block="$shipName を $speed のスピードで左折させる"
    export function left(shipName: string, speed: number): void {
        if (isAbleToSend) {
            radio.sendValue(shipName + "l", speed);
            isAbleToSend = false;
        }
    }
}