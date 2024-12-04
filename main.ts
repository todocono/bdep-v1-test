/**
 * >>>>>>> remote changes (pulled from Github)
 */
/**
 * input.onButtonPressed(Button.B, function () {
 */
/**
 * pins.digitalWritePin(DigitalPin.P12, 1)
 */
/**
 * basic.showNumber(2)
 */
/**
 * =======
 * 
 * radio.onReceivedNumber(function (receivedNumber) {
 * 
 * updateFromRemote = receivedNumber
 * 
 * })
 * 
 * // 8G is way too much, but this safety feature needs testing in a real backpack
 * 
 * input.onGesture(Gesture.EightG, function () {
 */
/**
 * })
 * 
 * // should confirm reception
 * 
 * function radioSend (num: number, bool: boolean) {
 */
/**
 * pins.digitalWritePin(DigitalPin.P12, 0)
 */
/**
 * basic.clearScreen()
 */
/**
 * })
 */
/**
 * <<<<<<< local changes
 */
/**
 * function FeedbackMyself () {
 */
/**
 * if (sensorState == 3) {
 */
/**
 * pins.digitalWritePin(DigitalPin.P8, 1)
 */
/**
 * pins.digitalWritePin(DigitalPin.P12, 1)
 */
/**
 * music.ringTone(165)
 */
/**
 * radio.sendNumber(3)
 */
/**
 * led.plot(0, 0)
 */
/**
 * radio.sendNumber(2)
 */
/**
 * led.plot(0, 1)
 */
/**
 * pins.digitalWritePin(DigitalPin.P12, 0)
 */
/**
 * signalReceived = control.millis()
 */
/**
 * led.plot(0, 0)
 */
/**
 * } else if (sensorState == 1) {
 */
/**
 * led.unplot(0, 1)
 */
/**
 * pins.digitalWritePin(DigitalPin.P8, 1)
 */
/**
 * signalReceived = control.millis()
 */
/**
 * } else if (sensorState == 2) {
 */
/**
 * music.ringTone(262)
 */
/**
 * pins.digitalWritePin(DigitalPin.P12, 1)
 */
/**
 * music.ringTone(494)
 */
/**
 * radio.sendNumber(1)
 */
/**
 * pins.digitalWritePin(DigitalPin.P8, 0)
 */
/**
 * led.unplot(0, 0)
 */
/**
 * pins.digitalWritePin(DigitalPin.P12, 0)
 */
/**
 * led.plot(0, 1)
 */
/**
 * signalReceived = control.millis()
 */
/**
 * music.stopAllSounds()
 */
/**
 * led.unplot(0, 0)
 */
/**
 * } else if ((0 as any) == (6 as any)) {
 */
/**
 * led.unplot(0, 1)
 */
/**
 * sensorState = 0
 */
/**
 * radio.sendNumber(6)
 */
/**
 * =======
 */
/**
 * pins.digitalWritePin(DigitalPin.P8, 0)
 */
/**
 * function FeedbackMyself () {
 */
/**
 * if (updateLocal == 3) {
 */
/**
 * pins.digitalWritePin(DigitalPin.P8, 1)
 */
/**
 * pins.digitalWritePin(DigitalPin.P12, 1)
 */
/**
 * music.ringTone(165)
 */
/**
 * radio.sendNumber(2)
 */
/**
 * radio.sendNumber(3)
 */
/**
 * pins.digitalWritePin(DigitalPin.P12, 0)
 */
/**
 * led.plot(0, 0)
 */
/**
 * led.plot(0, 1)
 */
/**
 * led.plot(0, 0)
 */
/**
 * } else if (updateLocal == 1) {
 */
/**
 * led.unplot(0, 1)
 */
/**
 * pins.digitalWritePin(DigitalPin.P8, 1)
 */
/**
 * } else if (updateLocal == 2) {
 */
/**
 * pins.digitalWritePin(DigitalPin.P12, 1)
 */
/**
 * music.ringTone(262)
 */
/**
 * music.ringTone(494)
 */
/**
 * radio.sendNumber(1)
 */
/**
 * pins.digitalWritePin(DigitalPin.P8, 0)
 */
/**
 * led.unplot(0, 0)
 */
/**
 * led.plot(0, 1)
 */
/**
 * led.unplot(0, 0)
 */
/**
 * } else if (updateLocal == 6) {
 */
/**
 * led.unplot(0, 1)
 */
/**
 * radio.sendNumber(6)
 */
/**
 * updateLocal = 0
 */
/**
 * pins.digitalWritePin(DigitalPin.P8, 0)
 */
/**
 * }
 */
/**
 * }
 */
/**
 * pins.digitalWritePin(DigitalPin.P12, 0)
 */
/**
 * function updateSensors () {
 */
/**
 * if (input.pinIsPressed(TouchPin.P0)) {
 */
/**
 * music.stopAllSounds()
 */
/**
 * pull0 = 0
 */
/**
 * } else {
 */
/**
 * pull0 = 1
 */
/**
 * }
 */
/**
 * if (input.pinIsPressed(TouchPin.P1)) {
 */
/**
 * pull1 = 0
 */
/**
 * updateLocal = 1
 */
/**
 * } else {
 */
/**
 * } else if (pull0 == 0 && pull1 == 1) {
 */
/**
 * pull1 = 1
 */
/**
 * }
 */
/**
 * updateLocal = 2
 */
/**
 * if (pull0 == 1 && pull1 == 1) {
 */
/**
 * } else {
 */
/**
 * updateLocal = 3
 */
/**
 * if (updateLocal != 0) {
 */
/**
 * } else if (pull0 == 1 && pull1 == 0) {
 */
/**
 * updateLocal = 6
 */
/**
 * }
 */
/**
 * }
 */
/**
 * }
 */
/**
 * let updateLocal = 0
 */
/**
 * =======
 */
/**
 * // Watch-dog
 */
/**
 * basic.forever(function () {
 */
/**
 * })
 */
/**
 * // sleep / wake-up on event
 */
/**
 * basic.forever(function () {
 */
/**
 * })
 */
/**
 * >>>>>>> remote changes (pulled from Github)
 */
// <<<<<<< local changes
function readSensors () {
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
    sensorState = pull0 + pull1 * 2
}
radio.onReceivedNumber(function (receivedNumber) {
    codeFromRemote = receivedNumber
    updateVibration()
    record(receivedNumber)
})
// 8G is way too much, but this safety feature needs testing in a real backpack
input.onGesture(Gesture.EightG, function () {
	
})
datalogger.onLogFull(function () {
    record(66)
    datalogger.deleteLog(datalogger.DeleteType.Fast)
    record(66)
})
function updateVibration () {
    if (codeFromRemote == 3) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        music.ringTone(165)
        led.plot(1, 0)
        led.plot(1, 1)
        signalReceived = control.millis()
    } else if (codeFromRemote == 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        music.ringTone(262)
        led.plot(1, 0)
        led.unplot(1, 1)
        signalReceived = control.millis()
    } else if (codeFromRemote == 2) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        music.ringTone(494)
        led.unplot(1, 0)
        led.plot(1, 1)
        signalReceived = control.millis()
    } else if (codeFromRemote == 9) {
        linkEstablished = 1
    }
}
// =======
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
// }
// // >>>>>>> remote changes (pulled from Github)
// input.onButtonPressed(Button.A, function () {
// pins.digitalWritePin(DigitalPin.P8, 1)
// basic.showNumber(1)
// pins.digitalWritePin(DigitalPin.P8, 0)
// basic.clearScreen()
// })
// <<<<<<< local changes
function record (eventState: number) {
    datalogger.log(
    datalogger.createCV("event", eventState),
    datalogger.createCV("signalStrength", Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))),
    datalogger.createCV("sensorState", sensorState),
    datalogger.createCV("codeFromRemote", codeFromRemote),
    datalogger.createCV("temp", input.temperature()),
    datalogger.createCV("accel", Math.abs(Math.max(input.acceleration(Dimension.X), Math.max(input.acceleration(Dimension.Y), input.acceleration(Dimension.Z))))),
    datalogger.createCV("bat", pins.analogReadPin(AnalogReadWritePin.P2))
    )
}
function init () {
    music.setBuiltInSpeakerEnabled(true)
    music.setVolume(255)
    pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
    pull0 = 0
    pull1 = 0
    basic.clearScreen()
    radio.setGroup(1)
    radio.setTransmitPower(7)
    radio.setFrequencyBand(0)
    codeFromRemote = 0
    sensorState = 0
    linkEstablished = 0
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
    serial.redirectToUSB()
    datalogger.mirrorToSerial(true)
    datalogger.setColumnTitles(
    "event",
    "signalStrength",
    "sensorState",
    "codeFromRemote",
    "temp",
    "accel",
    "bat"
    )
    record(22)
}
// let pull1 = 0
// let pull0 = 0
// music.setBuiltInSpeakerEnabled(true)
// pull0 = 0
// pull1 = 0
// music.setVolume(255)
// music.play(music.stringPlayable("G - B - - F F C5 ", 240), music.PlaybackMode.UntilDone)
// pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
// pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
// pins.digitalWritePin(DigitalPin.P8, 1)
// pins.digitalWritePin(DigitalPin.P12, 1)
// basic.showIcon(IconNames.Heart)
// basic.showIcon(IconNames.SmallHeart)
// pins.digitalWritePin(DigitalPin.P8, 0)
// pins.digitalWritePin(DigitalPin.P12, 0)
// basic.clearScreen()
// radio.setGroup(1)
// radio.setFrequencyBand(0)
// updateFromRemote = 0
// updateLocal = 0
// basic.forever(function () {
// updateSensors()
// if (updateFromRemote == 0) {
// FeedbackMyself()
// } else {
// updateFromOther()
// // >>>>>>> remote changes (pulled from Github)
// // }
// // <<<<<<< local changes
// }
function timeoutVibration () {
    if (control.millis() - signalReceived >= 100) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        music.stopAllSounds()
        led.unplot(1, 0)
        led.unplot(1, 1)
        codeFromRemote = 0
    }
}
function welcome () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    pins.digitalWritePin(DigitalPin.P8, 0)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
function updateOthers () {
    if (sensorState != 0) {
        radio.sendNumber(sensorState)
        record(sensorState)
    }
}
let updateFromRemote = 0
let linkEstablished = 0
let signalReceived = 0
let codeFromRemote = 0
let sensorState = 0
let pull1 = 0
let pull0 = 0
init()
welcome()
// <<<<<<< local changes
// watch-dog - sends a code 9 every 5 seconds to the other unit
loops.everyInterval(1000, function () {
    radio.sendNumber(9)
})
// =======
// >>>>>>> remote changes (pulled from Github)
basic.forever(function () {
    readSensors()
    updateOthers()
    timeoutVibration()
})
// <<<<<<< local changes
// watch-dog - sends a code 9 every 5 seconds to the other unit
loops.everyInterval(5000, function () {
    if (linkEstablished == 0) {
        signalReceived = control.millis() + 1000
        record(99)
        for (let index = 0; index < 4; index++) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
            led.plot(5, 5)
            pins.digitalWritePin(DigitalPin.P8, 1)
            basic.pause(50)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 1)
            basic.pause(50)
            pins.digitalWritePin(DigitalPin.P12, 0)
            led.unplot(5, 5)
        }
    }
    linkEstablished = 0
})
