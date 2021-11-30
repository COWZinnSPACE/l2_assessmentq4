input.onButtonPressed(Button.A, function () {
    while (true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
        pins.analogSetPitchPin(AnalogPin.P1)
        music.setVolume(255)
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
})
