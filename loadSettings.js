if (typeof chrome != "undefined" && typeof chrome.storage != "undefined" && typeof chrome.storage.sync != "undefined") {
    chrome.storage.sync.get(['newtabcolortheme', 'initiallocaltimezones'], function (storedData) {
        document.body.className = storedData.newtabcolortheme === 'dark' ? 'color-dark' : 'color-normal'
        settingsButton = document.getElementById('settings-button');
        settingsButton.className = storedData.newtabcolortheme === 'dark' ? 'color-dark' : 'color-normal'
        if (!(typeof storedData.initiallocaltimezones === "undefined" || storedData.initiallocaltimezones === null)) {
            const localTimeboxContainer = document.getElementById('extra-clocks-table');
            localTimeboxContainer.innerHTML = '';
            storedData.initiallocaltimezones.forEach(timezone => {
                let clock = document.createElement('td');
                clock.id = "clockbox-" + timezone;
                clock.innerText = "00:00:00"

                let label = document.createElement('td');
                label.innerText = timezone === "UTC/GMT" ? timezone : timezone.split('/').reverse()[0].replace("_", " ");
                label.className = "extra-clockbox-label"

                let container = document.createElement("tr")
                container.id = timezone
                container.append(label)
                container.append(clock)
                localTimeboxContainer.append(container)
            })
        }
        document.getElementById("settings-button").style.display = "block";
    });
}