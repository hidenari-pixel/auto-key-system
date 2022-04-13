#include <Servo.h>


 Servo myservo;          // Servoオブジェクトの宣言
 const int SV_PIN = 7;   // サーボモーターをデジタルピン7に
 int analogPin = 3;
 char data;
 
 void setup(){
   Serial.begin(9600);
   myservo.attach(SV_PIN, 500, 2400);  // サーボの割当(パルス幅500~2400msに指定)
   Serial.println("Connect \n");
   myservo.write(160);
}
 
 void loop(){
  analogWrite(analogPin, 0);
   if (Serial.available() > 0) {
    data = (char) Serial.read();
    Serial.println(data);
     if (data == '1'){
      analogWrite(analogPin, 255);
      Serial.println("Open");
      delay(500);
      myservo.write(75);    // サーボモーターを0度の位置まで動かす
        delay(1000);
      analogWrite(analogPin, 0);
     }
      else if (data == '0'){
      analogWrite(analogPin, 255);
      Serial.println("Close");
      delay(500);
      myservo.write(160);    // サーボモーターを0度の位置まで動かす
      delay(1000);
      analogWrite(analogPin, 0);
     }
   }
}