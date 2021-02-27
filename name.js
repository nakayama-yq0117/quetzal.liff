var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var name = $('input[name="name"]').val();
        var tel = $('input[name="tel"]').val();
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
        var msg = `${key}\nお名前：${name}\nご連絡先：${tel}`;
        sendText(msg);

        return false;
    });
});