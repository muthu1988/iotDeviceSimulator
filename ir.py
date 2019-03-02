import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)

IR_PIN = 2
GPIO.setup(IR_PIN, GPIO.IN)
alreadySensed = 'false'
while True:
  nothing_sensed = GPIO.input(IR_PIN)
  if nothing_sensed:
    if alreadySensed == 'true':
      print("nothing sensed")
      alreadySensed = 'false'
  else:
    if alreadySensed == 'false':
      print("sensed object")
      alreadySensed = 'true'
    
