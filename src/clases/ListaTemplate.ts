import { IFormatString } from "../interfaces/IFormatString";

export class ListaTemplate{
      
     constructor(private container: HTMLUListElement){}

     render(item: IFormatString, pos:'start' | 'end'){
        const li=document.createElement('li')
        li.classList.add('list-group-item')
        const p = document.createElement('p')
        p.innerText=item.format()
        li.append(p)
        if (pos==='start'){
            this.container.prepend(li)
        }else{
            this.container.append(li)
        }
     }
    


} 