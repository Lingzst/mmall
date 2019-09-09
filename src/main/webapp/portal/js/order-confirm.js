webpackJsonp([3],{0:function(e,t,r){e.exports=r(65)},2:function(e,t,r){"use strict";var s=r(1),i={login:function(e,t,r){s.request({url:s.getServerUrl("/user/login.do"),data:e,method:"POST",success:t,error:r})},checkUsername:function(e,t,r){s.request({url:s.getServerUrl("/user/check_valid.do"),data:{type:"username",str:e},method:"POST",success:t,error:r})},register:function(e,t,r){s.request({url:s.getServerUrl("/user/register.do"),data:e,method:"POST",success:t,error:r})},checkLogin:function(e,t){s.request({url:s.getServerUrl("/user/get_user_info.do"),method:"POST",success:e,error:t})},getQuestion:function(e,t,r){s.request({url:s.getServerUrl("/user/forget_get_question.do"),data:{username:e},method:"POST",success:t,error:r})},checkAnswer:function(e,t,r){s.request({url:s.getServerUrl("/user/forget_check_answer.do"),data:e,method:"POST",success:t,error:r})},resetPassword:function(e,t,r){s.request({url:s.getServerUrl("/user/forget_reset_password.do"),data:e,method:"POST",success:t,error:r})},getUserInfo:function(e,t){s.request({url:s.getServerUrl("/user/get_information.do"),method:"POST",success:e,error:t})},updateUserInfo:function(e,t,r){s.request({url:s.getServerUrl("/user/update_information.do"),data:e,method:"POST",success:t,error:r})},updatePassword:function(e,t,r){s.request({url:s.getServerUrl("/user/reset_password.do"),data:e,method:"POST",success:t,error:r})},logout:function(e,t){s.request({url:s.getServerUrl("/user/logout.do"),method:"POST",success:e,error:t})}};e.exports=i},3:function(e,t,r){"use strict";var s=r(1),i={getCartCount:function(e,t){s.request({url:s.getServerUrl("/cart/get_cart_product_count.do"),success:e,error:t})},addToCart:function(e,t,r){s.request({url:s.getServerUrl("/cart/add.do"),data:e,success:t,error:r})},getCartList:function(e,t){s.request({url:s.getServerUrl("/cart/list.do"),success:e,error:t})},selectProduct:function(e,t,r){s.request({url:s.getServerUrl("/cart/select.do"),data:{productId:e},success:t,error:r})},unselectProduct:function(e,t,r){s.request({url:s.getServerUrl("/cart/un_select.do"),data:{productId:e},success:t,error:r})},selectAllProduct:function(e,t){s.request({url:s.getServerUrl("/cart/select_all.do"),success:e,error:t})},unselectAllProduct:function(e,t){s.request({url:s.getServerUrl("/cart/un_select_all.do"),success:e,error:t})},updateProduct:function(e,t,r){s.request({url:s.getServerUrl("/cart/update.do"),data:e,success:t,error:r})},deleteProduct:function(e,t,r){s.request({url:s.getServerUrl("/cart/delete_product.do"),data:{productIds:e},success:t,error:r})}};e.exports=i},4:function(e,t,r){"use strict";r(6);var s=r(1),i=r(2),o=r(3),c={init:function(){return this.bindEvent(),this.loadUserInfo(),this.loadCartCount(),this},bindEvent:function(){$(".js-login").click(function(){s.doLogin()}),$(".js-register").click(function(){window.location.href="./user-register.html"}),$(".js-logout").click(function(){i.logout(function(e){window.location.reload()},function(e){s.errorTips(e)})})},loadUserInfo:function(){i.checkLogin(function(e){$(".user.not-login").hide().siblings(".user.login").show().find(".username").text(e.username)},function(e){console.log(e)})},loadCartCount:function(){o.getCartCount(function(e){$(".nav .cart-count").text(e||0)},function(e){$(".nav .cart-count").text(0)})}};e.exports=c.init()},5:function(e,t){},6:function(e,t){},7:function(e,t,r){"use strict";r(5);var s=r(1),i={init:function(){this.onLoad(),this.bindEvent()},onLoad:function(){var e=s.getUrlParam("keyword");e&&$("#search-input").val(e)},bindEvent:function(){var e=this;$("#search-btn").click(function(){e.searchSubmit()}),$("#search-input").keyup(function(t){13===t.keyCode&&e.searchSubmit()})},searchSubmit:function(){var e=$.trim($("#search-input").val());e?window.location.href="./list.html?keyword="+e:s.goHome()}};i.init()},13:function(e,t,r){"use strict";var s=r(1),i={getProductList:function(e,t){s.request({url:s.getServerUrl("/order/get_order_cart_product.do"),success:e,error:t})},createOrder:function(e,t,r){s.request({url:s.getServerUrl("/order/create.do"),data:e,success:t,error:r})},getOrderList:function(e,t,r){s.request({url:s.getServerUrl("/order/list.do"),data:e,success:t,error:r})},getOrderDetail:function(e,t,r){s.request({url:s.getServerUrl("/order/detail.do"),data:{orderNo:e},success:t,error:r})},cancelOrder:function(e,t,r){s.request({url:s.getServerUrl("/order/cancel.do"),data:{orderNo:e},success:t,error:r})}};e.exports=i},18:function(e,t,r){"use strict";var s=r(1),i={getAddressList:function(e,t){s.request({url:s.getServerUrl("/shipping/list.do"),data:{pageSize:50},success:e,error:t})},save:function(e,t,r){s.request({url:s.getServerUrl("/shipping/add.do"),data:e,success:t,error:r})},update:function(e,t,r){s.request({url:s.getServerUrl("/shipping/update.do"),data:e,success:t,error:r})},deleteAddress:function(e,t,r){s.request({url:s.getServerUrl("/shipping/del.do"),data:{shippingId:e},success:t,error:r})},getAddress:function(e,t,r){s.request({url:s.getServerUrl("/shipping/select.do"),data:{shippingId:e},success:t,error:r})}};e.exports=i},26:function(e,t){},45:function(e,t){e.exports='{{#list}} {{#isActive}} <div class="address-item active" data-id="{{id}}"> {{/isActive}} {{^isActive}} <div class="address-item" data-id="{{id}}"> {{/isActive}} <div class="address-title"> {{receiverCity}} {{receiverProvince}} ( {{receiverName}} 收 ) </div> <div class="address-detail"> {{receiverAddress}} {{receiverPhone}} </div> <div class="address-opera"> <span class="link address-update">编辑</span> <span class="link address-delete">删除</span> </div> </div> {{/list}} <div class="address-add"> <div class="address-new"> <i class="fa fa-plus"></i> <div class="text">使用新地址</div> </div> </div></div>'},46:function(e,t){e.exports='<div class="modal close"> <div class="modal-container"> <div class="modal-header"> {{#isUpdate}} <h1 class="modal-title">更新地址</h1> {{/isUpdate}} {{^isUpdate}} <h1 class="modal-title">使用新地址</h1> {{/isUpdate}} <i class="fa fa-close close"></i> </div> <div class="modal-body"> <div class="form"> <div class="form-line"> <label class="label" for="receiver-name"><span class="required">*</span>收件人姓名：</label> <input class="form-item" id="receiver-name" type="text" placeholder="请输入收件人姓名" value="{{data.receiverName}}"> </div> <div class="form-line"> <label class="label" for="receiver-province"><span class="required">*</span>所在城市：</label> <select class="form-item" id="receiver-province"> <option value="">请选择</option> </select> <select class="form-item" id="receiver-city"> <option value="">请选择</option> </select> </div> <div class="form-line"> <label class="label" for="receiver-address"><span class="required">*</span>详细地址：</label> <input class="form-item" id="receiver-address" type="text" placeholder="请输入精确到门牌号" value="{{data.receiverAddress}}"> </div> <div class="form-line"> <label class="label" for="receiver-phone"><span class="required">*</span>收件人手机：</label> <input class="form-item" id="receiver-phone" type="text" placeholder="请输入11位手机号码" value="{{data.receiverPhone}}"> </div> <div class="form-line"> <label class="label" for="receiver-zip">邮政编码：</label> <input class="form-item" id="receiver-zip" type="text" placeholder="如：10000" value="{{data.receiverZip}}"> </div> <div class="form-line"> <input type="hidden" id="receiver-id" value="{{data.id}}"> <a class="btn address-btn">保存收获地址</a> </div> </div> </div> </div> </div>'},47:function(e,t){e.exports='<table class="product-table"> <tr> <th class="cell-img">&nbsp;</th> <th class="cell-info">商品描述</th> <th class="cell-price">价格</th> <th class="cell-count">数量</th> <th class="cell-total">小计</th> </tr> {{#orderItemVoList}} <tr> <td class="cell-img"> <a href="./detail.html?productId={{productId}}" target="_blank"> <img class="p-img" src="{{imageHost}}{{productImage}}" alt="{{productName}}"> </a> </td> <td class="cell-info"> <a href="./detail.html?productId={{productId}}" target="_blank" class="link">{{productName}}</a> </td> <td class="cell-price">￥{{currentUnitPrice}}</td> <td class="cell-count">{{quantity}}</td> <td class="cell-total">￥{{totalPrice}}</td> </tr> {{/orderItemVoList}} </table> <div class="submit-con"> <span>订单总价：</span> <span class="submit-total">￥{{productTotalPrice}}</span> <span class="btn order-submit">提交订单</span> </div>'},64:function(e,t,r){"use strict";var s=r(1),i=r(77),o=r(18),c=r(46),a={show:function(e){this.option=e,this.option.data=e.data||{},this.$modalWrap=$(".modal-wrap"),this.loadModal(),this.bindEvent()},bindEvent:function(){var e=this;this.$modalWrap.find("#receiver-province").change(function(){var t=$(this).val();e.loadCities(t)}),this.$modalWrap.find(".address-btn").click(function(){var t=e.getReceiverInfo(),r=e.option.isUpdate;!r&&t.status?o.save(t.data,function(t){s.successTips("地址添加成功"),e.hide(),"function"==typeof e.option.onSuccess&&e.option.onSuccess(t)},function(e){s.errorTips(e)}):r&&t.status?o.update(t.data,function(t){s.successTips("地址修改成功"),e.hide(),"function"==typeof e.option.onSuccess&&e.option.onSuccess(t)},function(e){s.errorTips(e)}):s.errorTips(t.errMsg||"好像哪里不对了")}),this.$modalWrap.find(".modal-container").click(function(e){e.stopPropagation()}),this.$modalWrap.find(".close").click(function(){e.hide()})},loadModal:function(){var e=s.renderHtml(c,{isUpdate:this.option.isUpdate,data:this.option.data});this.$modalWrap.html(e),this.loadProvince()},loadProvince:function(){var e=i.getProvinces()||[],t=this.$modalWrap.find("#receiver-province");t.html(this.getSelectOption(e)),this.option.isUpdate&&this.option.data.receiverProvince&&(t.val(this.option.data.receiverProvince),this.loadCities(this.option.data.receiverProvince))},loadCities:function(e){var t=i.getCities(e)||[],r=this.$modalWrap.find("#receiver-city");r.html(this.getSelectOption(t)),this.option.isUpdate&&this.option.data.receiverCity&&r.val(this.option.data.receiverCity)},getReceiverInfo:function(){var e={},t={status:!1};return e.receiverName=$.trim(this.$modalWrap.find("#receiver-name").val()),e.receiverProvince=this.$modalWrap.find("#receiver-province").val(),e.receiverCity=this.$modalWrap.find("#receiver-city").val(),e.receiverAddress=$.trim(this.$modalWrap.find("#receiver-address").val()),e.receiverPhone=$.trim(this.$modalWrap.find("#receiver-phone").val()),e.receiverZip=$.trim(this.$modalWrap.find("#receiver-zip").val()),this.option.isUpdate&&(e.id=this.$modalWrap.find("#receiver-id").val()),e.receiverName?e.receiverProvince?e.receiverCity?e.receiverAddress?e.receiverPhone?(t.status=!0,t.data=e):t.errMsg="请输入收件人手机号码":t.errMsg="请输入收件人所在的详细地址":t.errMsg="请输入收件人所在城市":t.errMsg="请输入收件人所在省份":t.errMsg="请输入收件人姓名",t},getSelectOption:function(e){for(var t='<option value="">请选择</option>',r=0,s=e.length;r<s;r++)t+='<option value="'+e[r]+'">'+e[r]+"</option>";return t},hide:function(){this.$modalWrap.empty()}};e.exports=a},65:function(e,t,r){"use strict";r(26),r(7),r(4);var s=(r(4),r(64)),i=r(1),o=r(13),c=r(18),a=r(47),d=r(45),n={data:{selectedAddressId:null},init:function(){this.onLoad(),this.bindEvent()},onLoad:function(){this.loadAddressList(),this.loadProductList()},bindEvent:function(){var e=this;$(document).on("click",".address-item",function(){$(this).addClass("active").siblings(".address-item").removeClass("active"),e.data.selectedAddressId=$(this).data("id")}),$(document).on("click",".order-submit",function(){var t=e.data.selectedAddressId;t?o.createOrder({shippingId:t},function(e){window.location.href="./payment.html?orderNumber="+e.orderNo},function(e){i.errorTips(e)}):i.errorTips("请选择地址后再提交")}),$(document).on("click",".address-add",function(){s.show({isUpdate:!1,onSuccess:function(){e.loadAddressList()}})}),$(document).on("click",".address-update",function(t){var r=$(this).parents(".address-item").data("id");t.stopPropagation(),c.getAddress(r,function(t){s.show({isUpdate:!0,data:t,onSuccess:function(){e.loadAddressList()}})},function(e){i.errorTips(e)})}),$(document).on("click",".address-delete",function(t){var r=$(this).parents(".address-item").data("id");t.stopPropagation(),window.confirm("确认要删除该地址吗？")&&c.deleteAddress(r,function(t){e.loadAddressList()},function(e){i.errorTips(e)})})},loadAddressList:function(){var e=this;$(".address-con").html('<div class="loading"></div>'),c.getAddressList(function(t){e.addressFilter(t);var r=i.renderHtml(d,t);$(".address-con").html(r)},function(e){$(".address-con").html('<p class="err-tip">地址加载失败！请刷新后重试</p>')})},addressFilter:function(e){if(this.data.selectedAddressId){for(var t=!1,r=0,s=e.list.length;r<s;r++)e.list[r].id===this.data.selectedAddressId&&(e.list[r].isActive=!0,t=!0);t||(this.data.selectedAddressId=null)}},loadProductList:function(){$(".product-con").html('<div class="loading"></div>'),o.getProductList(function(e){var t=i.renderHtml(a,e);$(".product-con").html(t)},function(e){$(".product-con").html('<p class="err-tip">商品信息加载失败！请刷新后重试</p>')})}};$(function(){n.init()})},77:function(e,t){"use strict";var r={cityInfo:{"北京市":["北京市"],"天津市":["天津市"],"河北省":["石家庄市","唐山市","秦皇岛市","邯郸市","邢台市","保定市","张家口市","承德市","沧州市","廊坊市","衡水市","定州市","辛集市"],"山西省":["太原市","大同市","阳泉市","长治市","晋城市","朔州市","晋中市","运城市","忻州市","临汾市","吕梁市"],"内蒙古自治区":["呼和浩特市","包头市","乌海市","赤峰市","通辽市","鄂尔多斯市","呼伦贝尔市","巴彦淖尔市","乌兰察布市","兴安盟","锡林郭勒盟","阿拉善盟"],"辽宁省":["沈阳市","大连市","鞍山市","抚顺市","本溪市","丹东市","锦州市","营口市","阜新市","辽阳市","盘锦市","铁岭市","朝阳市","葫芦岛市"],"吉林省":["长春市","吉林市","四平市","辽源市","通化市","白山市","松原市","白城市","延边朝鲜族自治州"],"黑龙江省":["哈尔滨市","齐齐哈尔市","鸡西市","鹤岗市","双鸭山市","大庆市","伊春市","佳木斯市","七台河市","牡丹江市","黑河市","绥化市","大兴安岭地区"],"上海市":["上海市"],"江苏省":["南京市","无锡市","徐州市","常州市","苏州市","南通市","连云港市","淮安市","盐城市","扬州市","镇江市","泰州市","宿迁市"],"浙江省":["杭州市","宁波市","温州市","嘉兴市","湖州市","绍兴市","金华市","衢州市","舟山市","台州市","丽水市"],"安徽省":["合肥市","芜湖市","蚌埠市","淮南市","马鞍山市","淮北市","铜陵市","安庆市","黄山市","滁州市","阜阳市","宿州市","六安市","亳州市","池州市","宣城市"],"福建省":["福州市","厦门市","莆田市","三明市","泉州市","漳州市","南平市","龙岩市","宁德市"],"江西省":["南昌市","景德镇市","萍乡市","九江市","新余市","鹰潭市","赣州市","吉安市","宜春市","抚州市","上饶市"],"山东省":["济南市","青岛市","淄博市","枣庄市","东营市","烟台市","潍坊市","济宁市","泰安市","威海市","日照市","莱芜市","临沂市","德州市","聊城市","滨州市","菏泽市"],"河南省":["郑州市","开封市","洛阳市","平顶山市","安阳市","鹤壁市","新乡市","焦作市","濮阳市","许昌市","漯河市","三门峡市","南阳市","商丘市","信阳市","周口市","驻马店市","济源市"],"湖北省":["武汉市","黄石市","十堰市","宜昌市","襄阳市","鄂州市","荆门市","孝感市","荆州市","黄冈市","咸宁市","随州市","恩施土家族苗族自治州","仙桃市","潜江市","天门市","神农架林区"],"湖南省":["长沙市","株洲市","湘潭市","衡阳市","邵阳市","岳阳市","常德市","张家界市","益阳市","郴州市","永州市","怀化市","娄底市","湘西土家族苗族自治州"],"广东省":["广州市","韶关市","深圳市","珠海市","汕头市","佛山市","江门市","湛江市","茂名市","肇庆市","惠州市","梅州市","汕尾市","河源市","阳江市","清远市","东莞市","中山市","潮州市","揭阳市","云浮市"],"广西壮族自治区":["南宁市","柳州市","桂林市","梧州市","北海市","防城港市","钦州市","贵港市","玉林市","百色市","贺州市","河池市","来宾市","崇左市"],"海南省":["海口市","三亚市","三沙市","儋州市","五指山市","琼海市","文昌市","万宁市","东方市","定安县","屯昌县","澄迈县","临高县","白沙黎族自治县","昌江黎族自治县","乐东黎族自治县","陵水黎族自治县","保亭黎族苗族自治县","琼中黎族苗族自治县"],"重庆市":["重庆市"],"四川省":["成都市","自贡市","攀枝花市","泸州市","德阳市","绵阳市","广元市","遂宁市","内江市","乐山市","南充市","眉山市","宜宾市","广安市","达州市","雅安市","巴中市","资阳市","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州"],"贵州省":["贵阳市","六盘水市","遵义市","安顺市","毕节市","铜仁市","黔西南布依族苗族自治州","黔东南苗族侗族自治州","黔南布依族苗族自治州"],"云南省":["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","普洱市","临沧市","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州","大理白族自治州","德宏傣族景颇族自治州","怒江傈僳族自治州","迪庆藏族自治州"],"西藏自治区":["拉萨市","日喀则市","昌都市","林芝市","山南市","那曲地区","阿里地区"],"陕西省":["西安市","铜川市","宝鸡市","咸阳市","渭南市","延安市","汉中市","榆林市","安康市","商洛市"],"甘肃省":["兰州市","嘉峪关市","金昌市","白银市","天水市","武威市","张掖市","平凉市","酒泉市","庆阳市","定西市","陇南市","临夏回族自治州","甘南藏族自治州"],"青海省":["西宁市","海东市","海北藏族自治州","黄南藏族自治州","海南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州"],"宁夏回族自治区":["银川市","石嘴山市","吴忠市","固原市","中卫市"],"新疆维吾尔自治区":["乌鲁木齐市","克拉玛依市","吐鲁番市","哈密市","昌吉回族自治州","博尔塔拉蒙古自治州","巴音郭楞蒙古自治州","阿克苏地区","克孜勒苏柯尔克孜自治州","喀什地区","和田地区","伊犁哈萨克自治州","塔城地区","阿勒泰地区","石河子市","阿拉尔市","图木舒克市","五家渠市","铁门关市"],"台湾省":["台北","台南","其他"],"香港特别行政区":["香港"],"澳门特别行政区":["澳门"]},getProvinces:function(){var e=[];for(var t in this.cityInfo)e.push(t);return e},getCities:function(e){return this.cityInfo[e]||[]}};e.exports=r}});