**Command to run Rviz**\
rosrun rviz rviz

Add the following lines to the launch file for visualizing urdf
---
    <param name="robot_description" command="$(find xacro)/xacro.py '$(find my_robot)/urdf/robot.xacro'" />
	 <include file="$(find my_robot)/launch/empty_world.launch">
	 </include>
	 <node name="joint_state_publisher" pkg="joint_state_publisher" type="joint_state_publisher" ></node>
	 <!-- start robot state publisher -->
	 <node pkg="robot_state_publisher" type="robot_state_publisher" name="robot_state_publisher" output="screen" >
	 <param name="publish_frequency" type="double" value="50.0" />
	 </node>
---

Add following lines in launch file to start rviz through launch file
---
	 <launch>
	 <node type="rviz" name="rviz" pkg="rviz" args="-d $(find package_name)/rviz/config_file.rviz" />
	 </launch>
---
