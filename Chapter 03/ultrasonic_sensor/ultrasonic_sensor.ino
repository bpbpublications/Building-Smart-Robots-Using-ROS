const int trigger = 9;  
const int echo = 10;    

// defines variables  
long duration;  
int dist;  
 
void setup() {  
  pinMode(trigger, OUTPUT); // Sets the trigPin as an Output  
  pinMode(echo, INPUT); // Sets the echoPin as an Input  
  Serial.begin(9600); // Starts the serial communication  
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

// Prints the distance on the Serial Monitor  
  Serial.print("The distance of the object is : ");  
  Serial.println(dist);  
} 
