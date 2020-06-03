(function()
  {"use strict";
      class Bicycle{
        constructor() {
            this._speed = 0;
            }
            applyBrake(decrement) {
             this._speed-=decrement;
            }
            speedup(increment){
                this._speed+=increment;
            }
      }
      class MountainBike extends Bicycle{
          constructor(){
            super();
            
            this.gear=1
             }
          setGear(newgear){
              this._gear=newgear;
          }

      }
       function start(){
         let bicycle=new Bicycle();
        let  mountainbike=new MountainBike();
         bicycle.applyBrake(10);
         console.log(bicycle._speed +":bicyle speed");
         bicycle.speedup(10);
         console.log(bicycle._speed+":bicyle speed");
         mountainbike.speedup(10);
         console.log(mountainbike.speed + ":mountainbicyle speed");
         mountainbike.speed=5;//make mountain bike speed 5
         console.log(mountainbike._speed + ":mountainbicyle speed");
         console.log(bicycle.gear);//undefine because gear is not the property of bicycle
         console.log(bicycle._speed);
         mountainbike.setGear(3);
         console.log(mountainbike._gear);

      }

    start();

  }
)();