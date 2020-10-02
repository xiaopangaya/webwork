$(function (){
    addtable()
    $(".checkAll").click(function (){
        var ischecked=$(this).prop("checked")
        $(".maintab input[type='checkbox']").prop("checked",ischecked)
        $(".checkAll").prop("checked",ischecked)

        allthemoney()
    })
})
function addtable(){
    for (var i=0;i<10;i++){
        var tr=$("<tr></tr>")    //创建行
        var td1=$("<td><input type='checkbox' onclick='allthemoney()'><img src='./img/apple1.png'></td>")
        var td2=$("<td><p>苹果又脆又甜&nbsp很好吃的&nbsp快来尝一尝&nbsp快点快点</p></td>")
        var td3=$("<td><table class='kind'>" +
                        "<tr>" +
                            "<td class='kind'>规格:</td><td class='kind'>默认</td>" +
                        "</tr>" +
                        "<tr>" +
                            "<td class='kind'>尺寸:</td><td class='kind'>默认</td>" +
                        "</tr>" +
                    "</table>" +
                "</td>")
        var td4=$("<td>980￥</td>")
        var td5=$("<td></td>")
        var td6=$("<td>980￥</td>")
        var td7=$("<td></td>")
        var a=$("<a href='#' class='removet'>移除商品</a>")
        var number=$("<input type='number' name='age' id='age' step='1' min='0' value='1'>")
        td5.append(number)
        td7.append(a)
        tr.append(td1).append(td2).append(td3).append(td4).append(td5).append(td6).append(td7)
        var tbody=$("#maintbody")
        tbody.append(tr)

        a.click(function (){
            var thetr=$(this).parent().parent();
            thetr.remove()

            allthemoney()
        })

        number.change(function (){
            var child=$(this).parent().parent().children()
            var td11=child.eq(3)
            var td12=child.eq(4).find("input")
            var money=td11.text();
            money=money.substring(0,money.length-1)
            var number=td12.val();
            var finalmoney=money*number;
            var finalm=child.eq(5)
            finalm.text(finalmoney+"￥")

            allthemoney()
        })
    }
}
function allthemoney(){
    var checkeds=$("#maintbody :checked")
    var allmoney=0
    var count=0
    $.each(checkeds,function (i,n){
        n=$(n)
        var children=n.parents("tr").children();
        var td21=children.eq(5)
        var td22=children.eq(4).find("input")
        var num=td22.val()
        var finmoney=td21.text()
        finmoney=finmoney.substring(0,finmoney.length-1)
        allmoney=allmoney+finmoney*1
        count=count+num*1
    })
    $("#allcount").text(count)
    $("#finalpay").text(allmoney)

    turnred()
}
function removeclicked(){
    var checkeds=$("#maintbody :checked")
    $.each(checkeds,function (i,n){
        n=$(n)
        var parent=n.parents("tr")
        parent.remove()
    })

    allthemoney()
    turnred()
}
function turnred(){
    var checkeds=$("#maintbody :checked")
    var count=0
    $.each(checkeds,function (i,n){
        count=count+1;
    })
    if (count>0){
        $("#paytd").css("background","orangered")
    }else {
        $("#paytd").css("background","grey")
    }
}