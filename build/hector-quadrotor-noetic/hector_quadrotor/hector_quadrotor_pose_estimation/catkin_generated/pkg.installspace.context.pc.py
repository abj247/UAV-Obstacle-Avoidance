# generated from catkin/cmake/template/pkg.context.pc.in
CATKIN_PACKAGE_PREFIX = ""
PROJECT_PKG_CONFIG_INCLUDE_DIRS = "${prefix}/include".split(';') if "${prefix}/include" != "" else []
PROJECT_CATKIN_DEPENDS = "hector_pose_estimation;hector_uav_msgs".replace(';', ' ')
PKG_CONFIG_LIBRARIES_WITH_PREFIX = "-lquadrotor_pose_estimation_nodelet;-lquadrotor_pose_estimation_node".split(';') if "-lquadrotor_pose_estimation_nodelet;-lquadrotor_pose_estimation_node" != "" else []
PROJECT_NAME = "hector_quadrotor_pose_estimation"
PROJECT_SPACE_DIR = "/home/codemonster/drone_ws/install"
PROJECT_VERSION = "0.3.5"
