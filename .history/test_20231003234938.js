// void get_sensor(){

//     for (i = 0; i < 8; i++) {
//         sensorVal[i] = analogRead(sensors[i]);
//     }

    if ((sensor[7] == 0) && (sensor[6] == 0) && (sensor[5] == 0) && (sensor[4] == 0) && (sensor[3] == 0) && (sensor[2] == 0) && (sensor[1] == 1) && (sensor[0] == 0)) error = 5;
    else if ((sensor[7] == 0) && (sensor[6] == 0) && (sensor[5] == 0) && (sensor[4] == 0) && (sensor[3] == 0) && (sensor[2] == 1) && (sensor[1] == 1) && (sensor[0] == 0)) error = 4;
    else if ((sensor[7] == 0) && (sensor[6] == 0) && (sensor[5] == 0) && (sensor[4] == 0) && (sensor[3] == 0) && (sensor[2] == 1) && (sensor[1] == 0) && (sensor[0] == 0)) error = 3;
    else if ((sensor[7] == 0) && (sensor[6] == 0) && (sensor[5] == 0) && (sensor[4] == 0) && (sensor[3] == 1) && (sensor[2] == 1) && (sensor[1] == 0) && (sensor[0] == 0)) error = 2;
    else if ((sensor[7] == 0) && (sensor[6] == 0) && (sensor[5] == 0) && (sensor[4] == 0) && (sensor[3] == 1) && (sensor[2] == 0) && (sensor[1] == 0) && (sensor[0] == 0)) error = 1;
    else if ((sensor[7] == 0) && (sensor[6] == 0) && (sensor[5] == 0) && (sensor[4] == 1) && (sensor[3] == 1) && (sensor[2] == 0) && (sensor[1] == 0) && (sensor[0] == 0)) error = 0;
    else if ((sensor[7] == 0) && (sensor[6] == 0) && (sensor[5] == 0) && (sensor[4] == 1) && (sensor[3] == 0) && (sensor[2] == 0) && (sensor[1] == 0) && (sensor[0] == 0)) error = -1;
    else if ((sensor[7] == 0) && (sensor[6] == 0) && (sensor[5] == 1) && (sensor[4] == 1) && (sensor[3] == 0) && (sensor[2] == 0) && (sensor[1] == 0) && (sensor[0] == 0)) error = -2;
    else if ((sensor[7] == 0) && (sensor[6] == 0) && (sensor[5] == 1) && (sensor[4] == 0) && (sensor[3] == 0) && (sensor[2] == 0) && (sensor[1] == 0) && (sensor[0] == 0)) error = -3;
    else if ((sensor[7] == 0) && (sensor[6] == 1) && (sensor[5] == 1) && (sensor[4] == 0) && (sensor[3] == 0) && (sensor[2] == 0) && (sensor[1] == 0) && (sensor[0] == 0)) error = -4;
    else if ((sensor[7] == 0) && (sensor[6] == 1) && (sensor[5] == 0) && (sensor[4] == 0) && (sensor[3] == 0) && (sensor[2] == 0) && (sensor[1] == 0) && (sensor[0] == 0)) error = -5;
    else if ((sensor[7] == 1) && (sensor[6] == 1) && (sensor[5] == 0) && (sensor[4] == 0) && (sensor[3] == 0) && (sensor[2] == 0) && (sensor[1] == 0) && (sensor[0] == 0)) error = -120;
    else if ((sensor[7] == 1) && (sensor[6] == 0) && (sensor[5] == 0) && (sensor[4] == 0) && (sensor[3] == 0) && (sensor[2] == 0) && (sensor[1] == 0) && (sensor[0] == 0)) error = -100;
    else if ((sensor[7] == 0) && (sensor[6] == 0) && (sensor[5] == 0) && (sensor[4] == 0) && (sensor[3] == 0) && (sensor[2] == 0) && (sensor[1] == 0) && (sensor[0] == 0)) error = lastError;

    return error;
}
  }