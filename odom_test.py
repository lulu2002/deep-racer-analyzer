import RPi.GPIO as GPIO
import time

pin = 23

def run():
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(pin, GPIO.IN)

    while True:
        time.sleep(0.1)
        print(GPIO.input(pin))

    pass

if __name__ == '__main__':
    run()
    GPIO.cleanup()
