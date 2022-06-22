document.getElementById('map').addEventListener('load', async function(){
    // Will get called after embed element was loaded
    svgPanZoom(document.getElementById('map'), {
        zoomEnabled: true,
        controlIconsEnabled: true
    });
    const p = new Promise((r) => setTimeout(() => r(), 1000));
    await p;
    addOnClickToMarkers('map');
});



function addOnClickToMarkers(objectId) {
    const markers = document.querySelectorAll("g#markers > path")
    markers.forEach((marker) => {
        const name = marker.getAttribute('data-name');
        onClick = () => {
            // fill country with new color
        }
        marker.onClick = onClick;
    })
}


