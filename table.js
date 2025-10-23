//新增数据函数
function addRow()
{
    let name = document.getElementById("name").value.trim();
    let score = document.getElementById("score").value.trim();
    let major = document.getElementById("major").value.trim();

    if(!name || !score || !major){
        alert("请填写完整信息！");
        return;
    }

    let table = document.getElementById("table").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();

    //插入前三列
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = score;
    newRow.insertCell(2).innerText = major;

    //插入操作列
    let actionCell = newRow.insertCell(3);
    actionCell.innerHTML = ` <button class = "edit"  onclick="editRow(this)">编辑</button>
    <button class="delete" onclick="deleteRow(this)">删除</button>
    `;

    //清空输入框
    document.getElementById("name").value = "";
    document.getElementById("score").value = "";
    document.getElementById("major").value = "";
}

function deleteRow(btn){
    if (confirm("确定删除这条记录吗？")){
        let row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row)

    }
}

function editRow(btn){
    let row = btn.parentNode.parentNode;
    let cells = row.getElementsByTagName("td");

    if(btn.innerText === "编辑"){
        for(let i = 0; i < 3; i++){
            let input = document.createElement("input");
            input.value = cells[i].innerText;
            cells[i].innerText = "";
            cells[i].appendChild(input);
            
        }
        btn.innerText = "保存";
        btn.className = "save";
    }else{
        for(let i = 0; i < 3; i++)
        {
            cells[i].innerText = cells[i].getElementsByTagName("input")[0].value;

        }
        btn.innerText = "编辑";
        btn.className = "edit";
    }
}