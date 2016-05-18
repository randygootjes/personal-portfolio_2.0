function moveToAbout() {
    var AboutDiv = document.getElementById("about");
    var AboutDivOffset = AboutDiv.offsetTop;
    var AboutDivPosition = AboutDivOffset - 40;
    window.scrollTo(0, AboutDivPosition);
}

function moveToPortfolio() {
    var PortfolioDiv = document.getElementById("portfolio");
    var PortfolioDivOffset = PortfolioDiv.offsetTop;
    var PortfolioDivPosition = PortfolioDivOffset - 40;
    window.scrollTo(0, PortfolioDivPosition);
}

