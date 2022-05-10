#!/usr/bin/env python
import rospy
import time
from std_msgs.msg import String, UInt64

pub = rospy.Publisher('dcmotorcmd', String, queue_size=10)
command = 'stop'

def callback(data):
	global command
	if data <= 30:
		command = 'stop'
		time.sleep(10)
		command = 'clockwise'
	elif data > 30:
		command = 'stop'
		time.sleep(10)
		command = 'anticlockwise'
def dcmd():
	rospy.init_node('talker', anonymous=True)
	rate = rospy.Rate(10) # 10hz
	rospy.Subscriber('ultrasonic', UInt64, callback)
	while not rospy.is_shutdown():
		rospy.loginfo(command)
		pub.publish(command)
		rate.sleep()
if __name__ == '__main__':
	try:
		dcmd()
	except rospy.ROSInterruptException:
		pass
