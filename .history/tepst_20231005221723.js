//

if((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==1)){
error=7;
}
else if((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==1)&&(sensorVal[0]==1)){
error=6;
}
else if((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==1)&&(sensorVal[0]==0)){
error=5;
}
elseif((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==1)&&(sensorVal[1]==1)&&(sensorVal[0]==0)){
error=4;
}
elseif((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==1)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
error=3;
}
elseif((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==1)&&(sensorVal[2]==1)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
error=2;
}
elseif((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==1)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
error=1;
}
elseif((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==1)&&(sensorVal[3]==1)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
error=0;
}
elseif((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==1)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
error=-1;
}
elseif((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==1)&&(sensorVal[4]==1)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
error=-2;
}
elseif((sensorVal[7]==0)&&(sensorVal[6]==0)&&(sensorVal[5]==1)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
error=-3;
}
elseif((sensorVal[7]==0)&&(sensorVal[6]==1)&&(sensorVal[5]==1)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
error=-4;
}
elseif((sensorVal[7]==0)&&(sensorVal[6]==1)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
error=-5;
}
elseif((sensorVal[7]==1)&&(sensorVal[6]==1)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
error=-6;
}elseif((sensorVal[7]==1)&&(sensorVal[6]==0)&&(sensorVal[5]==0)&&(sensorVal[4]==0)&&(sensorVal[3]==0)&&(sensorVal[2]==0)&&(sensorVal[1]==0)&&(sensorVal[0]==0)){
error=-7;
}

returnerror;

}