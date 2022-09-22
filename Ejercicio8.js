function simple(){
    return console.log(true)
  }
  
  simple()
  
  const myTime = setTimeout(myGreeting,5000)
  
  function myGreeting(){
    return console.log('Hola soy una promesa')
  }
  
  function* generaId() {
      let id = 0;
      while(true) {
          id++
          if (id === 10) {
              return id 
          }
          yield id * 2
      }
  }
  
  const gen = generaId();
  console.log(gen.next())
  console.log(gen.next())
  console.log(gen.next())