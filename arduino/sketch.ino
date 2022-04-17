#include <Servo.h>

 Servo myservo;          // Servoオブジェクトの宣言
 const int SV_PIN = 7;   // サーボモーターをデジタルピン7に
 const int mosfet = 3;
 char data;
 
 void setup(){   
   Serial.begin(9600);
   myservo.attach(SV_PIN, 500, 2400);  // サーボの割当(パルス幅500~2400msに指定)
   Serial.println("Connect \n");
   myservo.write(90);
   analogWrite(mosfet, 255);
   delay(1000);
 }
 
 void loop(){
   analogWrite(mosfet, 0);
   if (Serial.available() > 0) {
    data = (char) Serial.read();
    Serial.println(data);
     if (data == '1'){
      analogWrite(mosfet, 255);
      Serial.println("Open");
      delay(100); 
      myservo.write(0);
      delay(500);
      analogWrite(mosfet, 0);
     }
     else if (data == '0'){
      analogWrite(mosfet, 255);
      Serial.println("Close");
      delay(100);
      myservo.write(90);
      delay(500);
      analogWrite(mosfet, 0);
     }
   }
 }