function fetchRandomImg(){
//   //  XMLHttpRequest is object is used to exchange of data with a web server
//     var xhrRequest = new XMLHttpRequest();
//     xhrRequest.onload =function(){
//         console.log(xhrRequest.response);
//         // convert string to json : json.parse()
//         var responseJson =JSON.parse(xhrRequest.response);
//         // access the data
//         var imgeUrl = responseJson.message;
//         // to shaow image
//         $('#dog-img').attr('src',imgeUrl);


//     };
// //    open the link 
//     xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
//  xhrRequest.send();
// // for error
// xhrRequest.onerror =function(){
//     console.log("request faild");
// };



// ajax method using jquery

$.ajax({
    URL:"https://dog.ceo/api/breeds/image/random",
    method:'GET',
    success:function(data){
        // var responseJson =JSON.parse(xhrRequest.response);
               // access the data
            //    console.log(data);
            var imgeUrl = data.message;
        // console.log(imgeUrl);
        $('#dog-img').attr('src',imgeUrl);

    }

    


});

// $.get("https://dog.ceo/api/breeds/image/random",function(data){
//     var imgeUrl =data.message;
//     $('#dog-img').attr('src',imgeUrl);

// }).fail(function(xhr,textStatus,errorThrown){
//     console.log("request faild");
// })

}
// // to start execution 

$('#fetch-dog-img-btn').click(fetchRandomImg);