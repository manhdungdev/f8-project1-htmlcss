void get_sensor(){

    for (i = 0; i < 8; i++) {
        sensorVal[i] = analogRead(sensors[i]);
    }

    if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 1) && (sensorVal[0] == 0)){} 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 1) && (sensorVal[1] == 1) && (sensorVal[0] == 0)){} 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 1) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){} 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 1) && (sensorVal[2] == 1) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){} 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 1) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){} 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 1) && (sensorVal[3] == 1) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){} 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 1) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){} 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 1) && (sensorVal[4] == 1) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){} 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 1) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){} 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 1) && (sensorVal[5] == 1) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){} 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 1) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){} 
    else if ((sensorVal[7] == 1) && (sensorVal[6] == 1) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){} 
    else if ((sensorVal[7] == 1) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){} 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){} 

    return error;
}
