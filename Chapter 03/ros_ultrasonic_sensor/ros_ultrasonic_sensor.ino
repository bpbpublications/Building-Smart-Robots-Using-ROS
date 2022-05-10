#include <ros.h>  
#include <std_msgs/UInt64.h>  
  
ros::NodeHandle nh;  
std_msgs::UInt64 distanceros;  
ros::Publisher ultrasonic("ultrasonic", &distanceros);  
  
const int trigger = 9;  
const int echo = 10;  
 
// defines variables  
long duration;  
int dist;  

void setup() {  
  pinMode(trigger, OUTPUT); // Sets the trigPin as an Output  
  pinMode(echo, INPUT); // Sets the echoPin as an Input  
  Serial.begin(9600); // Starts the serial communication  
  nh.initNode();  
  nh.advertise(ultrasonic);  
}  
 
void loop() {   
// Clears the trigPin  
  digitalWrite(trigger, LOW);  
  delayMicroseconds(2);    

// Sets the trigPin on HIGH state for 10 micro seconds  
  digitalWrite(trigger, HIGH);  
  delayMicroseconds(10);  
  digitalWrite(trigger, LOW);  

// returns the sound wave travel time in microseconds  
  duration = pulseIn(echo, HIGH);//works on pulses from 10 microseconds to 3 minutes in length  

// Getting the distance  
  dist = duration*0.034/2;  

  distanceros.data = dist;  
  ultrasonic.publish(&distanceros);  
  nh.spinOnce();  
  delay(1);  
}   
