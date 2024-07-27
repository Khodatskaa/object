function onGetPositionSuccess(position) {
    console.log("This is the onGetPositionSuccess call");
    console.log(position);
}
function onGetPositionError(error) {
    console.log("This is the onGetPositionError call");
    console.log(error);
}
window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);
