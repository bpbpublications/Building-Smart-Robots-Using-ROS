#!/usr/bin/env python 

import roslib 
import sys 
import rospy 
import cv2 
from std_msgs.msg import String 
from sensor_msgs.msg import Image 
from cv_bridge import CvBridge, CvBridgeError 
class transform_image: 
	def __init__(self): 
		self.image_pub = rospy.Publisher("/cv2_to_rosimg",Image) 
		self.bridge = CvBridge() 
		self.image_sub = rospy.Subscriber("/usb_cam/image_raw",Image,self.callback) 

	def callback(self,data): 
		try: 
			cv_image = self.bridge.imgmsg_to_cv2(data, "bgr8") 
		except CvBridgeError as e: 
			print(e) 
		(rows,cols,channels) = cv_image.shape 
		if cols > 60 and rows > 60 : 
			cv2.circle(cv_image, (100,100), 8, (0,0,255),-1) 
			cv2.imshow("output window", cv_image) 
			cv2.waitKey(3) 
			self.image_pub.publish(self.bridge.cv2_to_imgmsg(cv_image, "bgr8"))
			

def main(args): 
		im_tr = transform_image() 
		rospy.init_node('image_converter', anonymous=True) 
		try: 
			rospy.spin() 
		except KeyboardInterrupt: 
			print("Shutting down") 
			cv2.destroyAllWindows() 

if __name__ == '__main__': 
	main(sys.argv) 

 