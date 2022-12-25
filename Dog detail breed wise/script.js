var breedImg =$("#dog-image-container");
var dropDown =$("#dog-breed");
var allowSubmit = true;
var breed;

// 'GET' method is uesd to request server
$.get('https://dog.ceo/api/breeds/list/all', function(data, status){
    let dogBreeds = data.message;
   
    // console.log(dogBreeds);
    for(let breed in dogBreeds){
        // console.log(breed);
        dropDown.append('<option value="' + breed +'">'+ breed +'</option>');
        // console.log(dropDown);

    }
});
dropDown.change(function(){
    allowSubmit=true;

});
// console.log(dropDown);

$("form button").click(function (e) {
    // alert("button was clicked");
    // console.log(dropDown);
    e.preventDefault();
    if(allowSubmit){
        breed= dropDown.val();
        console.log(breed);
        displayDog(breed);
        // console.log(displayDog(breed));
        allowSubmit=false;
    }
});
// $("form button").click(function (e) {
//     e.preventDefault();
//     if (allowSubmit) {
//         breed = dropDown.val();
//         console.log(breed);
//         displayDog(breed);
//         allowSubmit = false;
//     }

// });
// for use of next button
$('#next a').click(function(e){
e.preventDefult(); 
if(breed !==undefined){
    displayDog(breed);
}
});
function displayDog(breed){
let url ="https://dog.ceo/api/breed/" + breed + "/images/random";
$("#dog-image-container img").remove();

$.get(url,function(data,status){
    let imgeUrl = data.message;
    console.log(imgeUrl);
    breedImg.append('<img src="'+imgeUrl+'"alt="'+breed+'">');
    console.log(breedImg);
});
}
// console.log(displayDog);
