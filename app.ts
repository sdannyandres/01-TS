interface IC {
    
    X: number
    Y: number
    }

    var coord: IC[] = [
    {X:1, Y:1},
    {X:2, Y:1},
    {X:3, Y:1},
    {X:4, Y:1},
    {X:5, Y:1},

    ]

    const pagina = (p: number, u?: number) : IC[] => {
       if (u === undefined) {
        return coord.filter((c: IC, index:number) :boolean => {
            return index >= p 
        })
       } else {
        return coord.filter((c:IC, index:number) :boolean => {
            return index >= p && index < u
        })
       }
    }

    console.log(pagina(0))
    console.log(pagina(1,2))