//AIzaSyDISy64VENLvv2mJtL4_VBKCmqfYmhv4Iw
function getLocation (){
    const location_ptag1 = document.getElementById("location-info1");
    const location_ptag2 = document.getElementById("location-info2");
    location_ptag1.innerHTML= "";
    location_ptag2.innerHTML= "";
      const successCallback = (position)=>{
          console.log(position) ;
          location_ptag1.innerHTML = "This is the Latitude : "+ position.coords.latitude;
          location_ptag2.innerHTML = "This is the Longitude : "+ position.coords.longitude;
         
      }
      const errorCallback = (error)=>{
        console.error(error) ;
    }
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
      }else{
          location_ptag1.innerHTML = "Geolocation is not supported by your browser";
      }
     
  }

  const location_button = document.querySelector("#location_button");
 

  location_button.addEventListener("click", getLocation);
  let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.655989899999994, lng: 12.4719763 },
    zoom: 8,
  });
}