**Installing usb cam and Aruco ROS package**\
sudo apt-get install ros-kinetic-usb-cam ros-kinetic-aruco-ros\
sudo apt-get install ros-kinetic-usb-cam

Publisher Launch file
---
	 <launch>
	 <arg name="video_device" default="/dev/video1" />
	 <arg name="image_width" default="640" />
	 <arg name="image_height" default="480" />
	 
	 <node name="usb_cam" pkg="usb_cam" type="usb_cam_node" output="screen" >
	 <param name="video_device" value="$(argvideo_device)" />
	 <param name="image_width" value="$(argimage_width)" />
	 <param name="image_height" value="$(argimage_height)"/>
	 <param name="pixel_format" value="mjpeg" />
	 <param name="camera_frame_id" value="usb_cam" />
	 <param name="io_method" value="mmap"/>
	 </node>
	 </launch>
---

Launch file to start marker tracking
--- 
	 <launch>
	 <arg name="markerId" default="12"/>
	 <arg name="markerSize" default="0.025"/><!-- in meter -->
	 <arg name="eye" default="left"/>
	 <arg name="marker_frame" default="marker_frame"/>
	 <arg name="ref_frame" default=""/><!-- leave empty and the pose will be published wrt param parent_name -->
	 <arg name="corner_refinement" default="LINES" />
	 <node pkg="aruco_ros" type="single" name="aruco_single">
	 <remap from="/camera_info" to="/usb_cam/camera_info" />
	 <remap from="/image" to="/usb_cam/image_raw" />
	 <param name="image_is_rectified" value="True"/>
	 <param name="marker_size" value="$(argmarkerSize)"/>
	 <param name="marker_id" value="$(argmarkerId)"/>
	 <param name="reference_frame" value="$(argref_frame)"/><!-- frame in which the marker pose will be referred -->
	 <param name="camera_frame" value="base_link"/>
	 <param name="marker_frame" value="$(argmarker_frame)" />
	 <param name="corner_refinement" value="$(argcorner_refinement)" />
	 </node>
	 </launch>
---


