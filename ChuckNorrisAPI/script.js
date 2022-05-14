const buttonHandleJoke = document.getElementById('getJoke');

function makeCall(){
  httpCall = fetch('https://api.chucknorris.io/jokes/random');
  httpCall.then(response => {
    if(response.ok){
       return response.json();
       }
    throw new Error('Request Failed');
  }, networkError => {console.log(networkError.message)
  }).then(response => {
    showJoke(response)
  });
}

function showJoke(response){
  console.log(response);
  const element = document.getElementById("joke");
  let joke = response.value;
  element.innerHTML = `<p class="jokeParagraph">${joke}</p>`;
}

makeCall();