**Intalling Rosbridge**\
sudo apt-get install ros-<rosdistro>-rosbridge-suite\
For Ros kinetic : sudo apt-get install ros-kinetic-rosbridge-suite

Script to connect to rosbridge server on port 9090
---
	 var ros = new ROSLIB.Ros({
	 url : 'ws://localhost:9090'
	   });
	
	 ros.on('connection', function() {
	 console.log('Connected to websocket server.');
	   });
	
	 ros.on('error', function(error) {
	 console.log('Error connecting to websocket server: ', error);
	   });
	
	 ros.on('close', function() {
	 console.log('Connection to websocket server closed.');
	   });

	 var cmdVel = new ROSLIB.Topic({
	 ros :ros,
	 name : '/cmd_vel',
	 messageType : 'geometry_msgs/Twist'
	   });

---

HTML Element for button
---
	 <button onclick="publish_SetServo(0)">0&deg;</button>
	 <button onclick="publish_SetServo(180)">180&deg;</button>
---
Corresponding buttton link to ROS
---
	   let ROS_Servo = new ROSLIB.Topic({ros: ros,name:"/servo",messageType:"std_msgs/UInt8"});
	   function publish_SetServo(angle)
	   {
	 ROS_Battery.publish(new ROSLIB.Message({data :parseInt(angle)}));
	   }
---


HTML Element for checkbox
---
    <input type="checkbox" id="headlightSwitch" onchange="sendHeadlightStatus(this.checked)">
---
Corresponding checkbox link to ROS
---
	 let ROS_Headlight = new ROSLIB.Topic({ros: ros,name:"/headlight",messageType:"std_msgs/Bool"});
	   function sendHeadlightStatus(state)
	   {
	 ROS_Headlight.publish(new ROSLIB.Message({data : state}));
	   }
---


HTML Element for slider
---
     <input type="range" id="servoInput" oninput="sendServoAngle(this.value)" min="0" max="180" value="90">
---
Corresponding slider link to ROS
---
	   let ROS_Servo = new ROSLIB.Topic({ros: ros,name:"/servo",messageType:"std_msgs/UInt8"});
	   function sendServoAngle(angle)
	   {
	 ROS_Servo.publish(new ROSLIB.Message({data :parseInt(angle)}));
	   }
---

HTML Element for Progress bar
---
	 <span>Ultrasonic Sensor</span>
	 <progress id="ultrasonicIndicator" value="0" max="255"></progress>

---
Corresponding progress bar link to ROS
---
	 let ROS_Ultrasonic = new ROSLIB.Topic({ros: ros,name:"/ultrasonic",messageType:"std_msgs/UInt8"});
	 ROS_Ultrasonic.subscribe(function(message) {
	 document.getElementById("ultrasonicIndicator").value=message.data;
	     });
---

Threejs library integration for IMU
---
	 <div id="threeCanvas"></div>
	 <script src="three.js"></script>
	 <script src="OrbitControls.js"></script>
	
         <script type="text/javascript">
	
	         var renderer = new THREE.WebGLRenderer({ alpha: true });
	 renderer.setSize(512, 512);
	 document.getElementById('threeCanvas').appendChild( renderer.domElement );
	         //Initialising three.js scene
	         var scene = new THREE.Scene();
	         var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x0f0e0d, 2);
	 hemiLight.position.set(5,1,0);
	 scene.add( hemiLight );
	         //Defining a camera
	         var camera = new THREE.PerspectiveCamera( 15, 1, 1, 500 );
	         var camera = new THREE.PerspectiveCamera(
	
	             );
	 camera.position.set(20,10,25);
	         //Creating Cube
	         var geometry = new THREE.BoxGeometry( 2, 1, 1 );
	         var material = new THREE.MeshPhongMaterial( 
	         { 
	 color: 0x156289,
	             emissive: 0x072534,
	             side: THREE.DoubleSide,
	 flatShading: true 
	         });
	         var ROBOT = new THREE.Mesh( geometry, material );
	 ROBOT.position.set(0,.5,0)
	 scene.add( ROBOT );
	         //Create Axis Helper
	 scene.add( newTHREE.AxesHelper( 5 ) );
	         //Creating Grid for understanding reference.
	        var helper = new THREE.GridHelper( 5, 10,0xFF0000,0x00FF00 );
	 scene.add( helper );
	         //Adding orbit control to move camera using mouse
	         var controls = new THREE.OrbitControls( camera,renderer.domElement );
	 controls.target = new THREE.Vector3( 0, 3, 0 );
	 controls.update();
	         function animate() {
	 requestAnimationFrame( animate );
	 renderer.render( scene, camera );
	         }
	 animate();
	 </script>
---

Subscribing to IMU values from ROS
---
	     let ROS_Odometry = new ROSLIB.Topic({ros: ros,name:"/odom",messageType:"nav_msgs/Odometry"});
	 ROS_Odometry.subscribe(function(message) {
	       var rotation = new THREE.Euler().setFromQuaternion({
	         _x:message.pose.pose.orientation.x,
	         _y:message.pose.pose.orientation.y,
	         _z:message.pose.pose.orientation.z,
	         _w:message.pose.pose.orientation.w
	         });
	 ROBOT.rotation.y = rotation._z;//Currently an setting only yaw of the robot.
	     });
---

[Information on Roslibjs](http://wiki.ros.org/roslibjs/Tutorials/BasicRosFunctionality)
