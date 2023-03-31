
import Figure from './Figure.js';

export default  class Square extends Figure{
    constructor(name, size){
        super (name);
        this.size = size;
    }
    get area(){
        return this.size * this.size
    }
   get circumference(){
    return (this.size + this.size) * 2
   }
    get innerHtml(){
       return `<div class="result">
       <div class="figure rectangle" style="width: ${this.size}px; height: ${this.size}px;"></div>
       <div class="infoBox">
         <h3>${this.name}</h3>
         <dl>
           <dt>Height</dt>
           <dd>${this.size} px</dd>
     
           <dt>Width</dt>
           <dd>${this.size} px</dd>
     
           <dt>Area</dt>
           <dd>${this.area} px</dd>
     
           <dt>Circumference</dt>
           <dd>${this.circumference} px</dd>
         </dl>
       </div>
     </div>`
    }
    
   
}
/* const s = new Square(Square, 4, 2);
console.log(s.area) // 8 */

