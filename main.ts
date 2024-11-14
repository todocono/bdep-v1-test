input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.showNumber(2)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.showNumber(2)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.clearScreen()
})
music.play(music.stringPlayable("G - B - - F F C5 ", 240), music.PlaybackMode.UntilDone)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.digitalWritePin(DigitalPin.P8, 1)
pins.digitalWritePin(DigitalPin.P12, 1)
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.SmallHeart)
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
basic.clearScreen()
basic.forever(function () {
    if (!(input.pinIsPressed(TouchPin.P0))) {
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showNumber(0)
        basic.clearScreen()
    }
    if (!(input.pinIsPressed(TouchPin.P1))) {
        music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showNumber(1)
        basic.clearScreen()
    }
})
