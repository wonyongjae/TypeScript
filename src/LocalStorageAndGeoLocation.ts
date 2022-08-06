interface LocalStorageAPI<T> {
    [key:string]:T
}

class LocalStorage<T> {
    private storage : LocalStorageAPI<T> = {}
    setItem(key:string, value: T){
        this.storage[key] = value;
        console.log(this.storage);
    }
    getItem(key:string):T{
        return this.storage[key]
    }
    clearItem(key:string){
        delete this.storage[key]
        console.log(this.storage);
    }
    clear(){
        this.storage = {}
        console.log(this.storage);
    }

}

const myStringStorage = new LocalStorage<string>()
myStringStorage.setItem("hello", "im yongjae");
console.log(myStringStorage.getItem("hello"));
myStringStorage.setItem("hi", "nice to meet u");
myStringStorage.clearItem("hello");
myStringStorage.clear();


const myNumberStorage = new LocalStorage<number>()
myNumberStorage.setItem("lucky", 7);
console.log(myNumberStorage.getItem("lucky"));
myNumberStorage.setItem("jack pot", 777);
myNumberStorage.clearItem("lucky");
myNumberStorage.clear();

const myBooleanStorage = new LocalStorage<boolean>()
myBooleanStorage.setItem("true!", true);
console.log(myBooleanStorage.getItem("true!"));
myBooleanStorage.setItem("false!", false);
myBooleanStorage.clearItem("true!");
myBooleanStorage.clear();





interface GeolocationAPI{
        (a:Function):void
        (a:Function, b:Function):void
        (a:Function, b:Function, c:string):void
}

class myGeolocation{
     getCurrentPosition:GeolocationAPI = (successFn:Function, errorFn?:Function, optionsObj?:string):void => {
        if('geolocation' in navigator){
            optionsObj ? console.log(optionsObj) : successFn();
            // if(optionsObj){
            //     console.log(optionsObj);
            // }else{
            // successFn();
            // }
        }else{
            !errorFn ? console.log("위치정보 사용불가!") : errorFn();
            // if(!errorFn){
            //     console.log("위치정보 사용불가!")
            // }else{
            //     errorFn()
            // }
        }
    }
     watchPosition:GeolocationAPI = (success:Function, error?:Function, options?:string):void => {
            if('geolocation' in navigator){
                options ? console.log(options) : success();
                // if(optionsObj){
                //     console.log(optionsObj);
                // }else{
                // successFn();
                // }
            }else{
                !error ? console.log("위치정보 사용불가!") : error();
                // if(!errorFn){
                //     console.log("위치정보 사용불가!")
                // }else{
                //     errorFn()
                // }
            }
    }
}

const geolocation = new myGeolocation();

function successFn(){
    console.log("Geolocation Info Get Success!")
    // console.log(position.coords.latitude, position.coords.longitude);
    // const lat = position.coords.latitude;
    // const lon = position.coords.longitude;
    // const API_KEY = "17a186edef4bb4a765fc7d203daa3a99";
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // fetch(url).then(response => response.json()).then(data => {
    //     console.log(`myLocation is ${data.name}`);
    //     console.log(`weather is ${data.weather[0].main}`);
    //     console.log(`temperature is ${data.main.temp.toFixed(1)}℃`);
    // });
}
function success(){
    console.log("Geolocation Info Get Success!")
    // console.log(position.coords.latitude, position.coords.longitude);
}
function errorFn(){
    console.log("error...");
}
function error(){
    console.log("error...");
}

const watchID = navigator.geolocation.watchPosition((position)=>{position.coords.latitude, position.coords.longitude});
console.log(`Get WatchID is ${watchID}`);

const optionsObj = "optionsObj";
// const optionsObj = {
//     enableHighAccuracy: true,
//     maximumAge: 50000,
//     timeout: 30000
// }

const options = "options";
// const options = {
//     enableHighAccuracy: true,
//     maximumAge: 50000,
//     timeout: 30000
// }

geolocation.getCurrentPosition(successFn);
geolocation.getCurrentPosition(successFn, errorFn);
geolocation.getCurrentPosition(successFn, errorFn, optionsObj); 
geolocation.watchPosition(success);
geolocation.watchPosition(success, error);
geolocation.watchPosition(success, error, options);
navigator.geolocation.clearWatch(watchID);
console.log(`Clear WatchID is ${watchID}`);



