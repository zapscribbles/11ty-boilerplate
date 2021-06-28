function getObjectByPropertyValue(array, propertyName, propertyValue) {
    return array.find(o => o[propertyName] == propertyValue)
}

function getIndexByPropertyValue(array, propertyName, propertyValue) {
    return array.findIndex(o => o[propertyName] == propertyValue)
}

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

function humanReadableProxy(data) {
    return JSON.parse(JSON.stringify(data))
}