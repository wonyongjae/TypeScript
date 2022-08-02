// interface
interface MyStorage<T> {
    [key:string]:T
}

class LocalStorage<T> {
    private storage : MyStorage<T> = {}
    setItem(key:string, value: T){
        this.storage[key] = value;
    }
    getItem(key:string):T{
        return this.storage[key]
    }
    clearItem(key:string){
        delete this.storage[key]
    }
    clear(){
        this.storage = {}
    }

}

const myStringStorage = new LocalStorage<string>()
myStringStorage.setItem("hello", "im yongjae");
console.log(myStringStorage);
console.log(myStringStorage.getItem("hello"));
myStringStorage.setItem("hi", "nice to meet u");
myStringStorage.clearItem("hello");
console.log(myStringStorage);
myStringStorage.clear();
console.log(myStringStorage);


const myNumberStorage = new LocalStorage<number>()
myNumberStorage.setItem("lucky", 7);
console.log(myNumberStorage);
console.log(myNumberStorage.getItem("lucky"));
myNumberStorage.setItem("jack pot", 777);
myNumberStorage.clearItem("lucky");
console.log(myNumberStorage);
myNumberStorage.clear();
console.log(myNumberStorage);

const myBooleanStorage = new LocalStorage<boolean>()
myBooleanStorage.setItem("true!", true);
console.log(myBooleanStorage);
console.log(myBooleanStorage.getItem("true!"));
myBooleanStorage.setItem("false!", false);
myBooleanStorage.clearItem("true!");
console.log(myBooleanStorage);
myBooleanStorage.clear();
console.log(myBooleanStorage);









// geolocation
function successFn(position){
    console.log(position.coords.latitude, position.coords.longitude);

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "17a186edef4bb4a765fc7d203daa3a99";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        // myLocation.innerHTML = `${data.name}`;
        // weather.innerHTML = `${data.weather[0].main}`;
        // temperature.innerHTML = `${data.main.temp.toFixed(1)}`;
        // tempSymbol.innerHTML = "℃";
    });
}
function errorFn(){
    console.log("Um... Where are you...?");
}



function success(position){
    console.log(position.coords.latitude, position.coords.longitude);

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "17a186edef4bb4a765fc7d203daa3a99";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        // myLocation.innerHTML = `${data.name}`;
        // weather.innerHTML = `${data.weather[0].main}`;
        // temperature.innerHTML = `${data.main.temp.toFixed(1)}`;
        // tempSymbol.innerHTML = "℃";
    });
}
function error(){
    console.log("Um... Where are you...?");
}

navigator.geolocation.getCurrentPosition(successFn, errorFn);
navigator.geolocation.getCurrentPosition(successFn);
navigator.geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
navigator.geolocation.watchPosition(success);
navigator.geolocation.watchPosition(success, error);
navigator.geolocation.watchPosition(success, error, options);
navigator.geolocation.clearWatch(id);


