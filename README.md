# UAV-Obstacle-Avoidance

This repo consists of obstacle avoidance implemented in Robot operating system for Unmanned Aerial Vehicle (UAV) using LiDAR scan data. Hector quadrotor package is used for spawning the drone in the gazebo environment. Readings from SONAR sensor with python script is used for flying he drone to a certain height. LiDAR readings are used to detect obstacles in the surroundings.

To spawn the drone in the gazebo open the terminal and use the command:

``` roslaunch drone_sim spawn_drone.launch ```  

For flying the drone, open another terminal and use the command:

``` rosrun drone_sim make_drone_fly.py ```

For simulating obstacle avoidance, open another teminal use command:

``` rosrun drone_sim obstacle_avoidance.py ```


Spawned drone in gazebo with LiDAR 

![Drone with lidar on ground](https://user-images.githubusercontent.com/111289395/213640520-a15538ca-bde2-481c-b324-6ad92adf7b01.png)
![Drone on ground_v2](https://user-images.githubusercontent.com/111289395/213640544-66b26416-6ef3-4662-a770-50c87d7c3729.png)

Drone flying in air with LiDAR and SONAR sensor (Low LiDAR range)

![Drone in air with low lidar range](https://user-images.githubusercontent.com/111289395/213640695-fc169e2b-d3c2-41c1-b9a3-3b70ead0f8e4.png)

Drone flying in air with LiDAR and SONAR (high LiDAR range)

![Drone in air with high lidar range](https://user-images.githubusercontent.com/111289395/213640827-0476d355-b164-4dd8-b04b-5a38c9071c30.png)

Drone in between obstacles

![Obstacle Avoidance_v1](https://user-images.githubusercontent.com/111289395/213640942-f12f51fc-ddd3-40a7-986f-f405a41e4ff3.png)

Drone successfully obtained collison-free path

![Obstacle Avoidance_v1](https://user-images.githubusercontent.com/111289395/213641041-b075c28e-2fca-4289-a5f3-cbc03a856a02.png)
![Obstacle Avoidance_drone path_v2](https://user-images.githubusercontent.com/111289395/213641068-8c116990-dd09-4473-a1db-6431a3d23f10.png)


