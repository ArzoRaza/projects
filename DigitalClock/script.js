const cccc = document.getElementById('cccc');
// const clock = document.querySelector('#clock')

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleString());
    cccc.innerHTML = date.toLocaleTimeString();
}, 1000);
