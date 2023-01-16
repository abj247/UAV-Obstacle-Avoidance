
"use strict";

let Altimeter = require('./Altimeter.js');
let AttitudeCommand = require('./AttitudeCommand.js');
let ServoCommand = require('./ServoCommand.js');
let RawRC = require('./RawRC.js');
let VelocityXYCommand = require('./VelocityXYCommand.js');
let ControllerState = require('./ControllerState.js');
let RC = require('./RC.js');
let PositionXYCommand = require('./PositionXYCommand.js');
let Supply = require('./Supply.js');
let RuddersCommand = require('./RuddersCommand.js');
let RawMagnetic = require('./RawMagnetic.js');
let VelocityZCommand = require('./VelocityZCommand.js');
let ThrustCommand = require('./ThrustCommand.js');
let HeightCommand = require('./HeightCommand.js');
let MotorCommand = require('./MotorCommand.js');
let MotorStatus = require('./MotorStatus.js');
let HeadingCommand = require('./HeadingCommand.js');
let Compass = require('./Compass.js');
let YawrateCommand = require('./YawrateCommand.js');
let MotorPWM = require('./MotorPWM.js');
let RawImu = require('./RawImu.js');

module.exports = {
  Altimeter: Altimeter,
  AttitudeCommand: AttitudeCommand,
  ServoCommand: ServoCommand,
  RawRC: RawRC,
  VelocityXYCommand: VelocityXYCommand,
  ControllerState: ControllerState,
  RC: RC,
  PositionXYCommand: PositionXYCommand,
  Supply: Supply,
  RuddersCommand: RuddersCommand,
  RawMagnetic: RawMagnetic,
  VelocityZCommand: VelocityZCommand,
  ThrustCommand: ThrustCommand,
  HeightCommand: HeightCommand,
  MotorCommand: MotorCommand,
  MotorStatus: MotorStatus,
  HeadingCommand: HeadingCommand,
  Compass: Compass,
  YawrateCommand: YawrateCommand,
  MotorPWM: MotorPWM,
  RawImu: RawImu,
};
