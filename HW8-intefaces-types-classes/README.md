- Created ts project
- Added user.interface.ts file as dto
- Added function to retrieve json response type Users from user.interface.ts
- Added user.class.ts file with constructor which uses type Users from user.interface.ts
  and forms new object inside called userSummary
- Added abstraction.ts created MotorVehicle interface to show interface level abstraction,
  added MotorBike class which implements MotorVehicle
- Added inside abstraction.ts Car abstract class which implements MotorVehicle interface to show abstract class level abstraction, and Minivan class which extends Car so multilevel inheritance was used in this example
- Created index.ts file where MotorBike and Minivan instances where created with appropriate functions and static values.
