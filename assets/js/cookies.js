if (typeof Cookies.get('cookies-accept') === 'undefined') {
    $('#cook').css('display', 'flex');
}

$('#cookies-accept').click(function () {
    Cookies.set('cookies-accept', true);
    location.reload();
});