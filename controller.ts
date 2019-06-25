// Add your code here

input.acceleration(Dimension.X)
//% color="#00bfff"
namespace コントローラー {
    let isAbleToSend = true;
    basic.forever(function () {
        if (!isAbleToSend) {
            basic.pause(200);
            isAbleToSend = true;
        }
    });
    radio.onReceivedValue(function (name: string, value: number) {

    });

    //% blockId=forward block="$shipName を $speed のスピードで前進させる"
    export function forward(shipName: string, speed: number): void {
        if (isAbleToSend) {
            radio.sendValue(shipName + "f", speed);
            isAbleToSend = false;
        }
    }
    //% blockId=right block="$shipName を $angle の角度で右折させる"
    export function right(shipName: string, angle: number): void {
        if (isAbleToSend) {
            radio.sendValue(shipName + "r", angle);
            isAbleToSend = false;
        }
    }
    //% blockId=left block="$shipName を $angle の角度で左折させる"
    export function left(shipName: string, angle: number): void {
        if (isAbleToSend) {
            radio.sendValue(shipName + "l", angle);
            isAbleToSend = false;
        }
    }

    //% block="この船が情報をを受信したときした"
    export function onReceivedValue(handler: () => void) {

    }

    //% block="on event"
    export function onEvent(handler: () => void) {

    }

}