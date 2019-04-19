import React, { Component } from 'react'
import Kortkomponent from './Kortkomponent'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      kort: 
      [
        {
          id: 1,
          memorykod: 'a',
          uppvand: false
        },
        {
          id: 2,
          memorykod: 'a',
          uppvand: false
        },
        {
          id: 3,
          memorykod: 'b',
          uppvand: false
        },
        {
          id: 4,
          memorykod: 'b',
          uppvand: false
        },
        {
          id: 5,
          memorykod: 'c',
          uppvand: false
        },
        {
          id: 6,
          memorykod: 'c',
          uppvand: false
        }
      ],
      uppvandakort:  [],
      poang:0
    }
    this.handleClick = this.handleClick.bind(this);
    this.vanduppkort = this.vanduppkort.bind(this);
    this.baksida = this.baksida.bind(this);
    this.detarpar = this.detarpar.bind(this);
    this.vandneralla = this.vandneralla.bind(this);
    this.blanda = this.blanda.bind(this);



  }

  handleClick(id){
    //plockar ut det objektet ur arrayen kort som blev klickad på
    let filtreratobjekt = this.state.kort.filter(obj => {
      return obj.id === id
    })

    filtreratobjekt = filtreratobjekt[0]
    
    //console.log('du har klickat på ', id, 'dess objekt är', filtreratobjekt)
    
    //kollar om det ligger två kort uppvända eller om det aktuella kortet redan är uppvänt
    if(this.state.uppvandakort.length === 2 || filtreratobjekt.uppvand === true){
      //console.log('uppvandakort är 2 eller mer eller filtreratobjekt.uppvand är', filtreratobjekt.uppvand)
      //console.log('uppvand är', filtreratobjekt.uppvand)
      console.log('filtrerad uppvand kan vara true')
    }
    //om inte något av det stämmer vänder den upp kortet dvs ändrar dess uppvand till true
    else{
      console.log('uppvandakort är 0 eller 1')
      this.vanduppkort(id)
      //console.log('snart pushar jag in i arrayen')
      //pushar in filtreratobjekts memorykod till nyarray. Sen ersätts uppvandakort med den arrayen
      let nyarray = this.state.uppvandakort
      nyarray.push(filtreratobjekt.memorykod)
      this.setState({
        uppvandakort: nyarray
      })
      
      if(this.state.uppvandakort.length === 2){
        console.log('if körs sista raden')
        if(this.state.uppvandakort[0] === this.state.uppvandakort[1]){
          console.log('Det är par! metoden med samma namn rings upp')
          this.detarpar()
        }
        else{
          console.log('Det är inte par tyvärr om 1s kör vändneralla')  
          setTimeout(function(){ this.vandneralla(); }.bind(this), 600);
        }       
      }
      else{
        console.log('else körs det verkar bara finnas en post i uppvandakort ')       

      }
    }

  }

  vandneralla(){
    console.log('vandneralla')
    this.setState((prevState) => {
      let nyarray = prevState.kort.map((obj) => {
        obj.uppvand = false
        return obj
      })
      return (
        prevState.kort = nyarray,
        prevState.uppvandakort = []
        )
    })


  }

  detarpar(){
    let parkod = this.state.uppvandakort[0]
    let nyarray = this.state.kort.map(obj => {
      if(obj.memorykod === parkod){
        obj.memorykod = 'x'
        return obj
      }
      else{
        return obj
      }
    })

    this.setState({
      poang: this.state.poang +1,
      kort: nyarray,
      uppvandakort: []
    })
  }

  

  vanduppkort(id){


    //gör om id till arrayindex och ändrar state uppvänd till true baksida() ger blå färg
    console.log('vanduppkort körs')
    let klickatobjekt
    let klickatobjektarray = this.state.kort.map(obj => {
      if(obj.id === id){
        klickatobjekt = obj
        return null
      }
      else{
        return null
      }
    })
    console.log('hjälpmap', klickatobjektarray)

    //console.log('vanduppkort variabeln är', klickatobjekt)

    let newkort = this.state.kort

    newkort = newkort.map(x => {
      if(klickatobjekt === x){
        x.uppvand = true
        return x
      }
      else{
        return x
      }
    })

    console.log('newkort', newkort)
    
  }



  baksida(truefalse, memorykod){
    
    if(truefalse){
      // Detta ska senare göras om till en 
      //swich där de olika baksidorna läggs till som css klasser

    if(memorykod ==='a'){

      return "kortklass blue"
    }
    if(memorykod ==='b'){

      return "kortklass yellow"
    }
    if(memorykod ==='c'){

      return "kortklass black"
    }
    }
    else{
      return "kortklass"
    }
  }

  vinstkoll(){
    if(this.state.kort.length === this.state.poang * 2){
      setTimeout(function(){ alert('Vinst!') }, 200);
      
    }
  }

  blanda(){
    console.log('blanda körs')

    function randomFunc(myArr) {      
      var l = myArr.length, temp, index;  
      while (l > 0) {  
         index = Math.floor(Math.random() * l);  
         l--;  
         temp = myArr[l];          
         myArr[l] = myArr[index];          
         myArr[index] = temp;      
      }    
      return myArr;
   } 

    let ejblandadarray = this.state.kort

      let blandadarray = randomFunc(ejblandadarray)

      this.setState({
        kort: blandadarray
      })

      console.log(blandadarray)

  }

  render() {

    const kortarray = this.state.kort.map(obj => {

      return <Kortkomponent 

      sendclass={this.baksida(obj.uppvand, obj.memorykod)}
      key={obj.id}
      id={obj.id}
      memorykod={obj.memorykod}
      uppvand={obj.uppvand}
      handleClick={this.handleClick}
      
      />
    })

    
return(
      <div>
        {kortarray}
       
            <button onClick={this.blanda}>blanda</button>
            <p>uppvanda kort length {this.state.uppvandakort.length}</p>
            <p>poäng {this.state.poang}</p>
            {this.vinstkoll()}

      </div>
    )
  }
  
}