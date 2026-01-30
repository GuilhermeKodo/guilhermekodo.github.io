function doGet() {
return HtmlService.createHtmlOutputFromFile('index')
.setTitle('Portfólio | Guilherme Kodo')
.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}