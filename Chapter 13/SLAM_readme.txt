**Installing gmapping ros package**\
sudo apt-get install ros-kinetic-gmapping

Add laser link and joint
---
	 <link name="laser_link">
	 <visual>
	 <origin xyz="0 0 0" rpy="0 0 0" />
	 <geometry>
	 <cylinder length="0.02" radius="0.05"/>
	 </geometry>
	 <material name="Blue" />
	 </visual>
	 </link>
	 <joint name="base_laser_joint" type="fixed">
	 <origin xyz="0 0 0.08" rpy="0 0 0" />
	 <parent link="base_footprint"/>
	 <child link="laser_link" />
	 </joint>
	 <gazebo reference="laser_link">
	 <material>Gazebo/Blue</material>
	 <turnGravityOff>false</turnGravityOff>
	 <sensor type="ray" name="laser_sensor">
	 <pose>0 0 0 0 0 0</pose>
	 <visualize>true</visualize>
	 <update_rate>100</update_rate>
	 <ray>
	 <scan>
	 <horizontal>
	 <samples>720</samples>
	 <resolution>1</resolution>
	 <min_angle>-1.570796</min_angle>
	 <max_angle>4.71239</max_angle>
	 </horizontal>
	 </scan>
	 <range>
	 <min>0.10</min>
	 <max>100.0</max>
	 <resolution>0.001</resolution>
	 </range>
	 </ray>
	 <plugin name="gazebo_ros_head_hokuyo_controller" filename="libgazebo_ros_laser.so">
	 <topicName>/scan</topicName>
	 <frameName>laser_link</frameName>
	 </plugin>
	 </sensor>
	 </gazebo>
---

Plugin to convert cmd_vel topics to wheel velocities
--- 
	 <gazebo>
	 <plugin name="differential_drive_controller" filename="libgazebo_ros_diff_drive.so">
	 <legacyMode>false</legacyMode>
	 <rosDebugLevel>Debug</rosDebugLevel>
	 <publishWheelTF>false</publishWheelTF>
	 <robotNamespace>/</robotNamespace>
	 <publishTf>1</publishTf>
	 <publishWheelJointState>false</publishWheelJointState>
	 <alwaysOn>true</alwaysOn>
	 <updateRate>100.0</updateRate>
	 <leftJoint>front_right_wheel_joint</leftJoint>
	 <rightJoint>front_left_wheel_joint</rightJoint>
	 <wheelSeparation>${2*base_radius}</wheelSeparation>
	 <wheelDiameter>${2*wheel_radius}</wheelDiameter>
	 <broadcastTF>1</broadcastTF>
	 <wheelTorque>30</wheelTorque>
	 <wheelAcceleration>1.8</wheelAcceleration>
	 <commandTopic>cmd_vel</commandTopic>
	 <odometryFrame>odom</odometryFrame>
	 <odometryTopic>odom</odometryTopic>
	 <robotBaseFrame>base_footprint</robotBaseFrame>
	 </plugin>
	 </gazebo>
---


