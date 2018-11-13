var todaydate = new Date();
var currentyear = todaydate.getFullYear();

var user = {
  firstname : "claudy",
  lastname : "faucan",
  country : "belgique",
  age : 47,
  payment : ["paypal"],


  getFirstName : function (){
    alert(this.firstname);
  },

  getLastName : function(){
    alert(this.lastname);
  },

  getBirthday : function(){
    alert(currentyear-this.age);
  }

};


user.getFirstName();
user.getLastName();
user.getBirthday();



var verif = {
  countryVerif : ["FRANCE", "ESPAGNE", "BELGIQUE", "LUXEMBOURG"],
  paymentVerif : ["mastercard", "paypal"],
  agemin : 18,

  getAge : function(){
    if (user.age > this.agemin){
      alert('vous pouvez entrer sur le site');
    }
    else{
      alert("vous n'avez pas l'age requis");
    }
  },

  getCountry : function(){

    
      if(this.countryVerif.includes(user.country.toUpperCase())){
        
      alert("pays autorisé");
      }

      else{
        alert("pays non autorisé");
      }
  },


  getPayment: function(){
    
        user.payment.forEach(payment =>{

          if (this.paymentVerif.includes(payment)) {
            alert("paiement autorisé");
          }
        
    
    
          else {
            alert("Aucun paiement autorisé. Paiements autorisés: Mastercard, Paypal");
          }
        })
      
    
  },


  getVerif: function(){
    verif.getAge();
    verif.getCountry();
    verif.getPayment();
  }
}

verif.getVerif();
