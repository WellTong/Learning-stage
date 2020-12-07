/**
 * 
 * @param {String} method 请求方式
 * @param {String} url    请求地址
 * @param {String} data   请求数据  key=value&key1=value1
 * @param {Function} cb     成功的回调函数
 * @param {Boolean} isAsync 是否异步 true
 */
function ajax(method, url, data, cb, isAsync) {
    // get   url + '?' + data
    // post 
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    // xhr.readyState    1 - 4  监听是否有响应
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4) {
            if (xhr.status == 200) {
                cb(JSON.parse(xhr.responseText))
            }
        }
    }

    if (method == 'GET') {
        xhr.open(method, url + '?' + data, isAsync);
        xhr.send();
    } else if (method == 'POST') {
        xhr.open(method, url, isAsync);
        // key=value&key1=valu1
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }


}  


var tableData = [];
var nowPage = 1;
var pageSize = 5;
var allPage = 1;
function getSiblings(node){
    var allChildren = node.parentNode.children;
    var arr = [];
    for (var i = 0; i < allChildren.length; i++) {
        if(allChildren[i] != node){
            arr.push(allChildren[i]);
        } 
    }
    return arr;
}
function bindEvent(){


    //navigation event
    var menu = document.querySelector('.menu');
    menu.onclick = function(e){
        //判断事件源是什么
        if(e.target.tagName === 'DD'){
            var id = e.target.dataset.id;
            var content = document.getElementById(id);
        //change navigation style
            e.target.classList.add('active');
            var targetSiblings = getSiblings(e.target);
            for (let i = 0; i < targetSiblings.length; i++) {
                targetSiblings[i].classList.remove('active');
            }
        //change right-content's content
            content.style.display = 'block';
            var contentSiblings = getSiblings(content);
            for (let i = 0; i < contentSiblings.length; i++) {
                contentSiblings[i].style.display ='none';
            }
        }
    }



    //student-list btn
    var tBody = document.getElementById('tBody');
    var modal = document.querySelector('.modal');
    tBody.onclick = function(e){
        // alert interface of edit student's imformation
        var pageIndex = getNodeIndex(e.target);

        var index = (nowPage - 1)* pageSize + pageIndex;
        if(e.target.classList.contains('edit')){
            modal.style.display = 'block';
            randerEditForm(tableData[index]);
        } else if(e.target.classList.contains('remove')){ 
            var isDel = confirm('确认删除学号为' + tableData[index].sNo + '的学生信息？');
            if(isDel) {
                transferData('GET','/api/student/delBySno', {
                    sNo: tableData[index].sNo
                    },function(res){
                        alert('删除成功');
                        getTableData();
                    })
            }
        }
    }
    modal.onclick = function(e){
        if(e.target === this){
            this.style.display = 'none';
        }
    }



    //edit student's imformation
    var editStudentBtn = document.getElementById('edit-student-btn')
    editStudentBtn.onclick = function(e){
        e.preventDefault();
        var studentEditForm = document.getElementById('edit-student-form')
        var result = getFormData(studentEditForm);
        if(result.status === 'success'){
            transferData('GET', '/api/student/updateStudent', result.data, function(res){
                alert('修改成功');
                modal.style.display = 'none';
                getTableData();
            })
        }else{
            alert(result.msg);
        }
    }

    //add student's imformation
    var studentAddBtn = document.getElementById('add-student-btn');
    studentAddBtn.onclick = function(e){
        e.preventDefault();
        var studentAddForm = document.getElementById('add-student-form');
        var result = getFormData(studentAddForm);
        if(result.status === 'fail'){
            alert(result.msg);
            return;
        }
        transferData('GET', '/api/student/addStudent', result.data, function(){
            alert('添加成功');
            location.reload();
        })
    }

    //翻页
    var turnPage = document.querySelector('.turn-page');
    turnPage.onclick = function (e) {
        if(e.target.classList.contains('prev-btn')){
            nowPage --;
            var data = tableData.filter(function(item, index){
                return index >= (nowPage - 1) * pageSize && index < nowPage * pageSize;
            })
            randerTable(data);
        }else if(e.target.classList.contains('next-btn')){
            nowPage ++;
            var data = tableData.filter(function(item, index){
                return index >= (nowPage - 1) * pageSize && index < nowPage * pageSize;
            })
            randerTable(data);
        }
    }
    
}
bindEvent();



/**
 * 
 *  通过数据让内容区显示学生信息
 */
function randerTable(data){
    var str = '';
    var tBody = document.getElementById('tBody');
    data.forEach(function(item){
        str += `<tr>
        <td>${item.sNo}</td>
        <td>${item.name}</td>
        <td>${item.sex == 0? '男': '女'}</td>
        <td>${item.email}</td>
        <td>${new Date().getFullYear() - item.birth}</td>
        <td>${item.phone}</td>
        <td>${item.address}</td>
        <td>
            <button class="edit btn">编辑</button>
            <button class="remove btn">删除</button>
        </td>
    </tr>`
    });
    tBody.innerHTML = str;
    var prevBtn = document.querySelector('.prev-btn');
    var nextBtn = document.querySelector('.next-btn');
    if(nowPage > 1){
        prevBtn.style.display = 'inline-block'
    }else{
        prevBtn.style.display = 'none';
    }

    if(nowPage < allPage){
        nextBtn.style.display = 'inline-block'
    }else{
        nextBtn.style.display = 'none';
    }
}


/**
 * 获取数据
 */
getTableData();
function getTableData(){
    transferData('GET', '/api/student/findAll', '',function(response){
        tableData = response.data;
        allPage = Math.ceil(tableData.length / pageSize);
        var data = tableData.filter(function (item, index){
            return index >= (nowPage - 1) * pageSize && index < nowPage * pageSize;
        });
        randerTable(data);
    })
}

/**
 * 获取当前列表点击位置索引
 * @param {*} node 
 */
function getNodeIndex(node){
    var trNode = node.parentNode;

    while(trNode && trNode.tagName !=='TR'){
        trNode = trNode.parentNode;
    }
    if(!trNode){
        alert('没有找到当前按钮对应的tr父节点')
        return false;
    }
    var trNodeSiblings = trNode.parentNode.children;
    for(var i = 0; i < trNodeSiblings.length; i ++){
        if(trNodeSiblings[i] === trNode){
            return i;
        }
    }
}


/**
 * @param {*} method 交互方式 get post
 * @param {*} path API路径 
 * @param {*} data 数据
 * @param {*} cb 回调函数
 */
function transferData(method, path, data, cb){
    var strData = "";
    if(typeof data === 'object'){
        for(var prop in data){
            strData += prop + '=' + data[prop] + '&';
        }
        strData = strData.slice(data.length - 1);
    }else{
        strData = data;
    }
    strData += '&appkey=Imdream_1596374783635';
    ajax(method, 'http://open.duyiedu.com' + path, strData, function (respanse){
        if(respanse.status === 'success'){
            cb(respanse)
        }else {
            alert(respanse.msg);
        }
    }, true)
}

/**
 * 获取add表单数据
 * @param {*} form 
 */
function getFormData(form){
    var name = form.name.value;
    var sex = form.sex.value;
    var email = form.email.value;
    var sNo = form.sNo.value;
    var birth = form.birth.value;
    var phone = form.phone.value;
    var address = form.address.value;
    var result = {
        data:{},
        msg:'',
        status: 'success'
    }
    if(!name || !sex || !email || !sNo || !birth || !phone || !address){
        result.msg = '请填写完全';
        result.status = 'fail';
        return result;
    }
    var emailReg = /^[\w.]+@[\w.]+\.(com|cn|net)$/
    if(!email.match(emailReg)){
        result.status = 'fail';
        result.msg = '邮箱格式不正确';
        return result;
    }
    var sNoReg = /^\d{4,16}$/
    if(!sNo.match(sNoReg)){
        result.status = 'fail';
        result.msg = '学号必须为4-16位数字'
        return result;
    }
    if(birth <= 1900 || birth >= new Date().getFullYear()){
        result.status = 'fail';
        result.msg = '请确认年龄合理性';
        return result;
    }
    var phoneReg = /^1[345678]\d{9}$/;
    if(!phone.match(phoneReg)){
        result.status = 'fail';
        result.msg = '手机号有误';
        return result;
    }
    result.data = {
        name,
        sex,
        sNo,
        phone,
        email,
        birth,
        address
    }
    return result;
}

/**
 * 渲染编辑表单
 */
function randerEditForm(data){
    var form = document.getElementById('edit-student-form');
    for(var prop in data){
        if(form[prop]){
            form[prop].value = data[prop];
        }
    }
}

