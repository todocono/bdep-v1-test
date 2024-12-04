def readSensors():
    global pull0, pull1, sensorState
    if input.pin_is_pressed(TouchPin.P0):
        pull0 = 0
    else:
        pull0 = 1
    if input.pin_is_pressed(TouchPin.P1):
        pull1 = 0
    else:
        pull1 = 1
    sensorState = pull0 + pull1 * 2

def on_received_number(receivedNumber):
    global codeFromRemote
    codeFromRemote = receivedNumber
    updateVibration()
    datalogger.log(datalogger.create_cv("event", 2),
        datalogger.create_cv("signalStrength",
            abs(radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH))),
        datalogger.create_cv("sensorState", sensorState),
        datalogger.create_cv("codeFromRemote", codeFromRemote),
        datalogger.create_cv("temp", input.temperature()),
        datalogger.create_cv("accel",
            max(input.acceleration(Dimension.X),
                max(input.acceleration(Dimension.Y),
                    input.acceleration(Dimension.Z)))))
radio.on_received_number(on_received_number)

# 8G is way too much, but this safety feature needs testing in a real backpack

def on_gesture_eight_g():
    pass
input.on_gesture(Gesture.EIGHT_G, on_gesture_eight_g)

def on_log_full():
    datalogger.log(datalogger.create_cv("event", 99))
    datalogger.delete_log(datalogger.DeleteType.FAST)
datalogger.on_log_full(on_log_full)

def updateVibration():
    global signalReceived
    if codeFromRemote == 3:
        pins.digital_write_pin(DigitalPin.P8, 1)
        pins.digital_write_pin(DigitalPin.P12, 1)
        music.ring_tone(165)
        led.plot(1, 0)
        led.plot(1, 1)
        signalReceived = control.millis()
    elif codeFromRemote == 1:
        pins.digital_write_pin(DigitalPin.P8, 1)
        pins.digital_write_pin(DigitalPin.P12, 0)
        music.ring_tone(262)
        led.plot(1, 0)
        led.unplot(1, 1)
        signalReceived = control.millis()
    elif codeFromRemote == 2:
        pins.digital_write_pin(DigitalPin.P12, 1)
        pins.digital_write_pin(DigitalPin.P8, 0)
        music.ring_tone(494)
        led.unplot(1, 0)
        led.plot(1, 1)
        signalReceived = control.millis()

def on_button_pressed_a():
    pins.digital_write_pin(DigitalPin.P8, 1)
    basic.show_number(1)
    pins.digital_write_pin(DigitalPin.P8, 0)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def init():
    global pull0, pull1, codeFromRemote, sensorState
    music.set_built_in_speaker_enabled(True)
    music.set_volume(255)
    pins.set_pull(DigitalPin.P0, PinPullMode.PULL_UP)
    pins.set_pull(DigitalPin.P1, PinPullMode.PULL_UP)
    pull0 = 0
    pull1 = 0
    basic.clear_screen()
    radio.set_group(1)
    radio.set_transmit_power(7)
    radio.set_frequency_band(0)
    codeFromRemote = 0
    sensorState = 0
    datalogger.delete_log(datalogger.DeleteType.FAST)
    datalogger.include_timestamp(FlashLogTimeStampFormat.MILLISECONDS)
    serial.redirect_to_usb()
    datalogger.mirror_to_serial(True)
    datalogger.set_column_titles("event",
        "signalStrength",
        "sensorState",
        "codeFromRemote",
        "temp",
        "accel")
    datalogger.log(datalogger.create_cv("event", 1))

def on_button_pressed_b():
    pins.digital_write_pin(DigitalPin.P12, 1)
    basic.show_number(2)
    pins.digital_write_pin(DigitalPin.P12, 0)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

def FeedbackMyself():
    global signalReceived, sensorState
    if sensorState == 3:
        pins.digital_write_pin(DigitalPin.P8, 1)
        pins.digital_write_pin(DigitalPin.P12, 1)
        music.ring_tone(165)
        radio.send_number(3)
        led.plot(0, 0)
        led.plot(0, 1)
        signalReceived = control.millis()
    elif sensorState == 1:
        pins.digital_write_pin(DigitalPin.P8, 1)
        music.ring_tone(262)
        radio.send_number(2)
        pins.digital_write_pin(DigitalPin.P12, 0)
        led.plot(0, 0)
        led.unplot(0, 1)
        signalReceived = control.millis()
    elif sensorState == 2:
        pins.digital_write_pin(DigitalPin.P12, 1)
        music.ring_tone(494)
        radio.send_number(1)
        pins.digital_write_pin(DigitalPin.P8, 0)
        led.unplot(0, 0)
        led.plot(0, 1)
        signalReceived = control.millis()
    elif (0) == (6):
        radio.send_number(6)
        pins.digital_write_pin(DigitalPin.P8, 0)
        pins.digital_write_pin(DigitalPin.P12, 0)
        music.stop_all_sounds()
        led.unplot(0, 0)
        led.unplot(0, 1)
        sensorState = 0
def timeoutVibration():
    global codeFromRemote
    if control.millis() - signalReceived >= 100:
        music._play_default_background(music.built_in_playable_melody(Melodies.DADADADUM),
            music.PlaybackMode.IN_BACKGROUND)
        pins.digital_write_pin(DigitalPin.P8, 0)
        pins.digital_write_pin(DigitalPin.P12, 0)
        music.stop_all_sounds()
        led.unplot(1, 0)
        led.unplot(1, 1)
        codeFromRemote = 0
def welcome():
    pins.digital_write_pin(DigitalPin.P12, 1)
    music.play(music.tone_playable(131, music.beat(BeatFraction.HALF)),
        music.PlaybackMode.UNTIL_DONE)
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.digital_write_pin(DigitalPin.P8, 1)
    music.play(music.tone_playable(659, music.beat(BeatFraction.HALF)),
        music.PlaybackMode.UNTIL_DONE)
    pins.digital_write_pin(DigitalPin.P8, 0)
    music.play(music.tone_playable(523, music.beat(BeatFraction.QUARTER)),
        music.PlaybackMode.UNTIL_DONE)
    pins.digital_write_pin(DigitalPin.P8, 1)
    pins.digital_write_pin(DigitalPin.P12, 1)
    music.play(music.tone_playable(349, music.beat(BeatFraction.HALF)),
        music.PlaybackMode.UNTIL_DONE)
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P12, 0)
def updateOthers():
    if sensorState != 0:
        radio.send_number(sensorState)
        datalogger.log(datalogger.create_cv("event", 1),
            datalogger.create_cv("signalStrength",
                abs(radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH))),
            datalogger.create_cv("sensorState", sensorState),
            datalogger.create_cv("codeFromRemote", codeFromRemote),
            datalogger.create_cv("temp", input.temperature()),
            datalogger.create_cv("accel",
                max(input.acceleration(Dimension.X),
                    max(input.acceleration(Dimension.Y),
                        input.acceleration(Dimension.Z)))))
signalReceived = 0
codeFromRemote = 0
sensorState = 0
pull1 = 0
pull0 = 0
init()
welcome()
# sleep / wake-up on event

def on_forever():
    pass
basic.forever(on_forever)

# Watch-dog

def on_forever2():
    pass
basic.forever(on_forever2)

def on_forever3():
    readSensors()
    updateOthers()
    timeoutVibration()
basic.forever(on_forever3)
