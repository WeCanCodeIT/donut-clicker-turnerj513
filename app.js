let donutCount = 0;

        const donutImage = document.getElementById('donutImage');
        const donutCountElement = document.getElementById('donutCount');

        donutImage.addEventListener('click', () => {
            donutCount++;
            donutCountElement.textContent = donutCount;
        });