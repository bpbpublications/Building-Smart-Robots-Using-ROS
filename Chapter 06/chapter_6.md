**Installing turtlesim package**\
sudo apt-get install ros-$(rosversion –d)-turtlesim\
For ros kinetic : sudo apt-get install ros-kinetic-turtlesim

**Start turtlesim with teleopkey**\
rosrun turtlesim turtlesim_node\
rosrun turtlesim turtle_teleop_key

**Publish message through terminal**\
rostopic pub -1 /turtle1/cmd_vel geometry_msgs/Twist -- '[2.0, 0.0, 0.0]' '[0.0, 0.0, 1.8]'

**Monitoring method**\
rostopic echo turtle1/cmd_vel
