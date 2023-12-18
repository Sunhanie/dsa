$(document).ready(function () {
    $("h1").text("Chiếc Tiệm Mộng Mơ");
    $("img").attr({ src: "TiemMongMo.jpg", alt: "Tiệm Mộng Mơ" });
    $(".contact-form input:first").attr({
        type: "text",
        placeholder: "Tài Khoản",
    });
    $(".contact-form input:last").attr({
        type: "password",
        placeholder: "Mật Khẩu",
    });
    $(".contact-form button").text("Đăng Nhập");
    $(".intro").text("Cảm ơn bạn đã ghé qua cửa hàng!");
    $("body").css({
        "font-family": "Arial, sans-serif",
        margin: "0",
        padding: "0",
        "background-color": "pink",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        height: "100vh",
    });
    $(".container").css({
        "text-align": "center",
        "background-color": "#fff",
        padding: "30px",
        "border-radius": "10px",
        "box-shadow": "0px 0px 20px 0px rgba(0, 0, 0, 0.1)",
        width: "700px",
        height: "500px",
        position: "relative",
    });
    $("h1").css({
        color: "#f582ae",
        "font-size": "36px",
        position: "absolute",
        top: "30px",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "font-family": "'Satisfy', cursive",
    });
    $(".wrap").css({
        "margin-top": "80px",
    });
    $(".grow img").css({
        width: "200px",
        "border-radius": "50%",
        "margin-bottom": "20px",
        transition: "1s ease",
    });
    $("grow img:hover").css({
        transform: "scale(1.2)",
        transition: "1s ease",
        "-webkit-transform": "scale(1.2)",
        "-ms-transform": "scale(1.2)",
    });

    $(".intro").css({
        "font-size": "30px",
        color: "#333",
        "margin-bottom": "3px",
        "font-family": "'Dancing Script', cursive",
        "font-weight": "bold",
    });
    $(".contact-form input").css({
        width: "100%",
        padding: "10px",
        "margin-bottom": "10px",
        border: "1px solid #ccc",
        "border-radius": "5px",
    });
    $(".contact-form button").css({
        padding: "10px 20px",
        "background-color": "#FFB6C1",
        transition: "background-color 2s ease-out 1000ms",
        border: "none",
        "border-radius": "5px",
        cursor: "pointer",
        color: "white",
    });
    $(".contact-form button:hover").css({
        "background-color": "#FF1493",
    });
    $("button").click(function () {
        alert("Tặng bạn một bó hoa dễ thương!");
    });
});
