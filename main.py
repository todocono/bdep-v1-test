def on_button_pressed_a():
    pins.digital_write_pin(DigitalPin.P8, 1)
    basic.show_number(2)
    pins.digital_write_pin(DigitalPin.P8, 0)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pins.digital_write_pin(DigitalPin.P12, 1)
    basic.show_number(2)
    pins.digital_write_pin(DigitalPin.P12, 0)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

music.play(music.string_playable("G - B - - F F C5 ", 240),
    music.PlaybackMode.UNTIL_DONE)
pins.set_pull(DigitalPin.P0, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P1, PinPullMode.PULL_UP)
pins.digital_write_pin(DigitalPin.P8, 1)
pins.digital_write_pin(DigitalPin.P12, 1)
basic.show_icon(IconNames.HEART)
basic.show_icon(IconNames.SMALL_HEART)
pins.digital_write_pin(DigitalPin.P8, 0)
pins.digital_write_pin(DigitalPin.P12, 0)
basic.clear_screen()

def on_forever():
    if not (input.pin_is_pressed(TouchPin.P0)):
        music.play(music.tone_playable(587, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        basic.show_number(0)
        basic.clear_screen()
    if not (input.pin_is_pressed(TouchPin.P1)):
        music.play(music.tone_playable(220, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        basic.show_number(1)
        basic.clear_screen()
basic.forever(on_forever)
