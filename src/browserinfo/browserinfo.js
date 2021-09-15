// var browserInfo = {
//     appCodeName: navigator.appCodeName,
//     appName: navigator.appName,
//     appVersion: navigator.appVersion,
//     Connection: navigator.connection,
//     GeoLocationSupport: navigator.geolocation ? 'Supported' : 'Not Supported',
//     GeoLocationEnabled: function () {
//         navigator.geolocation.getCurrentPosition(function showPosition(position) {
//             return position.coords.latitude == null ? 'Permission denied' : 'Permission Granted'
//         });
//     },
//     Keyboard: navigator.keyboard,
//     UserActivation: navigator.userActivation.hasBeenActive ? 'User is active' : 'User is deactive',
//     userAgent: navigator.userAgent,
//     vendor: navigator.vendor,
//     productSub: navigator.productSub,
//     platform: navigator.platform,
//     serviceWorker: 'serviceWorker' in navigator ? 'Service worker registerd' : 'Service worker is not registred',
// }

export function browserInfo(){
        const br = {
                appCodeName: navigator.appCodeName,
                appName: navigator.appName,
                appVersion: navigator.appVersion,
                Connection: navigator.connection,
                GeoLocationSupport: navigator.geolocation ? 'Supported' : 'Not Supported',
                GeoLocationEnabled: function () {
                        navigator.geolocation.getCurrentPosition(function showPosition(position) {
                        return position.coords.latitude == null ? 'Permission denied' : 'Permission Granted'
                        });
                },
                Keyboard: navigator.keyboard,
                UserActivation: navigator.userActivation.hasBeenActive ? 'User is active' : 'User is deactive',
                userAgent: navigator.userAgent,
                vendor: navigator.vendor,
                productSub: navigator.productSub,
                platform: navigator.platform,
                serviceWorker: 'serviceWorker' in navigator ? 'Service worker registerd' : 'Service worker is not registred',
        }
        return br
}