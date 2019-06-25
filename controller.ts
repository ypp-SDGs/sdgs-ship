// Add your code here

input.acceleration(Dimension.X)
//% color="#00bfff"
namespace コントローラー {
    let isAbleToSend = true;
    let shipName = '';
    basic.forever(function () {
        if (!isAbleToSend) {
            basic.pause(200);
            isAbleToSend = true;
        }
    });
    let numToReturn = 0;
    radio.onReceivedValue(function (name: string, value: number) {
        if(name.includes(shipName)) {
            numToReturn = value;
        } 
    });

    //% blockId=name_input block="この船の名前を$name にする"
    export function nameInput(name: string): void {
        shipName = name;
    }    
    //% blockId=forward block="この船を$speed のスピードで前進させる"
    export function forward(speed: number): void {
        if (isAbleToSend) {
            radio.sendValue(shipName + "f", speed);
            isAbleToSend = false;
        }
    }
    //% blockId=right block="この船を$angle の角度で右折させる"
    export function right(angle: number): void {
        if (isAbleToSend) {
            radio.sendValue(shipName + "r", angle);
            isAbleToSend = false;
        }
    }
    //% blockId=left block="この船を$angle の角度で左折させる"
    export function left(angle: number): void {
        if (isAbleToSend) {
            radio.sendValue(shipName + "l", angle);
            isAbleToSend = false;
        }
    }

    //% blockId=bool block="この船がとったごみの時"
    export function returnBool(): boolean {
        return true;
    }    
    //% blockId=bool block="拾ったごみの数"
    export function returnNum(): number {
        return numToReturn;
    }

    //% blockId=on_received_value block="なにかしたとき"
    //% draggableParameters
    export function onReceivedValuecb(handler: (s: string, n: number) => void) {

    }

}