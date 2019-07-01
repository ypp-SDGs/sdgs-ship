// Add your code here

input.acceleration(Dimension.X)
//% color="#00bfff"
namespace コントローラー {
    let isAbleToSend = true;
    let shipName = '';
    let isThisShip = false;
    basic.forever(function () {
        if (!isAbleToSend) {
            basic.pause(200);
            isAbleToSend = true;
        }
    });
    let numToReturn = 0;

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

    //% blockId=judge block="受け取った$receivedString がこの船についての情報か調べる"
    export function judge(receivedString: string): void {
        if(receivedString[0] == shipName) {
            isThisShip = true;
        }else {
            isThisShip = false;
        }
    }

    //% blockId=bool block="この船がとったごみの時"
    export function returnBool(): boolean {
        return isThisShip;
    }
    //% blockId=num block="拾ったごみの数"
    // export function returnNum(): number {
    //     return numToReturn;
    // }

    //% blockId=on_received_value block="なにかしたとき"
    //% draggableParameters
    // export function onReceivedValue(handler: (s: string, n: number) => void) {

    // }

    //% blockId=send_data block="データ送信$plasticNum $othersNum"
    export function sendData(plasticNum: number, othersNum: number): void {
        radio.sendValue(shipName + plasticNum, plasticNum + othersNum);
        isAbleToSend = false;
    }



}