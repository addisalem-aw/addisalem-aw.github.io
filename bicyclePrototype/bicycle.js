
(function() {
    "use strict";
    const createBicycleProtoype=function(){
       return{
            speed:0,
            applyBrake:function(val){
                this.speed=this.speed-val;
               },
            speedup:function(val)
            {
                this.speed=this.speed+val;
            }

        }
    }
    const createMountainBikeProtoype =function(bicycleproto){
        const mountainbike=Object.create(bicycleproto);
        mountainbike.gear=1;
        mountainbike.setGear=function(newgear){
              this.gear=newgear;
            }
        
       return  mountainbike;
      
    }
    const start=function(){
         const bicyclePrototype= createBicycleProtoype();
          const mountainBikePrototype=createMountainBikeProtoype(bicyclePrototype);
          bicyclePrototype.applyBrake(10);
          console.log(bicyclePrototype.speed +":bicyle speed");
          bicyclePrototype.speedup(10);
          console.log(bicyclePrototype.speed+":bicyle speed");
          mountainBikePrototype.speedup(10);
          console.log(mountainBikePrototype.speed + ":mountainbicyle speed");
          mountainBikePrototype.speed=5;//make mountain bike speed 5
          console.log(mountainBikePrototype.speed + ":mountainbicyle speed");
          console.log(bicyclePrototype.gear);//undefine because gear is not the property of bicyclePrototype
          console.log(bicyclePrototype.speed);
          mountainBikePrototype.setGear(3);
          console.log(mountainBikePrototype.gear);

    }
    start();
})();