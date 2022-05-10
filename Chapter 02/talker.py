#!/usr/bin/env python
import rospy
import time
from std_msgs.msg import String

pub = rospy.Publisher('dcmotorcmd', String, queue_size=10)
command = 'anticlockwise'
def dcmd():
	rospy.init_node('talker', anonymous=True)
	rate = rospy.Rate(10) # 10hz
	while not rospy.is_shutdown():
		rospy.loginfo(command)
		pub.publish(command)
		rate.sleep()

if __name__ == '__main__':
	try:
		dcmd()
	except rospy.ROSInterruptException:
		pass
