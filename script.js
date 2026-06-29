emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY"
});

const form = document.getElementById("contactForm");

const status = document.getElementById("status");

const loader = document.getElementById("loader");

const btnText = document.getElementById("btnText");

form.addEventListener("submit", function(e){

e.preventDefault();

loader.style.display="inline";

btnText.style.display="none";

emailjs.sendForm(

"YOUR_SERVICE_ID",

"YOUR_TEMPLATE_ID",

form

)

.then(function(){

loader.style.display="none";

btnText.style.display="inline";

status.style.color="green";

status.innerHTML="Message sent successfully.";

form.reset();

})

.catch(function(error){

loader.style.display="none";

btnText.style.display="inline";

status.style.color="red";

status.innerHTML="Unable to send message.";

console.log(error);

});

});