function getUserPosition() {
    let url; 
    navigator.geolocation.getCurrentPosition((pos) => {
      //utilização de const no lugar de let
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=95b11822eb429c84c1143a19251b1881`;
      fetchApi(url);
    });
  }

  //utilização de FetchApi 
  function fetchApi(url) {
    
  
    let cidade = document.getElementById('cidade');//
  
    fetch(url)
   
    .then((data) => {
      return data.json();
    })
    .then((data) => {
 
      cidade.innerText ='Ele habita em :   ' + data.name + ' ' + 'porque Ele está onde você está!';
      
      console.log(data);

    })
  
    .catch((err) => {
      cidade.innerText = 'Verifique a sua conexão.';
     
    })
  }
  if (navigator.geolocation) {
    getUserPosition()
  } else {
    city.innerText = 'Geolocalização não está disponível.';
       
  }
     
