
//DOG CALL from https://docs.thedogapi.com/
fetch('https://api.thedogapi.com/v1/images/search').then(response => response.json())
.then(response => {
    console.log(response);

    //api call that we want to show
    const doggo = response[0].url;

    //select html on the page
    const select = document.getElementById('doggo');
    //update html with api data
    select.style.backgroundImage = "url('" + doggo + "')";
}
    
    )
.catch(err => console.error(err));

//NEXT

//can also use .innerHTML
document.getElementById('advice').innerHTML += '<p>test</p>';

// when looking at answers need JAVASCRIPT NOT JQUERY



//ADVICE CALL FROM https://api.adviceslip.com/
fetch('https://api.adviceslip.com/advice/{slip_id}').then(response => response.json())
.then(response => {
    console.log(response);

    //api call that we want to show
    const advice = response[0].url;

    //select html on the page
    const select = document.getElementById('advice');
    //update html with api data
    select.style.backgroundImage = "url('" + advice + "')";
}
    
    )
.catch(err => console.error(err));

//NEXT

//can also use .innerHTML
document.getElementById('advice').innerHTML += '<p>test</p>';

// when looking at answers need JAVASCRIPT NOT JQUERY

