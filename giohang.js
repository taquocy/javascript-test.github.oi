const btn = document.querySelectorAll("button")
btn.forEach(function(button,main){
    button.addEventListener("click",function(event){{
        var btnitem = event.target
        var produc =  btnitem.parentElement
        var img = produc.querySelector("img").src
        var ten = produc.querySelector("h1").innerText
        var tien = produc.querySelector("span").innerText
        addcart(img,ten,tien)
    }
    })
})
function addcart(img,ten,tien){
    var addtr = document.createElement("tr")
    var cartitem = document.querySelectorAll("tbody tr")
    for(var i = 0;i<cartitem.length;i++){
        var hang=document.querySelectorAll(".hang")
        if (hang[i].innerHTML==ten){
            alert("sản phẩm này đã có trong giỏ")
            return
        }
    }
    
    var trconten ='<tr><td><img style="display:flex;align-items:center;  width:70px;" src="'+img+'" alt=""><span class = "hang">'+ten+'</span></td><td><p><span class = "tientien">'+tien+'</span>k</p></td><td><input style="width:30px; outline:none; " type="number" value="1" min="0"></td><td style="cursor:pointer;" ><span class = "xoa">xóa</span></td></tr>'
    addtr.innerHTML = trconten
    var carttable = document.querySelector("tbody")
    carttable.append(addtr)
    cartotal()
    dele()
}


function cartotal(){
    var cartitem = document.querySelectorAll("tbody tr")
    var tinhb=0
    for (var i = 0;i<cartitem.length;i++){
        var soluong = cartitem[i].querySelector("input").value
        console.log(soluong)
        var gia = cartitem[i].querySelector(".tientien").innerHTML
        console.log(gia)
        tinha = soluong*gia
        tinhb = tinhb + tinha
        console.log(tinhb)

        
    }
    var tongtien = document.querySelector(".price span")
    tongtien.innerHTML = tinhb
    themsl()
}
function dele(){
        var hang=document.querySelectorAll("tbody tr")
        for (var i=0;i<hang.length;i++){
            var xoa = document.querySelectorAll(".xoa")
            xoa[i].addEventListener("click",function(event){
                var del =event.target
                var item = del.parentElement.parentElement
                console.log(item)
                item.remove()
                cartotal()
            })
        }
        
}
function themsl(){
    var hang=document.querySelectorAll("tbody tr")
     for (var i=0;i<hang.length;i++){
        var them = hang[i].querySelector("input")
        them.addEventListener("change",function(){
             cartotal()
        })
    }
}
const x = document.querySelector(".e")
x.addEventListener("click",function(){
    document.querySelector(".cart").style.width="0"
    document.querySelector(".cart").style.height="0"
    document.querySelector(".cart").style.top="0"
    document.querySelector(".cart").style.left="200%"
})
const xx = document.querySelector(".a")
xx.addEventListener("click",function(){
    document.querySelector(".cart").style.top="30%"
    document.querySelector(".cart").style.left="10%"
    document.querySelector(".cart").style.width="1500px"
    document.querySelector(".cart").style.height="500px"

})
const luu = document.querySelector(".mua")
luu.addEventListener("click",function(event){
    var cartitem = document.querySelectorAll("tbody tr")
    
    var name = document.forms["contactForm"]["name"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    const khach = {
        name: name,
        phone: phone,
    } 
    document.write(khach)
    for (var i = 0;i<cartitem.length;i++){
        var tensp = cartitem[i].querySelector(".hang").innerHTML
        khach.sp[i] = tensp
        var soluong = cartitem[i].querySelector("input").value
        khach.sl[i] = soluong
        var gia = cartitem[i].querySelector(".tientien").innerHTML
        khach.gia[i] = gia
    var tongtien = document.querySelector(".sum").innerHTML
    document.write(khach)

}

})
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    // var fname = document.getElementById("fname").value;
    var phone = document.forms["contactForm"]["phone"].value;

    if (name == null || name == "") {
        alert("ơ bạn quen tên bản thân r à ?");
        return false;
    } else if (phone == null || phone == "") {
        alert("ôi bạn ơi chưa ghi sdt kìa");
        return false;
    }
  alert('đơn hàng đã hoàn thành');
}
const email = document.querySelector(".hot")
    email.addEventListener("click",function(event){{
        alert("chúng tôi sẽ gửi voucher 50% cho bạn")
    }})
function search(){
    let tim = document.getElementById("search").value
}