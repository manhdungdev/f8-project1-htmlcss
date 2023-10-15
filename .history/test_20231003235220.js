void get_sensor(){

    for (i = 0; i < 8; i++) {
        sensorVal[i] = analogRead(sensors[i]);
    }

    if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 1) && (sensorVal[0] == 0)){
        error = 5;
    } 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 1) && (sensorVal[1] == 1) && (sensorVal[0] == 0)){
        error = 4;
    } 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 1) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){
        error = 3;
    } 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 1) && (sensorVal[2] == 1) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){
        error = 2;
    } 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 1) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){
        error = 1;
    } 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 1) && (sensorVal[3] == 1) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){
        error = 0;
    } 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 1) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){
        error = -1;
    } 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 1) && (sensorVal[4] == 1) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){
        error = -2;
    } 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 1) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){
        error = -3;
    } 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 1) && (sensorVal[5] == 1) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){
        error = -4;
    } 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 1) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){
        error = -5;
    } 
    else if ((sensorVal[7] == 1) && (sensorVal[6] == 1) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){
        error = -120;
    } 
    else if ((sensorVal[7] == 1) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){
        error = -100;
    } 
    else if ((sensorVal[7] == 0) && (sensorVal[6] == 0) && (sensorVal[5] == 0) && (sensorVal[4] == 0) && (sensorVal[3] == 0) && (sensorVal[2] == 0) && (sensorVal[1] == 0) && (sensorVal[0] == 0)){
        error = lastError;
    } 

    return error;
}
