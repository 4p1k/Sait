/*Весь не используемый код 




 Прочитывает и выводит json
fetch('api-tort.postman_collection.json')
    .then(response => response.json())
    .then(data => {
        console.table(data.item);
    })
    .catch(error =>{
        console.table(error)
    })

     хз что это
    (nameINP.value,loginINP.value,passwordINP.value,roleINP.value).addEventListener('onchange',() =>{
    console.log(nameINP.value,loginINP.value,passwordINP.value,roleINP.value)
    })


    */

    //Сохраняет страницу при перезагрузке
   //window.addEventListener('beforeunload', function() {
   //    localStorage.setItem('modalVisible', Modal.style.display);
   //  });
   //  
   //  // Загрузка состояния модального окна после перезагрузки
   //  window.addEventListener('DOMContentLoaded', function() {
   //    var modalVisible = localStorage.getItem('modalVisible');
   //  
   //    if (modalVisible === 'none') {
   //      Modal.style.display = 'none';
   //    }
   //  });
    



const nameINP = document.getElementById("name");
const loginINP = document.getElementById("login");
const passwordINP = document.getElementById("password");
const roleINP = document.getElementById("role");
const Modal = document.querySelector('.modal');
const forms = document.querySelectorAll('form');
const aproveBTN = document.querySelector(".approve_button");
const cancelBTN = document.querySelector(".cancel_button");
const employeesLink = document.querySelector(".Empolyees")
const shiftLink = document.querySelector(".Shift")
const ordersLink = document.querySelector(".Orders")
       

const cancelHandler = (event) =>{
    event.preventDefault()
    Modal.style.display = "none";
}

const cancelClickListener = () =>{ 
    cancelBTN.removeEventListener('click', cancelHandler)
}
cancelBTN.addEventListener('click', cancelHandler)

  //Проверка на заполненные поля в месте с кнопкой входа
 aproveBTN.addEventListener('click', (event) => {
   if (nameINP.value === "" || loginINP.value === "" || passwordINP.value === "" || roleINP.value === "nothing") {
       event.preventDefault();
       alert("Вы заполнили не все поля");
   } else {
       LogIsSuc(event);
        // Вызываем функцию, которая удалит прослушиватель
   }
})









//кнопка отмены(1 окна)

// Если нажали кнопку отмена(требование входа) 
function notEnter() {
    const links = document.querySelectorAll("a:not(.approve_button)") 
    links.forEach(function(link){
    link.addEventListener('click', () =>{
        alert("Вы не вошли в аккаунт")
    })
}) 
}

const aproveLink = document.querySelector("a.approve_button");
aproveLink.addEventListener('click', () => {
    tryEnter()
});
///Кнопка отмена  
function Cancel() {
    Modal.style.display = "none";
 }


function tryEnter(){
    const authorizationSec = document.querySelector(".authorization");
    const AddEmploy = document.querySelector(".add_employ");
    if(authorizationSec.style.display == "none" || Modal.style.display == "none"){
        Modal.style.display = "flex"
        AddEmploy.style.display = "none"
        authorizationSec.style.display = "flex"
                
    }if(authorizationSec.style.display == "block" ){
        authorizationSec.style.display = "none";
        Modal.style.display = "none"
        AddEmploy.style.display = "none"
        
    }
    
}


//TO DO ON comment
let adminCalled = false;
function admin() {
    adminCalled = true;
    console.log("admin тщт")
}

function addEmploy(){
    Modal.style.display = "flex";
    const allInps = document.querySelectorAll("input:not(#role)");
    roleINP.value = "nothing";
    allInps.forEach(allInp =>{
        allInp.value = '';
    })
  
}



function waiter() {

    console.log("oficaёnt lox")
    
}

function chef(){
    console.log("povar com");
}

  //Показывает весь персонал
 

  //Вызывает функции если лог успешен
const checkCall = (function(){
    
    function showEmploys(){
        const employeesSec = document.getElementById('employees');
        if(employeesSec.style.display == "none" ){
            employeesSec.style.display = "block";
    
        }else{
             employeesSec.style.display = "none"; 
        }
    }

    //Показывает рабочие смены
    function Shift(){
        const ShiftSec = document.querySelector(".shift");
        if(ShiftSec.style.display == "none" ){
            ShiftSec.style.display = "block";
        }else{
             ShiftSec.style.display = "none"; 
        }
    }
    //Показывает заказы
    function Orders(){
        const OrdersSec = document.querySelector(".orders");
        if(OrdersSec.style.display == "none" ){
            OrdersSec.style.display = "block";

        }else{
            OrdersSec.style.display = "none"; 
    }

}


    employeesLink.addEventListener('click' , () =>{
            return showEmploys()
        
    })

    shiftLink.addEventListener('click', () =>{
        return Shift()
    })

    ordersLink.addEventListener('click', () =>{
        return Orders()
                   
    })
})

 
checkCall()


function LogIsSuc(event){
    Modal.style.display = "none"
    event.preventDefault()
    if (roleINP.value === "1") admin()
    if (roleINP.value==="2") waiter()
    if(roleINP.value === "3") chef()
    employeesLink.onclick = () => {showEmploys()};
    shiftLink.onclick = () => {Shift()};
    ordersLink.onclick = () =>{Orders()}
    cancelClickListener()
}

function add_shift(){
    Modal.style.display = "flex"
    const shiftModal = document.querySelector(".shifts")
    document.querySelector(".add_employ").style.display = "none";
    shiftModal.style.display = "flex"
}

function add_Order(){
    const orderModal = document.querySelector('.order');
    document.querySelector(".add_employ").style.display = "none";
    Modal.style.display = "flex"
    orderModal.style.display = "flex"
}
 