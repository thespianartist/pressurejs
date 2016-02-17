var block = {
  start: function(event){
  },

  change: function(force, event){
     this.style.width = Pressure.map(force, 0, 1, 50, 300) + 'px';
     this.innerHTML = force;
  },

  startDeepPress: function(event){

  },

  endDeepPress: function(){
  },

  end: function(){
    console.log('end');
    this.innerHTML = 0;
    this.style.width = '50px';
  },

  unsupported: function(){
    console.log(this);
    this.innerHTML = "Tu dispositivo y/o navegador no es compatible ): ";
      this.style.width = '100px';
  }
}

Pressure.set(document.querySelectorAll('#elemento1'), block, {preventDefault: true});

Pressure.set(document.querySelectorAll('#joven'), {
  start: function(event){
    console.log('Se escucha el evento');
  }
}, {only: '3d', preventDefault: false});
