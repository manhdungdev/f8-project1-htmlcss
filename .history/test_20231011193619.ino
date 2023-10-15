#define PWM1 7
#define DIR1 8
#define PWM2 9
#define DIR2 10

int sensors[8] = { A0, A1, A2, A3, A4, A5, A6, A7 };
int mat[8];
int sen[8];

// Cong tac
#define ct1 4
#define ct2 6
#define ct3 11

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(DIR1, OUTPUT);
  pinMode(PWM1, OUTPUT);
  pinMode(PWM2, OUTPUT);
  pinMode(DIR2, OUTPUT);

  // Sensor
  for (int i = 0; i < 8; i++) {
    pinMode(sensors[i], INPUT);
  }

  // Cong tac75
  pinMode(ct1, INPUT_PULLUP);
  pinMode(ct2, INPUT_PULLUP);
  pinMode(ct3, INPUT_PULLUP);

  // Set banh xe dung luc ban dau

  digitalWrite(DIR1, LOW);
  digitalWrite(DIR2, LOW);
}

void loop() {

  int nutNhan1 = digitalRead(ct1);
  int nutNhan2 = digitalRead(ct2);
  int nutNhan3 = digitalRead(ct3);

  if (nutNhan1 == 0) {
    int count = 0;
    boolean state = true;
    while (state) {
      // Đi thẳng
      digitalWrite(DIR1, HIGH);
      digitalWrite(DIR2, HIGH);
      analogWrite(PWM1, 100);
      analogWrite(PWM2, 0);
      pid();
      if ((sen[7] == 1) && (sen[6] == 1) && (sen[5] == 1) && (sen[4] == 1) && (sen[3] == 1) && (sen[2] == 1) && (sen[1] == 1) &&  (sen[0] == 1)) {
        count++;
        if(count == 1){
          // Rẽ trái
          digitalWrite(DIR1, HIGH);
          digitalWrite(DIR2, LOW);
          analogWrite(PWM1, 80);
          analogWrite(PWM2, 0);
          pid();
        }
      } else if ((sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && ( ((sen[4] == 1) && (sen[3] == 1)) || (sen[3]==1) ) && (sen[2] == 1) && (sen[1] == 1) && (sen[0] == 1)) {
        count++;
        switch (count) {
          case 3, 6, 9:
            //rePhai
            digitalWrite(DIR1, HIGH);
            digitalWrite(DIR2, HIGH);
            analogWrite(PWM1, 0);
            analogWrite(PWM2, 150);
            pid();
            break;
          case 11:
            //Dừng lại
            pid();
            digitalWrite(DIR1, LOW);
            digitalWrite(DIR2, LOW);
            state = false;
            break;
        }
      }
    } 
  } else if(nutNhan2 == 0){
    int count = 0;
    boolean state = true;
    while (state) {
      // Đi thẳng
      digitalWrite(DIR1, HIGH);
      digitalWrite(DIR2, HIGH);
      analogWrite(PWM1, 100);
      analogWrite(PWM2, 0);
      pid();
      if ((sen[7] == 1) && (sen[6] == 1) && (sen[5] == 1) && (sen[4] == 1) && (sen[3] == 1) && (sen[2] == 1) && (sen[1] == 1) &&  (sen[0] == 1)) {
          count++;
          switch(count){

          }
          
        }
      } else if ((sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && ( ((sen[4] == 1) && (sen[3] == 1)) || (sen[3]==1) ) && (sen[2] == 1) && (sen[1] == 1) && (sen[0] == 1)) {
        count++;
        switch (count) {
          case 3, 6, 9:
            //rePhai
            digitalWrite(DIR1, HIGH);
            digitalWrite(DIR2, HIGH);
            analogWrite(PWM1, 0);
            analogWrite(PWM2, 150);
            pid();
            break;
          case 11:
            //Dừng lại
            pid();
            digitalWrite(DIR1, LOW);
            digitalWrite(DIR2, LOW);
            state = false;
            break;
        }
      }
    }
  }
  pid();
}

// Các hằng số PID
#define Kp 35
#define Ki 0.01
#define Kd 80
#define rightBaseSpeed 25
#define leftBaseSpeed 25
#define MaxSpeedRight 100
#define MaxSpeedLeft 100
int lastError = 0;
int I = 0;



int get_error() {
  for (int i = 0; i < 8; i++) {

    if (analogRead(sensors[i]) > 40) {
      sen[i] = 1;
    } else {
      sen[i] = 0;
    }
  }

  int error = 0;
  if ((sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 1)) {
    error = 7;
  } else if ((sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 1) && (sen[0] == 1)) {
    error = 6;
  } else if ((sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 1) && (sen[0] == 0) || (sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 1) && (sen[0] == 1)) {
    error = 5;
  } else if ((sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 1) && (sen[1] == 1) && (sen[0] == 0) || (sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 1) && (sen[0] == 1)) {
    error = 4;
  } else if ((sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 1) && (sen[1] == 0) && (sen[0] == 0) || (sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 1) && (sen[1] == 1) && (sen[0] == 0) || (sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 1) && (sen[1] == 1) && (sen[0] == 1)) {
    error = 3;
  } else if ((sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 1) && (sen[2] == 1) && (sen[1] == 0) && (sen[0] == 0) || (sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 1) && (sen[2] == 1) && (sen[1] == 1) && (sen[0] == 0) || (sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 1) && (sen[2] == 1) && (sen[1] == 1) && (sen[0] == 1)) {
    error = 2;
  } else if ((sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 1) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 0) || (sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 1) && (sen[2] == 1) && (sen[1] == 0) && (sen[0] == 0) || (sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 1) && (sen[2] == 1) && (sen[1] == 1) && (sen[0] == 1)) {
    error = 1;
  } else if ((sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 1) && (sen[3] == 1) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 0)) {
    error = 0;
  } else if ((sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 1) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 0)) {
    error = -1;
  } else if ((sen[7] == 0) && (sen[6] == 0) && (sen[5] == 1) && (sen[4] == 1) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 0)) {
    error = -2;
  } else if ((sen[7] == 0) && (sen[6] == 0) && (sen[5] == 1) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 0) || (sen[7] == 0) && (sen[6] == 1) && (sen[5] == 1) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 0)) {
    error = -3;
  } else if ((sen[7] == 0) && (sen[6] == 1) && (sen[5] == 1) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 0) || (sen[7] == 1) && (sen[6] == 1) && (sen[5] == 1) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 0)) {
    error = -4;
  } else if ((sen[7] == 0) && (sen[6] == 1) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 0) || (sen[7] == 1) && (sen[6] == 1) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 0)) {
    error = -5;
  } else if ((sen[7] == 1) && (sen[6] == 1) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 0) || (sen[7] == 1) && (sen[6] == 1) && (sen[5] == 1) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 0)) {
    error = -6;
  } else if ((sen[7] == 1) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 0)) {
    error = -7;
  } else if ((sen[7] == 0) && (sen[6] == 0) && (sen[5] == 0) && (sen[4] == 0) && (sen[3] == 0) && (sen[2] == 0) && (sen[1] == 0) && (sen[0] == 0)) {
    error = lastError;
  }

  return error;
}


void pid() {
  int rightMotorSpeed = 0;
  int leftMotorSpeed = 0;

  int error = get_error();
  int P = error;
  int I = I + error;
  int D = error - lastError;
  int motorSpeed = Kp * P + Ki * I + Kd * D;
  lastError = error;

  rightMotorSpeed = rightBaseSpeed + motorSpeed;
  leftMotorSpeed = leftBaseSpeed - motorSpeed;

  rightMotorSpeed = constrain(rightMotorSpeed, 0, MaxSpeedRight);
  leftMotorSpeed = constrain(leftMotorSpeed, 0, MaxSpeedLeft);

  digitalWrite(DIR1, HIGH);
  digitalWrite(DIR2, HIGH);
  analogWrite(PWM1, rightMotorSpeed + 50);
  analogWrite(PWM2, leftMotorSpeed + 50);

  // analogWrite(PWM1, 80);
  // analogWrite(PWM2, 80);
}