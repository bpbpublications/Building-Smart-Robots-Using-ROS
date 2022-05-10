#include <ros.h>
#include <std_msgs/String.h>

ros::NodeHandlenh;

void motorcmd( conststd_msgs::String& data){
// turn motor
  if (data == 'clockwise'){
    digitalWrite(in1, HIGH);
    digitalWrite(in2, LOW);
  }
  else if (data == 'anticlockwise'){
// now change motor direction
    digitalWrite(in1, LOW);
    digitalWrite(in2, HIGH);  
    }
  else if (data == 'stop'){
// now stop  
    digitalWrite(in1, LOW);
    digitalWrite(in2, LOW);  
    }
}

ros::Subscriber<std_msgs::String> sub("dcmotorcmd", &motorcmd );

int in1 = 9;
int in2 = 8;
// motor two

void setup()
{
// set all the motor control pins to outputs
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  nh.initNode();
  nh.subscribe(sub);
}

void loop()
{
  nh.spinOnce();
  delay(1);
}
