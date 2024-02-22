'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    var searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', function () {
        var searchQuery = searchInput.value.toLowerCase();
        var apartmentCards = document.querySelectorAll('.card');

        apartmentCards.forEach(function (card) {
            var cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
            if (cardTitle.includes(searchQuery)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});