
$('button').addClass('btn btn-info');

$('#add-header').click(function () {
    var headerList = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    var headerIndex = Math.floor(Math.random() * 6);
    var headerNumber = headerIndex + 1;
    $('.header-html').text(`<${headerList[headerIndex]}>Header ${headerNumber}</${headerList[headerIndex]}>`)
    $('.header-content').html(`<${headerList[headerIndex]}>Header ${headerNumber}</${headerList[headerIndex]}>`);
});
$('#add-paragraph').click(function () {
    $('.paragraph-html').text(`<p>This is a paragraph</p>`)
    $('.paragraph-content').html(`<p>This is a paragraph</p`)
});


$('#img-tag').click(function () {
    var imageSrc = 'https://picsum.photos/200/300'
    $('.self-closing-tags-html').text(`<img src=${imageSrc} alt = 'dynamic-image`)
    $('.self-closing-tags-content').html(`<img src=${imageSrc} alt = 'dynamic-image' >`)
});
$('#input-tag').click(function () {
    $('.self-closing-tags-html').text(`<input type ='button' value = 'Button' >`)
    $('.self-closing-tags-content').html(`<input type ='button' value = 'Button' class ='btn btn-info'  {
        constructor(parameters) {
            
        }
    }>`)
});