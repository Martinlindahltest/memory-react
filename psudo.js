import { get } from "https";
/* Finns jag på github nu?*/ 
state = {
    kort = [ 
        {
            id:             idnummer,
            memorykod:      a/b/caches,
            ärjaguppvänd:   false,
        },
    ]

    uppvändakort = [],
    poang: 0
}

Onklick(id){
    if(this.state.uppvändakort.length > 2){
        vändneralla();
    }
    else{
        if(this.state.kort-medrättid.ärjaguppvänd === true){
            göringenting
        }
        else {
            vänduppkortettmeddethäridt(id)
            this.setState(prevState => {
                 uppvändakort = prevState.uppvändakort.push(objektetmeddethärIDt)
            })
            if(Ärdetpar() === true){
                let =kortattersätta1 = get.id.uppvändakort[0]
                let =kortattersätta2 = get.id.uppvändakort[1]

                ersättkortmedkyss(kortattersätta1)
                ersättkortmedkyss(kortattersätta2)

                gepoäng()
            }
            else{
                vänd-ner-alla-om-1-sekund()
            }
        }
    }
}


detarpar(){
    setState({
        poäng: poäng + 1
        1 leta reda på kortkomponenterna på bordet som har memorykod =uppvandakort[0]
        2 ersätt dom med ett annat kort som inte har några egenskaper mer än att de ligger där 
        kortet har legat
    })
}

startanyttspel(){
    onklick på en knapp startar denna
    enarraymedallakort = []
    enarraymedkorten som ska användas = []

    en loop som tar de översta 'X' == .length{
        push in i array 2
        blandakort()
    }

    function blandakort{
        blandakorten i enarraymedallakort
        pusha in i enarraymedkorten som ska användas
        this.setState({
            kort =     enarraymedkorten som ska användas = []

        })
    }
    }





/*Hårdkodade komponenter*/ 
<Kortkomponent
            sendclass={this.baksida(this.state.kort[0].uppvand, this.state.kort[0].memorykod)}
            key={this.state.kort[0].id}
            id={this.state.kort[0].id}
            memorykod={this.state.kort[0].memorykod}
            uppvand={this.state.kort[0].uppvand}
            handleClick={this.handleClick}
            />

<Kortkomponent 
            sendclass={this.baksida(this.state.kort[1].uppvand, this.state.kort[1].memorykod)}
            key={this.state.kort[1].id}
            id={this.state.kort[1].id}
            memorykod={this.state.kort[1].memorykod}
            uppvand={this.state.kort[1].uppvand}
            handleClick={this.handleClick}
            />
<Kortkomponent 
            sendclass={this.baksida(this.state.kort[2].uppvand, this.state.kort[2].memorykod)}
            key={this.state.kort[2].id}
            id={this.state.kort[2].id}
            memorykod={this.state.kort[2].memorykod}
            uppvand={this.state.kort[2].uppvand}
            handleClick={this.handleClick}
            />
<Kortkomponent 
            sendclass={this.baksida(this.state.kort[3].uppvand, this.state.kort[3].memorykod)}
            key={this.state.kort[3].id}
            id={this.state.kort[3].id}
            memorykod={this.state.kort[3].memorykod}
            uppvand={this.state.kort[3].uppvand}
            handleClick={this.handleClick}
            />







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



  vanduppkort(id){


    //gör om id till arrayindex och ändrar state uppvänd till true baksida() ger blå färg
    console.log('vanduppkort körs')
    let idtillarraynummer = id - 1
    this.setState(prevstate =>{
      return prevstate.kort[idtillarraynummer].uppvand = true 
    })
    
    

  }