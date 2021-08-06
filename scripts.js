window.addEventListener('load', function() {
    const flightStatus = document.getElementById('flightStatus');
    const takenOffBtn = document.getElementById('takeoff');
    takenOffBtn.addEventListener('click', function() {
        const result = window.confirm(
            "Are you sure the shuttle is ready for takeoff?"
        );
    
        if (result) {
            flightStatus.innerHTML = "<b> Shuttle in flight! </b>"
            shuttleBackground.style.backgroundColor = "blue" 
            spaceShuttleHeight.innerHTML = 10000
        }
    }

    )
});