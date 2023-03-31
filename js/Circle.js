
import Figure from './Figure.js';

export default  class Circle extends Figure{
    constructor(name, radius){
        super (name);
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2
    }
    get area(){
        return Math.floor(this.radius * Math.PI)
    }
   get circumference(){
    return Math.floor(this.radius * Math.PI * 2)
   }
    get innerHtml(){
       return `<div class="result">
       <div class="figure circle" style="width: DIAMETERpx; height: DIAMETERpx;"></div>
       <div class="infoBox">
         <h3>Circle</h3>
         <dl>
           <dt>Radius</dt>
           <dd>${this.radius}px</dd>
     
           <dt>Diameter</dt>
           <dd>${this.diameter} px</dd>
     
           <dt>Area</dt>
           <dd>${this.area} px</dd>
     
           <dt>Circumference</dt>
           <dd>${this.circumference} px</dd>
         </dl>
       </div>
     </div>`
    }
    
   
}
/* const c = new Circle(Circle, 4);
console.log(c.area) // 8 */

