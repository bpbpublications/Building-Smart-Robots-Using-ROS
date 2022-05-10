**Installing Gazebo (in case it was not installed previously)**\
sudo apt install ros-kinetic-gazebo-ros

**Material parameters in Gazebo**
---
    <material name="Red">
    <colorrgba =”1.0  0.0  0.0  1.0”/>
    </material>
    <gazebo reference="base_link">
    <material>Gazebo/Red</material>
    </gazebo>
---

**Model Plugin sample**
---
    <gazebo>
     <plugin name="differential_drive_controller" filename="libdiffdrive_plugin.so">
        ... plugin parameters ...
     </plugin>
    </gazebo>
---
**Sensor Plugin sample**
---
    <gazebo reference="hokuyo_link">
      <sensor type="gpu_ray" name="head_hokuyo_sensor">
        <pose>0 0 0 0 0 0</pose>
        <visualize>false</visualize>
        <update_rate>40</update_rate>
        <ray>
          <scan>
            <horizontal>
              <samples>720</samples>
              <resolution>1</resolution>
              <min_angle>-1.570796</min_angle>
              <max_angle>1.570796</max_angle>
            </horizontal>
          </scan>
          <range>
            <min>0.10</min>
            <max>30.0</max>
            <resolution>0.01</resolution>
          </range>
          <noise>
            <type>gaussian</type>
            <mean>0.0</mean>
            <stddev>0.01</stddev>
          </noise>
        </ray>
        <plugin name="gazebo_ros_head_hokuyo_controller" filename="libgazebo_ros_gpu_laser.so">
          <topicName>/rrbot/laser/scan</topicName>
          <frameName>hokuyo_link</frameName>
        </plugin>
      </sensor>
    </gazebo>
---
[Link to other plugins](http://gazebosim.org/tutorials?tut=ros_gzplugins)
