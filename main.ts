radio.onReceivedNumber(function (receivedNumber) {
    updateFromRemote = receivedNumber
})
// 8G is way too much, but this safety feature needs testing in a real backpack
input.onGesture(Gesture.EightG, function () {
	
})
// should confirm reception
function radioSend (num: number, bool: boolean) {
	
}
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.showNumber(1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.clearScreen()
})
function updateFromOther () {
    if (updateFromRemote == 3) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        music.ringTone(165)
        led.plot(1, 0)
        led.plot(1, 1)
    } else if (updateFromRemote == 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        music.ringTone(262)
        pins.digitalWritePin(DigitalPin.P12, 0)
        led.plot(1, 0)
        led.unplot(1, 1)
    } else if (updateFromRemote == 2) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        music.ringTone(494)
        pins.digitalWritePin(DigitalPin.P8, 0)
        led.unplot(1, 0)
        led.plot(1, 1)
    } else if (updateFromRemote == 6) {
        radio.sendNumber(0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        music.stopAllSounds()
        led.unplot(1, 0)
        led.unplot(1, 1)
        updateFromRemote = 0
    }
}
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.showNumber(2)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.clearScreen()
})
function FeedbackMyself () {
    if (updateLocal == 3) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        music.ringTone(165)
        radio.sendNumber(3)
        led.plot(0, 0)
        led.plot(0, 1)
    } else if (updateLocal == 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        music.ringTone(262)
        radio.sendNumber(2)
        pins.digitalWritePin(DigitalPin.P12, 0)
        led.plot(0, 0)
        led.unplot(0, 1)
    } else if (updateLocal == 2) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        music.ringTone(494)
        radio.sendNumber(1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        led.unplot(0, 0)
        led.plot(0, 1)
    } else if (updateLocal == 6) {
        radio.sendNumber(6)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        music.stopAllSounds()
        led.unplot(0, 0)
        led.unplot(0, 1)
        updateLocal = 0
    }
}
function updateSensors () {
    if (input.pinIsPressed(TouchPin.P0)) {
        pull0 = 0
    } else {
        pull0 = 1
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        pull1 = 0
    } else {
        pull1 = 1
    }
    if (pull0 == 1 && pull1 == 1) {
        updateLocal = 3
    } else if (pull0 == 1 && pull1 == 0) {
        updateLocal = 1
    } else if (pull0 == 0 && pull1 == 1) {
        updateLocal = 2
    } else {
        if (updateLocal != 0) {
            updateLocal = 6
        }
    }
}
let updateLocal = 0
let updateFromRemote = 0
let pull1 = 0
let pull0 = 0
music.setBuiltInSpeakerEnabled(true)
pull0 = 0
pull1 = 0
music.setVolume(255)
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
radio.setGroup(1)
radio.setFrequencyBand(0)
updateFromRemote = 0
updateLocal = 0
basic.forever(function () {
    updateSensors()
    if (updateFromRemote == 0) {
        FeedbackMyself()
    } else {
        updateFromOther()
    }
})
// Watch-dog
basic.forever(function () {
	
})
// sleep / wake-up on event
basic.forever(function () {
	
})
