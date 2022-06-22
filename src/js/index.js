document.getElementById('map').addEventListener('load', async function(){
    // Will get called after embed element was loaded
    svgPanZoom(document.getElementById('map'), {
        zoomEnabled: true,
        controlIconsEnabled: true
    });
    addOnClickToMarkers('map');
});

const COLORS = {
    YELLOW: '#fd0',
    FOCUS: '#f00',
}

function addOnClickToMarkers(objectId) {
    const markers = document.querySelectorAll("g#markers > path")
    markers.forEach((marker) => {
        const name = marker.getAttribute('data-name');
        onClick = () => {
            // fill country with new color
            const country = document.querySelector(`g#countries > *[data-name="${name}"]`);
            country.style.fill = COLORS.FOCUS;
        }
        marker.onClick = onClick;
        marker.onclick = onClick;
    })
}


