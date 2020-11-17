export function apiGet2() {
    let xmlhttps2 = new XMLHttpRequest();
    let golfAPI2 = 'https://golf-courses-api.herokuapp.com/courses';
    let golfResponse2;


    xmlhttps2.onreadystatechange = () => {
        if (xmlhttps2.readyState === 4 && xmlhttps2.status === 200) {
            golfResponse2 = JSON.parse(xmlhttps2.responseText);
            console.log(golfResponse2);

        }
        console.log(golfResponse);
        xmlhttps2.open('GET', golfAPI2, true)
        xmlhttps2.send();
    }
}