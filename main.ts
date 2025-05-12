makerbit.onIrButton(IrButton.TLeft, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 150)
    basic.pause(200)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.White)
})
makerbit.onIrButton(IrButton.NUM7, IrButtonAction.Pressed, function () {
    basic.showNumber(7)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 150)
    basic.pause(200)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 150)
    basic.pause(200)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Minus, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 150)
    basic.pause(200)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.NUM4, IrButtonAction.Pressed, function () {
    basic.showNumber(4)
})
makerbit.onIrButton(IrButton.NUM2, IrButtonAction.Pressed, function () {
    basic.showNumber(2)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 150)
    basic.pause(200)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.NUM5, IrButtonAction.Pressed, function () {
    basic.showNumber(5)
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    Tinybit.RGB_Car_Program().clear()
    Tinybit.RGB_Car_Program().show()
})
makerbit.onIrButton(IrButton.NUM0, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
})
makerbit.onIrButton(IrButton.BEEP, IrButtonAction.Pressed, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.TRight, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 150)
    basic.pause(200)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Plus, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
})
let a = 0
led.plot(0, 0)
basic.forever(function () {
    makerbit.connectIrReceiver(DigitalPin.P8)
    Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
    a = Tinybit.Ultrasonic_CarV2()
    if (a < 5) {
        led.plot(2, 2)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 70)
        if (a >= 15) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
        }
    }
})
