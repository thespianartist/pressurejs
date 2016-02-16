var block = {
  start: function(event){
    console.log('start', event);
  },

  change: function(force, event){
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
  },

  unsupported: function(){
    console.log(this);
    this.innerHTML = 'Your device / browser does not support this :(';
  }
}

Pressure.set(document.querySelectorAll('#elemento1'), block, {preventDefault: true});

Pressure.set(document.querySelectorAll('#joven'), {
  start: function(event){
    console.log('cool it started');
  }
}, {only: '3d', preventDefault: false});
