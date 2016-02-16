var block = {
  start: function(event){
    console.log('start', event);
  },

  change: function(force, event){
     this.style.width = Pressure.map(force, 0, 1, 50, 300) + 'px';
     this.innerHTML = force;
     console.log('change', event);
  },

  startDeepPress: function(event){
    console.log('start deep press', event);
  },

  endDeepPress: function(){
    console.log('end deep press');
  },

  end: function(){
    console.log('end');
    this.innerHTML = 0;
    this.style.width = '50px';
  },

  unsupported: function(){
    console.log(this);
    this.innerHTML = 'Your device / browser does not support this :(';
  }
}

Pressure.set(document.querySelectorAll('#elemento1'), block, {preventDefault: true});

Pressure.set(document.querySelectorAll('#joven'), {
  start: function(event){
    console.log('Se escucha el evento');
  }
}, {only: '3d', preventDefault: false});
