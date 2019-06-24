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

    //% blockId=forward block="前進 %v"
    export function forward(shipName: string, speed: number): void {
        if (isAbleToSend) {
            radio.sendValue(shipName + "f", speed);
            isAbleToSend = false;
        }
    }
    //% blockId=right block="右折 %v"
    export function right(shipName: string, speed: number): void {
        if (isAbleToSend) {
            radio.sendValue(shipName + "r", speed);
            isAbleToSend = false;
        }
    }
    //% blockId=left block="左折 %v"
    export function left(shipName: string, speed: number): void {
        if (isAbleToSend) {
            radio.sendValue(shipName + "l", speed);
            isAbleToSend = false;
        }
    }
}