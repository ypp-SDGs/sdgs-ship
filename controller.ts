// Add your code here

input.acceleration(Dimension.X)
//% color="#00bfff"
namespace コントローラー {
    //% blockId=forward block="前進 %v"
    export function forward(shipName: string, speed: number): void {
        radio.sendValue(shipName + "f", speed);
        basic.pause(200);
    }
    //% blockId=right block="右折 %v"
    export function right(shipName: string, speed: number): void {
        radio.sendValue(shipName + "r", speed);
        basic.pause(200);
    }
    //% blockId=left block="左折 %v"
    export function left(shipName: string, speed: number): void {
        radio.sendValue(shipName + "l", speed);
        basic.pause(200);
    }
}