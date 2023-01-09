
const content=[
    {name: 'Elon Musk',
    position: 'Co-Founder',
    img:"https://www.aljazeera.com/wp-content/uploads/2022/07/2022-07-08T163429Z_1748155903_RC2R7V96982Q_RTRMADP_3_ELON-MUSK-CHILDCARE.jpg?resize=1800%2C1800"
    },
  {name: 'Michael Kim',
  position: 'Founder',
  img:"https://media.licdn.com/dms/image/C4D03AQHZ_MbNTKlKPQ/profile-displayphoto-shrink_100_100/0/1582775091368?e=1678320000&v=beta&t=6kgPpBw6YiKcD2fk8-2sv32KiK0Uem1Y_yQGCqEsqbk"},
  {name: 'Elmira Kim',
  position: 'CFO',
  img:"https://media.licdn.com/dms/image/C4E03AQGYWMnS-_t2LA/profile-displayphoto-shrink_100_100/0/1609977029195?e=1678320000&v=beta&t=LYmDT8OmrktFN7V-dgSenc3GHRl-MAZbwP8e3J2-iSw"}
  ]
  let currentInd=0
  function renderItems(){
    const item = content[currentInd]
    console.log(currentInd)
      document.querySelector("#root").innerHTML = `<li>
      <img src=${item.img}>
      <h1>${item.name}</h1>
      <h2>${item.position}</h2>
      </li>`
    
  }
  function onPrev(){
    currentInd--;
    if (currentInd<0){
      currentInd=content.length-1
    }
    renderItems()
  }
  function onNext(){
    
    if (currentInd==content.length-1){
      currentInd=0
    }
    else currentInd++;
    renderItems()
  }
  function onSurprise(){
    // rangeMax - rangeMin
    // 2-0
    // random 0.0-0.9
    // floor(random*10)-> 0-9
    // 1-10
    //floor(random*10)+1 ==> 1-10
    //floor(random*(rangeMax - rangeMin+1))
    currentInd = Math.floor(Math.random()*(content.length-1-0+1))
    renderItems()
  }
  let a = renderItems()
  console.log(a)
